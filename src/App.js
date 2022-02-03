import './App.css';
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
                /*(e.target.value === 'C') ? setInput('') :
                (e.target.value === 'Clear') ? setInput(input.slice(0, -1)) :
                (e.target.value === '.' && /[0-9]/.test(input) && (/\./.test(input) === false)) ? setInput(input + e.target.value) :
                ((/\+|\*|-|%/.test(e.target.value))  && (/\+|\*|-|%$/.test(input) === false)) ? setInput(input + e.target.value) :
                (/[0-9]/.test(e.target.value)) ? setInput(input + e.target.value) :
                (e.target.value === '=') ? 
                  setInput(
                    String(eval(input)).length > 3 &&
                      String(eval(input)).includes(".")
                      ? String(eval(input).toFixed(4))
                      : String(eval(input)))
                 : console.log('else')
                  //setInput(input + e.target.value)
                  //console.log(/[0-9]/.test(input));
                  //console.log(/\./.test(input));
                
                /*else {
                  console.log('else')
                  
                }*/
                
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
