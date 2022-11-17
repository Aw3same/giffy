import { fireEvent, render, screen } from '@testing-library/react';
import App from '../../App';

test('Home work as expected', async () => {
    render(<App />);
    const linkElement = await screen.findByText(/Última búsqueda/i);
    expect(linkElement).toBeInTheDocument();
});
test('Search form could be used', async () => {
    render(<App />);
    const input = await screen.findByRole('textbox')
    fireEvent.change(input, {target: { value: 'Luffy'}})
    const button = await screen.findByRole('button')
    fireEvent.click(button)
    const title = await screen.findByText('Luffy')

    expect(title).toBeVisible()

});