import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'

interface ContainerProps {
  backgroundColor?: string;
  disabled?: boolean;

}
export const Container = styled(RectButton) <ContainerProps>`
    background-color: ${({ backgroundColor, theme }) => backgroundColor || theme.colors.green};
    height: 56px;
    border-radius: 16px;
    justify-content: center;
    align-items: center;
    opacity: ${({ disabled }) => disabled ? 0.6 : 1};
`;
interface TextButtonProps {
  textColor?: string;
}
export const TextButton = styled.Text<TextButtonProps>`
  font-size: 16px;
  color: ${({ textColor, theme }) => textColor || theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.heading};
  
`
