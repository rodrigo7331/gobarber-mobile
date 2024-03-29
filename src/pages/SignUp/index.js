import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image } from 'react-native';

import Background from '../../components/Background';

import logo from '../../assets/logo.png';
import {
  Container, Form, FormInput, SubmitButton, SignLink, SignLinkText,
} from './styles';
import { signUpRequest } from '../../store/modules/auth/actions';

export default function SignUp({ navigation }) {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit() {
    dispatch(signUpRequest(name, email, password));
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
          value={name}
          onChangeText={setName}
          />

          <FormInput icon="mail-outline"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite seu e-mail"
          ref={emailRef}
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
          value={password}
          onChangeText={setPassword}
          onSubmitEditing={handleSubmit}

          />
        <SubmitButton loading={loading} onPress={handleSubmit}>
          Criar conta
        </SubmitButton>
        </Form>
        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Já tenho uma conta</SignLinkText>
        </SignLink>
      </Container>


    </Background>

  );
}
