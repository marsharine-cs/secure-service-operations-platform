# Web application boundary

**Status:** Planned; no application code has been implemented.

This directory will contain the React and TypeScript client. Its responsibilities are presentation, accessibility, client-side interaction, and communication with documented APIs.

Planned concerns:

- Material UI design system and responsive layouts
- TanStack Query for server state
- Redux Toolkit for limited cross-cutting client state
- React Hook Form and schema-aligned validation
- Vitest/Jest, React Testing Library, and MSW
- Accessible loading, empty, error, and success states

Authorization is enforced by the API, never trusted to the browser.
