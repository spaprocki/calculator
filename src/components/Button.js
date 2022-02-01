import './Button.css';

const Button = ({ className, value, onClick, active }) => {

  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
