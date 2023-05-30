import { BaseButton, GoogleSignInButton, InvertedButton } from "./button.styles";

const BUTTON_TYPE = {
  base:'base',
  google: 'google',
  inverted: 'inverted'
}

const getButton = (buttonType=BUTTON_TYPE.base) => (
  {
    [BUTTON_TYPE.base]: BaseButton,
    [BUTTON_TYPE.google]: GoogleSignInButton,
    [BUTTON_TYPE.inverted]: InvertedButton
  }[buttonType]
)

const Button = ({ children, buttonType="base", ...props }) => {
  const CustomButton = getButton(buttonType)
  return (
    <CustomButton
      {...props}
    >
      {children}
    </CustomButton>
  );
}

export default Button;