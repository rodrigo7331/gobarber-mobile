import React, { useRef } from 'react';
import { Image } from 'react-native';
import Input from '../../components/Input';
import Background from '../../components/Background';
import Button from '../../components/Button';
import logo from '../../assets/logo.png';
import {
  Container, Form, FormInput, SubmitButton, SignLink, SignLinkText,
} from './styles';

export default function SignUp({ navigation }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  function handleSubmit() {

  }
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput icon="person-outline"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite seu nome completo"
          returnKeyType="next"
          onSubmitEditing={ () => emailRef.current.focus()}
          />

          <FormInput icon="mail-outline"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite seu e-mail"
          ref={emailRef}
          returnKeyType="next"
          onSubmitEditing={ () => passwordRef.current.focus()}
          />

          <FormInput icon="lock-outline"
          secureTextEntry
          autoCapitalize="none"
          placeholder="Sua senha secreta"
          ref={passwordRef}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          />
        <SubmitButton>
          Acessar
        </SubmitButton>
        </Form>
        <SignLink onPress={() => navigation.push('SignIn')}>
          <SignLinkText>Já tenho uma conta</SignLinkText>
        </SignLink>
      </Container>


    </Background>

  );
}
