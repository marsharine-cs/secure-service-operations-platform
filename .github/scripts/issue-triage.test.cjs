'use strict';

const assert = require('node:assert/strict');
const test = require('node:test');
const { buildReport } = require('./issue-triage.cjs');

test('reports paginated issue data without pull requests and escapes user titles', () => {
  const report = buildReport({
    repository: 'example/project',
    now: new Date('2026-09-24T12:00:00Z'),
    issues: [
      {
        number: 2,
        title: 'Review | <script>\nnext',
        labels: [],
        assignees: [],
        updated_at: '2026-08-01T12:00:00Z',
      },
      {
        number: 3,
        title: 'A pull request',
        pull_request: { url: 'https://api.github.com/repos/example/project/pulls/3' },
        labels: [],
        assignees: [],
        updated_at: '2026-08-01T12:00:00Z',
      },
      {
        number: 1,
        title: 'Ready',
        labels: [{ name: 'enhancement' }],
        assignees: [{ login: 'owner' }],
        updated_at: '2026-09-24T12:00:00Z',
      },
    ],
  });

  assert.match(report, /\*\*Open issues:\*\* 2 · \*\*Needs review:\*\* 1/);
  assert.match(report, /Review \\\| &lt;script&gt; next/);
  assert.match(report, /Unassigned, Unlabeled, Inactive 54d/);
  assert.ok(!report.includes('A pull request'));
  const allOpen = report.split('## All open issues')[1];
  assert.ok(allOpen.indexOf('[#1]') < allOpen.indexOf('[#2]'));
});

test('handles an empty backlog', () => {
  const report = buildReport({
    repository: 'example/project',
    now: new Date('2026-09-24T12:00:00Z'),
    issues: [],
  });
  assert.match(report, /\*\*Open issues:\*\* 0/);
  assert.match(report, /## Needs review\n\nNone\./);
  assert.match(report, /## All open issues\n\nNone\./);
});
