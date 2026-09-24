'use strict';

const DAY_MS = 24 * 60 * 60 * 1000;
const STALE_DAYS = 30;

function safeCell(value) {
  return String(value)
    .replace(/[\r\n\t]+/g, ' ')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\\/g, '\\\\')
    .replace(/\|/g, '\\|')
    .replace(/\[/g, '\\[')
    .replace(/\]/g, '\\]');
}

function buildReport({ issues, repository, now }) {
  // GitHub's repository issues endpoint also includes pull requests.
  const openIssues = issues.filter((issue) => !issue.pull_request);
  openIssues.sort((a, b) => a.number - b.number);

  const rows = openIssues.map((issue) => {
    const labels = issue.labels.map((label) =>
      typeof label === 'string' ? label : label.name
    );
    const assignees = issue.assignees.map((assignee) => assignee.login);
    const inactiveDays = Math.max(0, Math.floor((now - new Date(issue.updated_at)) / DAY_MS));
    const flags = [
      ...(assignees.length ? [] : ['Unassigned']),
      ...(labels.length ? [] : ['Unlabeled']),
      ...(inactiveDays >= STALE_DAYS ? [`Inactive ${inactiveDays}d`] : []),
    ];
    const link = `[#${issue.number}](https://github.com/${repository}/issues/${issue.number})`;
    return {
      flags,
      unassigned: !assignees.length,
      unlabeled: !labels.length,
      inactive: inactiveDays >= STALE_DAYS,
      markdown: `| ${link} | ${safeCell(issue.title)} | ${labels.map(safeCell).join(', ') || '—'} | ${assignees.map(safeCell).join(', ') || '—'} | ${issue.updated_at.slice(0, 10)} | ${flags.join(', ') || '—'} |`,
    };
  });

  const needsReview = rows.filter((row) => row.flags.length);
  const lines = [
    '# Issue triage report',
    '',
    `Repository: ${repository}  `,
    `Generated: ${now.toISOString()}`,
    '',
    'This is a read-only snapshot of open issues. Pull requests are excluded. “Inactive” means no update in at least 30 days; flags are review prompts, not priority judgments.',
    '',
    `**Open issues:** ${rows.length} · **Needs review:** ${needsReview.length} · **Unassigned:** ${rows.filter((row) => row.unassigned).length} · **Unlabeled:** ${rows.filter((row) => row.unlabeled).length} · **Inactive:** ${rows.filter((row) => row.inactive).length}`,
    '',
    '## Needs review',
    '',
    ...table(needsReview),
    '',
    '## All open issues',
    '',
    ...table(rows),
    '',
  ];
  return lines.join('\n');
}

function table(rows) {
  if (!rows.length) return ['None.'];
  return [
    '| Issue | Title | Labels | Assignees | Updated (UTC) | Review flags |',
    '| --- | --- | --- | --- | --- | --- |',
    ...rows.map((row) => row.markdown),
  ];
}

module.exports = { buildReport };
