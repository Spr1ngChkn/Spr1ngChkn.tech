import { render, screen, fireEvent } from '@testing-library/react';
import Explore from './Explore';

describe('Explore Component', () => {
  const mockOnClose = jest.fn();

  beforeEach(() => {
    mockOnClose.mockClear();
  });

  test('renders initial video games question', () => {
    render(<Explore onClose={mockOnClose} />);
    const question = screen.getByText(/Like gaming?/i);
    expect(question).toBeInTheDocument();
  });

  test('renders True and False buttons initially', () => {
    render(<Explore onClose={mockOnClose} />);
    const trueButtons = screen.getAllByRole('button', { name: /True/i });
    const falseButtons = screen.getAllByRole('button', { name: /False/i });
    expect(trueButtons.length).toBeGreaterThan(0);
    expect(falseButtons.length).toBeGreaterThan(0);
  });

  test('renders close button', () => {
    render(<Explore onClose={mockOnClose} />);
    const closeButton = screen.getByRole('button', { name: /X/i });
    expect(closeButton).toBeInTheDocument();
  });

  test('calls onClose when close button is clicked', () => {
    render(<Explore onClose={mockOnClose} />);
    const closeButton = screen.getByRole('button', { name: /X/i });
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test('navigates to Instagram embed when video games True is clicked', () => {
    render(<Explore onClose={mockOnClose} />);
    const trueButton = screen.getAllByRole('button', { name: /True/i })[0];
    fireEvent.click(trueButton);
    const instagramText = screen.getByText(/Peep these Clips/i);
    expect(instagramText).toBeInTheDocument();
  });

  test('navigates to tech question when video games False is clicked', () => {
    render(<Explore onClose={mockOnClose} />);
    const falseButton = screen.getAllByRole('button', { name: /False/i })[0];
    fireEvent.click(falseButton);
    const techQuestion = screen.getByText(/Do you need a technician?/i);
    expect(techQuestion).toBeInTheDocument();
  });

  test('navigates to contact form when tech True is clicked', () => {
    render(<Explore onClose={mockOnClose} />);
    // Click False on video games
    const videoGamesFalse = screen.getAllByRole('button', { name: /False/i })[0];
    fireEvent.click(videoGamesFalse);
    // Click True on tech question
    const techTrue = screen.getAllByRole('button', { name: /True/i })[0];
    fireEvent.click(techTrue);
    const formTitle = screen.getByText(/How Can We Help?/i);
    expect(formTitle).toBeInTheDocument();
  });

  test('navigates to code problem question when tech False is clicked', () => {
    render(<Explore onClose={mockOnClose} />);
    // Click False on video games
    const videoGamesFalse = screen.getAllByRole('button', { name: /False/i })[0];
    fireEvent.click(videoGamesFalse);
    // Click False on tech question
    const techFalse = screen.getAllByRole('button', { name: /False/i })[0];
    fireEvent.click(techFalse);
    const codeProblemQuestion = screen.getByText(/Having problems with your code?/i);
    expect(codeProblemQuestion).toBeInTheDocument();
  });

  test('navigates to contact form when code problem True is clicked', () => {
    render(<Explore onClose={mockOnClose} />);
    // Navigate through: video games False -> tech False -> code problem True
    fireEvent.click(screen.getAllByRole('button', { name: /False/i })[0]);
    fireEvent.click(screen.getAllByRole('button', { name: /False/i })[0]);
    fireEvent.click(screen.getAllByRole('button', { name: /True/i })[0]);
    const formTitle = screen.getByText(/Having Problems With Your Code?/i);
    expect(formTitle).toBeInTheDocument();
  });

  test('navigates to external link when code problem False is clicked', () => {
    render(<Explore onClose={mockOnClose} />);
    // Navigate through: video games False -> tech False -> code problem False
    fireEvent.click(screen.getAllByRole('button', { name: /False/i })[0]);
    fireEvent.click(screen.getAllByRole('button', { name: /False/i })[0]);
    fireEvent.click(screen.getAllByRole('button', { name: /False/i })[0]);
    const externalLinkText = screen.getByText(/No worries, here are some other resources!/i);
    expect(externalLinkText).toBeInTheDocument();
  });

  test('renders contact form with all fields', () => {
    render(<Explore onClose={mockOnClose} />);
    // Navigate to contact form
    fireEvent.click(screen.getAllByRole('button', { name: /False/i })[0]);
    fireEvent.click(screen.getAllByRole('button', { name: /True/i })[0]);
    
    const nameInput = screen.getByLabelText(/Name:/i);
    const goalInput = screen.getByLabelText(/Goal:/i);
    const contactInput = screen.getByLabelText(/Contact:/i);
    
    expect(nameInput).toBeInTheDocument();
    expect(goalInput).toBeInTheDocument();
    expect(contactInput).toBeInTheDocument();
  });

  test('submits contact form with valid data', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    render(<Explore onClose={mockOnClose} />);
    
    // Navigate to contact form
    fireEvent.click(screen.getAllByRole('button', { name: /False/i })[0]);
    fireEvent.click(screen.getAllByRole('button', { name: /True/i })[0]);
    
    const nameInput = screen.getByLabelText(/Name:/i);
    const goalInput = screen.getByLabelText(/Goal:/i);
    const contactInput = screen.getByLabelText(/Contact:/i);
    const submitButton = screen.getByRole('button', { name: /Submit/i });
    
    fireEvent.change(nameInput, { target: { value: 'Test User' } });
    fireEvent.change(goalInput, { target: { value: 'Testing the app' } });
    fireEvent.change(contactInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);
    
    expect(consoleSpy).toHaveBeenCalledWith('Form Submitted:', {
      name: 'Test User',
      goal: 'Testing the app',
      contact: 'test@example.com',
    });
    
    const thankYouMessage = screen.getByText(/Thank you for your submission!/i);
    expect(thankYouMessage).toBeInTheDocument();
    
    consoleSpy.mockRestore();
  });

  test('has proper overlay and content classes', () => {
    const { container } = render(<Explore onClose={mockOnClose} />);
    const overlay = container.querySelector('.explore-overlay');
    const content = container.querySelector('.explore-content');
    
    expect(overlay).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });
});
