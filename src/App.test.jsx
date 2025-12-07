import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders main title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Spr1ngChkn/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders main description', () => {
    render(<App />);
    const descriptionElement = screen.getByText(/Games. Tech. Code./i);
    expect(descriptionElement).toBeInTheDocument();
  });

  test('renders main action button', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button', { name: /::beekawwwk::/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test('does not show Explore component initially', () => {
    render(<App />);
    const exploreQuestion = screen.queryByText(/Like gaming?/i);
    expect(exploreQuestion).not.toBeInTheDocument();
  });

  test('shows Explore component when button is clicked', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button', { name: /::beekawwwk::/i });
    fireEvent.click(buttonElement);
    const exploreQuestion = screen.getByText(/Like gaming?/i);
    expect(exploreQuestion).toBeInTheDocument();
  });

  test('has App-container class', () => {
    const { container } = render(<App />);
    const appContainer = container.querySelector('.App-container');
    expect(appContainer).toBeInTheDocument();
  });
});
