import React from 'react'
import userEvent from '@testing-library/user-event'
import ContactForm from './ContactForm'
import { render, screen } from '@testing-library/react'

test("Renders without errors", async () => {
    render(<ContactForm />);

    const firstNameInput = screen.getByPlaceholderText(/edd/i);
    const lastNameInput = screen.getByPlaceholderText(/burke/i);
    const emailInput = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i);    
    const messageInput = screen.getByLabelText(/message/i);
    const button = screen.getByRole('button', {name: /submit/i});

    userEvent.type(firstNameInput, "Anhtuan");
    userEvent.type(lastNameInput, "Tran");
    userEvent.type(emailInput, "randomemail@gmail.com");
    userEvent.type(messageInput, "Hello there");
    userEvent.click(button);

    const preElement = await screen.findByText(/Anhtuan/i);
    expect(preElement).toBeInTheDocument();
})