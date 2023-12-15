import {render, screen, cleanup} from '@testing-library/react'
import App from '../App';
test('should render landing page',()=>{
    render(<App/>);
    const landingElement = screen.getByTestId('landing-page')
    expect(landingElement).toBeInTheDocument()
    expect(landingElement).toHaveTextContent('About')
    expect(landingElement).toHaveTextContent('Services')
    expect(landingElement).toHaveTextContent('Projects')

    


})