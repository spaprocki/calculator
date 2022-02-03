import { Textfit } from 'react-textfit';
import { useState, useEffect } from 'react/cjs/react.development';
import './Screen.css';

const Screen = ({ value, active }) => {
  const [lowerDisplay, setLowerDisplay] = useState('');
  const [upperDisplay, setUpperDisplay] = useState('');

  useEffect(() => {
    if (active === true) {
      if (value === 'C') {
        setLowerDisplay('');
        setUpperDisplay('');
      }
      if (value === 'Clear' && lowerDisplay !== '') {
          setLowerDisplay(lowerDisplay.slice(0, -1));
        }
      if (value === '+/-') {
        if (/[0-9]/.test(lowerDisplay) === true && /^-/.test(lowerDisplay) === true) {
          setLowerDisplay(lowerDisplay.substring(1));
        }
        if (/[0-9]/.test(lowerDisplay) === true && /^-/.test(lowerDisplay) === false) {
          setLowerDisplay('-' + lowerDisplay);
        }         
      }
      if (value === '.' && /[0-9]/.test(lowerDisplay) && /\./.test(lowerDisplay) === false) {
          setLowerDisplay(lowerDisplay + value);
      }
      if (/[0-9]/.test(value)) {
        setLowerDisplay(lowerDisplay + value);
      }
      if (/$\+|^-|\*|%|\/$/.test(value) && /[0-9]/.test(lowerDisplay)) {
        setUpperDisplay(upperDisplay + lowerDisplay + value);
        setLowerDisplay('');
      }
      if (/\+/.test(value) && /-/.test(value) === false && /[0-9]/.test(lowerDisplay)) {
        setUpperDisplay(upperDisplay + lowerDisplay + value);
        setLowerDisplay('');
      }
      if (value === '=') {
        setUpperDisplay(upperDisplay + lowerDisplay + value);
        setLowerDisplay(eval(upperDisplay + lowerDisplay));
      }
    }
  }, [active]);

  return (
    <>
      <Textfit className='screen' mode='single' max={70}>
        {upperDisplay}
      </Textfit>
      <Textfit className='screen' mode='single' max={70}>
        {lowerDisplay}
      </Textfit>
    </>
  );
};

export default Screen;
