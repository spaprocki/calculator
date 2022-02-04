import { Textfit } from 'react-textfit';
import { useState, useEffect } from 'react/cjs/react.development';
import './Screen.css';

const Screen = ({ value, active }) => {
  const [lowerDisplay, setLowerDisplay] = useState('');
  const [upperDisplay, setUpperDisplay] = useState('');
  const [isEvaluated, setIsEvaluated] = useState(true);

  useEffect(() => {
    if (active === true) {
      if (value === 'C') {
        setLowerDisplay('');
        setUpperDisplay('');
      }
      if (value === 'Clear') {
        if (isEvaluated === true) {
          setIsEvaluated(false);
          setUpperDisplay('');
        }
          setLowerDisplay(lowerDisplay.slice(0, -1));
        }
      if (value === '+/-') {
        if (isEvaluated === true) {
          setIsEvaluated(false);
          setUpperDisplay('');
        }
        if (/[0-9]/.test(lowerDisplay) === true && /^-/.test(lowerDisplay) === true) {
          setLowerDisplay(lowerDisplay.substring(1));
        }
        if (/[0-9]/.test(lowerDisplay) === true && /^-/.test(lowerDisplay) === false) {
          setLowerDisplay('-' + lowerDisplay);
        }         
      }
      if (value === '.' && /[0-9]/.test(lowerDisplay) && /\./.test(lowerDisplay) === false) {
        if (isEvaluated === true) {
          setIsEvaluated(false);
          setUpperDisplay('');
        }
          setLowerDisplay(lowerDisplay + value);
      }
      if (/[0-9]/.test(value)) {
        if (isEvaluated === true) {
          setIsEvaluated(false);
          setUpperDisplay('');
          setLowerDisplay(value);
        }
        if (isEvaluated === false) {
        setLowerDisplay(lowerDisplay + value);
        }
      }
      if (/\+$|^-|\*|%|\/$/.test(value) && /[0-9]/.test(lowerDisplay)) {
        if (isEvaluated === true) {
          console.log('here we go')
          setIsEvaluated(false);
          setUpperDisplay(lowerDisplay + value);
          setLowerDisplay('')
        }
        if (isEvaluated === false) {
          setUpperDisplay(upperDisplay + lowerDisplay + value);
          setLowerDisplay('');
        }
        
      }
      
      if (value === '=') {
        try {
          setIsEvaluated(true)
          setUpperDisplay(upperDisplay + lowerDisplay + value);
          setLowerDisplay(eval(upperDisplay + lowerDisplay).toString());
        }
        catch (e) {
          console.log(e);
          setIsEvaluated(true);
          setUpperDisplay('');
          setLowerDisplay('Error');
        }
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
