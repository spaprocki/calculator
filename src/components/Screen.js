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
      if (value === 'Clear') {
        if (lowerDisplay === '' && upperDisplay !== '') {
          setLowerDisplay(upperDisplay);
          setLowerDisplay(lowerDisplay.slice(0, -1));
        }
        if (lowerDisplay !== '') {
          setLowerDisplay(lowerDisplay.slice(0, -1));
        }
      }
      if (value === '+-') {
        if (/[0-9]/.test(lowerDisplay) === true && /^-/.test(lowerDisplay) === true) {
          setLowerDisplay(lowerDisplay.slice(0, 1));
        }
        
      }
      if (value === '.') {
        if (lowerDisplay) setLowerDisplay(lowerDisplay + '(-');
      }
      if (/[0-9]/.test(value)) {
        setLowerDisplay(lowerDisplay + value);
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
