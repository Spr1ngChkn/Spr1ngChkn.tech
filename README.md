# Spr1ngChkn.tech

A web application showcasing games, tech, and code - built with React.

## Description

Spr1ngChkn.tech is an interactive web application featuring:
- Interactive question flow to guide users
- Gaming content with Instagram integration
- Tech support contact forms
- Code problem assistance
- Responsive design with custom styling

## Prerequisites

- Node.js (v20 or higher recommended)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Spr1ngChkn/Spr1ngChkn.tech.git
cd Spr1ngChkn.tech
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Development Mode

Run the application in development mode with hot reloading:
```bash
npm run dev
```

The app will open in your browser at `http://localhost:3000`.

### Build for Production

Create a production-optimized build:
```bash
npm run build
```

The built files will be in the `dist` directory.

### Running Tests

Run all tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

Run tests with coverage:
```bash
npm run test:coverage
```

### Linting

Check code quality:
```bash
npm run lint
```

## Project Structure

```
Spr1ngChkn.tech/
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   ├── Explore.jsx      # Interactive exploration component
│   ├── index.jsx        # Application entry point
│   ├── index.html       # HTML template
│   ├── App.test.jsx     # Tests for App component
│   └── Explore.test.jsx # Tests for Explore component
├── Spr1ngChkn_tech_files/ # Original source files
├── .github/
│   └── workflows/
│       └── npm-publish.yml # CI/CD workflow
├── package.json         # Project dependencies and scripts
├── webpack.config.js    # Webpack configuration
├── .babelrc.js         # Babel configuration
├── .eslintrc.js        # ESLint configuration
└── jest.setup.js       # Jest configuration
```

## Features

- **Interactive UI**: Guided question flow for users
- **Gaming Content**: Embedded Instagram reels showcase
- **Contact Forms**: Multiple contact paths based on user needs
- **Responsive Design**: Works on desktop and mobile devices
- **Modern Stack**: Built with React 18, Webpack 5, and Jest

## Testing

The application includes comprehensive test coverage:
- Component rendering tests
- User interaction tests
- Form submission tests
- Navigation flow tests

## CI/CD

The project uses GitHub Actions for continuous integration:
- Automated testing on push
- Package publishing to npm registry on release

## License

MIT

## Author

Spr1ngChkn

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
