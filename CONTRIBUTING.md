# Contributing

Thanks for your interest in contributing to **ogimg**.

By participating in this project, you agree to follow our Code of Conduct:
see `CODE_OF_CONDUCT.md`.

## Ways to contribute

- Report bugs and request features via GitHub issues
- Improve documentation
- Submit code changes via pull requests

## Development setup

### Prerequisites

- Node.js 20+ recommended
- npm (this repo includes `package-lock.json`)

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open `http://localhost:3000`.

## Quality checks

This repo uses **Biome** for linting/formatting.

```bash
# lint
npm run lint

# lint + auto-fix
npm run lint:fix

# format
npm run format
```

Please run `npm run lint` (and fix issues) before opening a PR.

## Submitting a pull request

- Keep PRs focused and reasonably sized
- Describe the problem and the approach
- Include screenshots/screen recordings for UI changes when possible
- Mention any follow-ups or known limitations

### Suggested PR checklist

- [ ] I ran `npm run lint` and fixed issues
- [ ] I verified the change locally with `npm run dev`
- [ ] I updated docs/README if behavior changed

## Reporting bugs

When opening an issue, please include:

- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Your environment (OS, browser, Node.js version)

## License

By contributing, you agree that your contributions will be licensed under the
Apache License 2.0 (see `LICENSE`).
