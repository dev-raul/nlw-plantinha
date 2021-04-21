import { useNavigation } from '@react-navigation/core';
import React, { useCallback, useState } from 'react';
import { Keyboard, Platform, TouchableWithoutFeedback } from 'react-native';
import Button from '../../components/Button';

import { Container, KeyboardAvoidingView, Content, Form, HeaderForm, FooterForm, Title, Emoji, Input, } from './styles';

const UserIndentification: React.FC = () => {
  const navigation = useNavigation()
  const [name, setName] = useState<string>()
  const [isFocused, setIsFocused] = useState(false)

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)

  }, [])
  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])


  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={() => { }} >
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
                isFocused={isFocused}
                isValue={!!name}
                onChangeText={setName}
              />
              <FooterForm>
                <Button
                  disabled={!name}
                  onPress={() => navigation.navigate('Confirmation')}
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