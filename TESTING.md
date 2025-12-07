# Testing Guide

This document describes the testing setup and practices for the Spr1ngChkn.tech project.

## Testing Framework

The project uses:
- **Jest**: Test runner and assertion library
- **React Testing Library**: For testing React components
- **@testing-library/jest-dom**: Additional matchers for DOM elements
- **@testing-library/user-event**: For simulating user interactions

## Running Tests

```bash
# Run all tests once
npm test

# Run tests in watch mode (reruns on file changes)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

## Test Coverage

Current test coverage: **96.96%**

Coverage breakdown:
- Statements: 96.96%
- Branches: 95.83%
- Functions: 93.33%
- Lines: 96.96%

## Test Files

### App.test.jsx
Tests for the main App component:
- Renders main title and description
- Renders the action button
- Shows/hides Explore component on button click
- Verifies CSS class structure

### Explore.test.jsx
Tests for the Explore component:
- Initial question rendering
- Button interactions and navigation flow
- All user journey paths:
  - Video Games → Instagram embed
  - Video Games → Tech → Contact form
  - Video Games → Tech → Code Problem → Contact form
  - Video Games → Tech → Code Problem → External link
- Form submission with validation
- Close button functionality
- CSS class structure

## Writing New Tests

When adding new components or features, follow these patterns:

### Basic Component Test
```javascript
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  test('renders component', () => {
    render(<MyComponent />);
    const element = screen.getByText(/expected text/i);
    expect(element).toBeInTheDocument();
  });
});
```

### Testing User Interactions
```javascript
import { render, screen, fireEvent } from '@testing-library/react';

test('handles button click', () => {
  render(<MyComponent />);
  const button = screen.getByRole('button', { name: /click me/i });
  fireEvent.click(button);
  expect(screen.getByText(/result/i)).toBeInTheDocument();
});
```

### Testing Forms
```javascript
test('submits form data', () => {
  render(<MyForm onSubmit={mockSubmit} />);
  
  const input = screen.getByLabelText(/name/i);
  fireEvent.change(input, { target: { value: 'Test' } });
  
  const submitButton = screen.getByRole('button', { name: /submit/i });
  fireEvent.click(submitButton);
  
  expect(mockSubmit).toHaveBeenCalledWith({ name: 'Test' });
});
```

## Best Practices

1. **Test User Behavior**: Focus on what users see and do, not implementation details
2. **Use Semantic Queries**: Prefer `getByRole`, `getByLabelText`, `getByText` over `getByTestId`
3. **Mock External Dependencies**: Mock API calls, timers, and external services
4. **Keep Tests Independent**: Each test should run independently without affecting others
5. **Use Descriptive Names**: Test names should clearly describe what is being tested
6. **Test Edge Cases**: Include tests for error states and edge cases

## Continuous Integration

Tests run automatically on:
- Every push to main/develop branches
- Every pull request
- Before publishing releases

The CI pipeline ensures all tests pass before code is merged or deployed.

## Debugging Tests

To debug a specific test:
```bash
# Run a single test file
npm test -- App.test.jsx

# Run tests matching a pattern
npm test -- --testNamePattern="renders main title"

# Run with verbose output
npm test -- --verbose
```

## Coverage Reports

After running `npm run test:coverage`, view the detailed HTML report:
```bash
open coverage/lcov-report/index.html
```

The report shows:
- Line-by-line coverage
- Uncovered lines
- Branch coverage details
- Function coverage

## Common Testing Patterns

### Testing State Changes
```javascript
test('updates state on interaction', () => {
  render(<Component />);
  expect(screen.getByText(/initial/i)).toBeInTheDocument();
  
  fireEvent.click(screen.getByRole('button'));
  expect(screen.getByText(/updated/i)).toBeInTheDocument();
});
```

### Testing Conditional Rendering
```javascript
test('shows content conditionally', () => {
  const { rerender } = render(<Component show={false} />);
  expect(screen.queryByText(/content/i)).not.toBeInTheDocument();
  
  rerender(<Component show={true} />);
  expect(screen.getByText(/content/i)).toBeInTheDocument();
});
```

### Testing Props
```javascript
test('receives and uses props correctly', () => {
  const mockFn = jest.fn();
  render(<Component onClick={mockFn} title="Test" />);
  
  expect(screen.getByText(/test/i)).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button'));
  expect(mockFn).toHaveBeenCalled();
});
```
