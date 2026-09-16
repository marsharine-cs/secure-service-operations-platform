# ADR 0001: Monorepo with explicit service boundaries

- **Status:** Accepted
- **Date:** 2026-09-16

## Context

The project needs a web client, a primary API, an AI-oriented Python service, shared contracts, and infrastructure definitions. They evolve together and are maintained by one developer during the portfolio phase.

## Decision

Use one repository with these top-level boundaries:

- `apps/web` for the React client;
- `apps/api` for the NestJS API and worker entry points;
- `services/ai-triage` for the FastAPI service;
- `packages/contracts` for shared schemas or generated clients;
- `infra` for deployment definitions.

The API remains the source of truth for operational data. The AI service communicates through a narrow internal contract and does not write directly to operational tables.

## Consequences

### Positive

- One pull request can update contracts and consumers together.
- Shared quality gates and documentation are easier to maintain.
- Local development and onboarding are simpler.
- Service boundaries remain visible without premature repository sprawl.

### Negative

- CI must avoid rebuilding every component unnecessarily.
- Ownership rules are conceptual while one person maintains the project.
- Shared code can accidentally create tight coupling if boundaries are ignored.

## Revisit when

Separate repositories may be justified if teams deploy independently, access controls diverge, or release cadence becomes materially different.
