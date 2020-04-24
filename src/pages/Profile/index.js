import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TouchableOpacity } from 'react-native';
import Background from '../../components/Background';
import {
  Container, Title, Form, FormInput, SubmitButton, Separator, LogoutButton,
} from './styles';
import { updateProfileRequest } from '../../store/modules/user/actions';
import { signOut } from '../../store/modules/auth/actions';

export default function Dashboard() {
  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();
  const emailRef = useRef();
  const oldPasswordRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    setOldPassword('');
    setPassword('');
    setConfirmPassword('');
  }, [profile]);
  function handleSubmit() {
    dispatch(updateProfileRequest({
      name,
      email,
      oldPassword,
      password,
      confirmPassword,
    }));
  }
  function handleLogout() {
    dispatch(signOut());
  }


  return (
<Background>
  <Container>
    <Title>Meu perfil</Title>
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
        onSubmitEditing={ () => oldPasswordRef.current.focus()}
        value={email}
        onChangeText={setEmail}
      />
      <Separator/>

      <FormInput icon="lock-outline"
        secureTextEntry
        autoCapitalize="none"
        placeholder="Sua senha atual"
        ref={oldPasswordRef}
        returnKeyType="next"
        onSubmitEditing={ () => passwordRef.current.focus()}
        value={oldPassword}
        onChangeText={setOldPassword}
      />
      <FormInput icon="lock-outline"
        secureTextEntry
        autoCapitalize="none"
        placeholder="Sua nova senha secreta"
        ref={passwordRef}
        returnKeyType="next"
        onSubmitEditing={ () => confirmPasswordRef.current.focus()}
        value={password}
        onChangeText={setPassword}
      />
      <FormInput icon="lock-outline"
        secureTextEntry
        autoCapitalize="none"
        placeholder="Confirmação de senha"
        ref={confirmPasswordRef}
        returnKeyType="send"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        onSubmitEditing={handleSubmit}
      />
      <TouchableOpacity onPress={handleSubmit} activeOpacity={0.9}>
      <SubmitButton>
        Atualizar Perfil
      </SubmitButton>
      </TouchableOpacity >


      <TouchableOpacity onPress={handleLogout} activeOpacity={0.9}>
      <LogoutButton >
        Sair do GoBarber
      </LogoutButton>
      </TouchableOpacity>


    </Form>
  </Container>

</Background>


  );
}
