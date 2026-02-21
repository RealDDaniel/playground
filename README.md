# Playground for GitHub Actions

A simple Deno TypeScript project with utilities for calculations, string manipulation, and array operations. Goal is experimenting GitHub Actions with Deno.

## Quick Start

### Prerequisites

- [Deno](https://deno.land/) installed (v1.x or v2.x)

### Installation

No installation needed! Deno handles dependencies automatically.

### Running the Demo

```bash
deno run main.ts
```

Or use the task runner:

```bash
deno task start
```

## Testing

Run all tests:

```bash
deno test --allow-env
```

Or use the task runner:

```bash
deno task test
```

Watch mode:

```bash
deno task test:watch
```

Generate coverage:

```bash
deno task test:coverage
deno task coverage
```

## Development Commands

```bash
# Format code
deno task fmt

# Check formatting without modifying
deno task fmt:check

# Lint code
deno task lint

# Type check
deno task check

# Run with file watching
deno task dev
```

Happy coding with Deno! 🦕
