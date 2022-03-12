import { palette } from 'theme/theme';
import { ButtonWrapper, TitleWrapper } from './button.styled';

interface ButtonProps {
  title: string;
  onClick: () => void;
  color?: string;
  textColor?: string;
}

export const ButtonComponent = ({ title, onClick, color = palette.colors.primary, textColor='#FFFFFF' }: ButtonProps) => {
  return (
    <ButtonWrapper type='submit' color={color} onClick={onClick}>
      <TitleWrapper color={textColor}>{title}</TitleWrapper>
    </ButtonWrapper>
  );
};

export default ButtonComponent;
