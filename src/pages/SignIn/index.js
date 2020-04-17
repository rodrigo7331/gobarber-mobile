import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Image } from 'react-native';

import Background from '../../components/Background';

import logo from '../../assets/logo.png';
import {
  Container, Form, FormInput, SubmitButton, SignLink, SignLinkText,
} from './styles';
import { SignInRequest, signInRequest } from '../../store/modules/auth/actions';

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();
  const passwordRef = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>

          <FormInput icon="mail-outline"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite seu e-mail"
          returnKeyType="next"
          onSubmitEditing={ () => passwordRef.current.focus()}
          value={email}
          onChangeText={setEmail}
          />

          <FormInput icon="lock-outline"
          secureTextEntry
          autoCapitalize="none"
          placeholder="Sua senha secreta"
          ref={passwordRef}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={password}
          onChangeText={setPassword}
          />
        <SubmitButton onPress={handleSubmit}>
          Acessar
        </SubmitButton>
        </Form>
        <SignLink onPress={() => navigation.push('SignUp')}>
          <SignLinkText>Criar conta gratuita</SignLinkText>
        </SignLink>
      </Container>


    </Background>

  );
}
