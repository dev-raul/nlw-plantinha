import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
`;
export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
`;

export const Content = styled.View`
  flex: 1;  
  width: 100%;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0px 30px;
`
export const Title = styled.Text`
  font-size:22px;
  text-align: center;
  color: ${({ theme }) => theme.colors.heading};
  margin-top: 20px;
  font-family: ${({ theme }) => theme.fonts.heading};
  line-height: 38px;
  margin-top: 15px;
`;

export const SubTitle = styled.Text`
  font-size: 17px;
  text-align: center;
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.text};
  padding: 10px 0;
`;

export const Main = styled.View`
  flex: 1; 
  width: 100%;
  justify-content: center;
  align-items: center;
`
export const HeaderMain = styled.View`
  width: 100%;
  align-items: center;
`
export const FooterMain = styled.View`
  width: 100%;
  margin-top: 20px;
  padding: 2px 60px;
`
export const Emoji = styled.Text`
  font-size: 78px;
`