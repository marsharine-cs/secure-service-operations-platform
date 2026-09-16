# Contributing

This project is being built as a deliberate learning and portfolio project. Contributions should make both the software and the reasoning behind it easier to understand.

## Workflow

1. Select or create a GitHub issue.
2. Confirm the acceptance criteria and dependencies.
3. Create a branch using `type/issue-number-short-description`.
4. Make one focused change.
5. Add or update tests and documentation.
6. Open a pull request that links the issue.
7. Review the change against the definition of done.
8. Squash-merge after checks pass.

## Branch naming

- `feat/12-case-assignment`
- `fix/24-tenant-filter`
- `docs/7-api-guidance`
- `chore/3-ci-setup`

## Commit messages

Use an imperative conventional prefix:

- `feat: add case status transition`
- `fix: enforce organization scope`
- `test: cover unauthorized assignment`
- `docs: explain audit event model`
- `chore: configure formatter`

## Pull requests

A pull request should:

- solve one coherent problem;
- link its issue with `Closes #<number>` when appropriate;
- explain what changed and why;
- identify security and data-isolation implications;
- include verification steps;
- avoid unrelated refactoring.

## Engineering expectations

- TypeScript and Python code must be typed.
- External input must be validated at system boundaries.
- Tenant-owned data access must include organization scope.
- Secrets must come from the environment or a managed secret store.
- User-facing behavior needs accessible loading, error, and empty states.
- AI output must be treated as untrusted input.
- New behavior requires meaningful automated tests.

## Review checklist

Reviewers should ask:

- Does this meet the acceptance criteria?
- Can one organization access another organization's data?
- Are errors safe and actionable?
- Are tests checking behavior rather than implementation details?
- Are logs useful without exposing secrets or sensitive data?
- Can the author explain the design tradeoffs?
