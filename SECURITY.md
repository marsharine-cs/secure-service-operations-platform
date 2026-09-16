# Security Policy

## Supported versions

The project is pre-release. Security updates apply to the latest commit on `main`.

## Reporting a vulnerability

Do not open a public issue for a vulnerability that could expose data, credentials, or tenant boundaries. Use GitHub's private vulnerability reporting feature when enabled, or contact the repository owner privately.

Include:

- affected component;
- reproduction steps;
- likely impact;
- suggested mitigation, if known.

## Security principles

- Deny access by default.
- Scope every tenant-owned operation to an organization identifier.
- Apply least privilege to users, services, and cloud resources.
- Store no credentials in source control.
- Validate all client, webhook, and AI-generated input.
- Keep an append-only audit record for sensitive state changes.
- Require human confirmation before AI suggestions change operational data.
- Avoid sensitive personal data in logs, traces, prompts, and model outputs.

## Out of scope for public reports

Reports based only on planned features or documentation, without implemented vulnerable code, are not actionable. Documentation corrections are welcome as regular issues.
