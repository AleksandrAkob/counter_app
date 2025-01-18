import { render, screen } from '@testing-library/react';
import App from './App';
import {useState} from 'react'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});





function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Счётчик: {count}</h1>

      <button onClick={() => setCount(count + 1)}>Увеличить</button>
      <button onClick={() => setCount(count - 1)}>Уменьшить</button>
      
    </div>
  );
}

export default App;
