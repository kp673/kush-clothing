import './button.styles.scss';

const BUTTON_TYPE = {
  'google': 'google-sign-in',
  'inverted': 'inverted'
}

const Button = ({ children, buttonType, ...props }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE[buttonType]}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;