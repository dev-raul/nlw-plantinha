import { useNavigation } from '@react-navigation/core';
import React, { useCallback, useState } from 'react';
import { Alert, Keyboard, Platform, TouchableWithoutFeedback } from 'react-native';
import { useDispatch } from 'react-redux';
import Button from '../../components/Button';
import { Creators as UserActions } from '../../store/ducks/user'
import { Container, KeyboardAvoidingView, Content, Form, HeaderForm, FooterForm, Title, Emoji, Input, } from './styles';

const UserIndentification: React.FC = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [name, setName] = useState<string>()
  const [isFocused, setIsFocused] = useState(false)

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)

  }, [])
  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleConfirmar = useCallback(() => {
    if (!name) {
      Alert.alert('Como podemos chamar você  ')
    } else {
      navigation.navigate('Confirmation', {
        title: 'Prontinho',
        subtitle: 'Agora vamos começar a cuidar das suas plantinhas com muito cuidado',
        buttontitle: 'Começar',
        icon: 'smile',
        nextScreend: 'PlantSelect'
      })
      dispatch(UserActions.setName(name))
    }
  }, [name])

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
          <Content>
            <Form>
              <HeaderForm >
                <Emoji> {!!name ? '😄️' : '😃️'} </Emoji>
                <Title>Como podemos {'\n'} chamar você?</Title>
              </HeaderForm>
              <Input
                placeholder='Digite um nome'
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                // placeholderTextColor={colors.heading}
                isFocused={isFocused}
                isValue={!!name}
                onChangeText={setName}
              />
              <FooterForm>
                <Button
                  disabled={!name}
                  onPress={handleConfirmar}
                  text='Confirmar' />
              </FooterForm>
            </Form>
          </Content>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Container>
  )
}

export default UserIndentification;