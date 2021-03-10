import React, { useState } from 'react';

function News() {
  // Объявление переменной состояния, которую мы назовём "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Вы кликнули {count} раз</p>
      <button onClick={() => setCount(count + 1)}>
        Нажми на меня
      </button>
      <button onClick={() => setCount(count - 5)}>
       На меня не нажимай!
      </button>
    </div>
  );
}
export default News