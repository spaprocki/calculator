import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';
import React, { useState } from 'react';

const btnValues = [
  ['C', '+/-', '%', '/'],
  [7, 8, 9, '*'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.','Clear', '='],
];

function App() {

  const [input, setInput] = useState('');
  const [active, setActive] = useState(false)

  return (
    <Wrapper>
      <Screen value={input} active={active} />
      <ButtonBox>
        {btnValues.flat().map((value, i) => {
          return (
            <button
              key={i}
              className={value === '=' ? 'equals' : ''}
              value={value}
              onClick={(e) => { setInput(e.target.value)
                                setActive(true)
                                setTimeout(()=>setActive(false),100)
              }}
                  >
                {value}
                </button>
          );
        })}
      </ButtonBox>
    </Wrapper>
  );
}

export default App;
