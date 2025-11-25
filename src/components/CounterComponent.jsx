import { useState } from 'react';

export default function CounterComponent() {
  /* necesito una variable de estado para mantener el valor del contador */
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <p>Contador: {counter}</p>
      <button onClick={handleClick}>+</button>
    </div>
  );
}
