import { RectButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';
interface ContainerProps {
  active: boolean;
}
export const Container = styled(RectButton) <ContainerProps>`
  background-color: ${({ theme }) => theme.colors.shape};
  width: 76px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin: 0 5px;
  elevation: 2;
  box-shadow: 10px 5px 5px black;
  ${({ active }) => active && css`
    background-color: ${({ theme }) => theme.colors.green_light};
  `}
`;
interface TitleProps {
  active: boolean;
}
export const Title = styled.Text<TitleProps>`
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.text};
  ${({ active }) => active && css`
    color: ${({ theme }) => theme.colors.green};
    font-family: ${({ theme }) => theme.fonts.heading};
  `}
`