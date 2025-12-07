# Contributing to Spr1ngChkn.tech

Thank you for your interest in contributing to Spr1ngChkn.tech! This document provides guidelines and instructions for contributing.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/Spr1ngChkn.tech.git
   cd Spr1ngChkn.tech
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Create a branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### Running the Development Server

```bash
npm run dev
```

This starts a development server at `http://localhost:3000` with hot reloading.

### Making Changes

1. Make your changes to the code
2. **Lint your code**: `npm run lint`
3. **Write or update tests** for your changes
4. **Run tests**: `npm test`
5. **Build the project**: `npm run build`

### Code Style

- Follow the existing code style
- Use meaningful variable and function names
- Keep functions small and focused
- Add comments for complex logic
- Use ES6+ features

### Testing Requirements

- All new features must include tests
- Maintain or improve test coverage (currently 96.96%)
- Tests should be clear and descriptive
- See [TESTING.md](TESTING.md) for testing guidelines

## Pull Request Process

1. **Update documentation** if needed (README.md, TESTING.md, etc.)
2. **Ensure all tests pass**: `npm test`
3. **Ensure linting passes**: `npm run lint`
4. **Ensure build succeeds**: `npm run build`
5. **Commit your changes** with clear, descriptive messages:
   ```bash
   git commit -m "Add feature: description of feature"
   ```
6. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Open a Pull Request** on GitHub with:
   - Clear title describing the change
   - Description of what changed and why
   - Reference to any related issues

## Commit Message Guidelines

- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Keep first line under 72 characters
- Reference issues and pull requests when relevant

Examples:
```
Add user authentication feature

Fix navigation bug in Explore component

Update documentation for testing setup
```

## Code Review Process

1. A maintainer will review your pull request
2. Address any feedback or requested changes
3. Once approved, a maintainer will merge your PR

## Reporting Bugs

When reporting bugs, include:
- **Description**: Clear description of the bug
- **Steps to Reproduce**: Detailed steps to reproduce the issue
- **Expected Behavior**: What you expected to happen
- **Actual Behavior**: What actually happened
- **Environment**: Browser, OS, Node version
- **Screenshots**: If applicable

## Suggesting Features

When suggesting features, include:
- **Use Case**: Why this feature is needed
- **Proposed Solution**: How you think it could work
- **Alternatives**: Other approaches you've considered
- **Additional Context**: Any other relevant information

## Project Structure

```
Spr1ngChkn.tech/
├── src/                 # Source files
│   ├── App.jsx         # Main application component
│   ├── Explore.jsx     # Exploration flow component
│   ├── index.jsx       # Entry point
│   └── *.test.jsx      # Test files
├── .github/workflows/  # CI/CD workflows
├── dist/               # Build output (generated)
├── node_modules/       # Dependencies (generated)
└── configuration files
```

## Resources

- [React Documentation](https://react.dev/)
- [Jest Documentation](https://jestjs.io/)
- [Testing Library](https://testing-library.com/)
- [Webpack Documentation](https://webpack.js.org/)

## Questions?

If you have questions, feel free to:
- Open an issue for discussion
- Reach out to the maintainers

## License

By contributing, you agree that your contributions will be licensed under the same MIT License that covers the project.

Thank you for contributing! 🎉
