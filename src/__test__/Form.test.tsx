import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Form, { IUser } from '../components/Common/Form';
import authSlice, { Login, register } from '../store/slice/authSlice';

// Mocking react-redux
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

// Mocking authSlice
jest.mock('../store/slice/authSlice', () => ({
    ...jest.requireActual('../store/slice/authSlice'),
    register: jest.fn(), // Mock the register function
    Login: jest.fn(),
  }));

// Mock Link component
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
  Link: jest.fn().mockImplementation(({ children }) => <a>{children}</a>),
}));
global.alert = jest.fn();
describe('Form component', () => {
  const mockDispatch = jest.fn();
  const mockNavigate = jest.fn();

  beforeEach(() => {
    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders Form component', () => {
    const { getByText, getByPlaceholderText } = render(<Form title="signup" />);

    expect(getByText('SignUp')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter your email')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter your Password')).toBeInTheDocument();
    expect(getByText('Register')).toBeInTheDocument();
  });

  test('form submission with valid input', async () => {
    const mockDispatch = jest.fn(); // Create a mock function for dispatch
    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);
  
    const { getByPlaceholderText, getByText } = render(<Form title="signup" />);
    const emailInput = getByPlaceholderText('Enter your email');
    const passwordInput = getByPlaceholderText('Enter your Password');
  
    fireEvent.change(emailInput, { target: { value: 'eve.holt@reqres.in' } });
    fireEvent.change(passwordInput, { target: { value: 'pistol' } });
    fireEvent.submit(getByText('Register'));
  
    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith(register({ email: 'eve.holt@reqres.in', password: 'pistol' }));
    });
  });
  test('form submission with empty input', async () => {
    const { getByText } = render(<Form title="signup" />);
    fireEvent.submit(getByText('Register'));

    await waitFor(() => {
      expect(register).not.toHaveBeenCalled();
      expect(mockNavigate).not.toHaveBeenCalled();
      expect(getByText('Please fill the fields in the form')).toBeInTheDocument();
    });
  });

  test('form submission with valid input for login', async () => {
    const { getByPlaceholderText, getByText } = render(<Form title="login" />);
    const emailInput = getByPlaceholderText('Enter your email');
    const passwordInput = getByPlaceholderText('Enter your Password');
  
    fireEvent.change(emailInput, { target: { value: 'eve.holt@reqres.in' } });
    fireEvent.change(passwordInput, { target: { value: 'cityslicka' } });
  
    fireEvent.submit(getByText('Submit'));
  
    await waitFor(() => {
      expect(Login).toHaveBeenCalledWith({
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      });
    });
  });
  test('form submission with empty input', async () => {
    const { getByText } = render(<Form title="login" />);
    fireEvent.submit(getByText('Submit'));

    await waitFor(() => {
      expect(Login).not.toHaveBeenCalled();
      expect(mockNavigate).not.toHaveBeenCalled();
      expect(getByText('Please fill the fields in the form')).toBeInTheDocument();
    });
  });
});
