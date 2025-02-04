import React from 'react';
import { useState } from 'react';

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Clique aqui +
      </button>
      <button onClick={() => setCount(count - 1)}>
        Clique aqui -
      </button>
    </div>
  );
}