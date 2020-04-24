import React, { useMemo } from 'react';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import {
  Container, Avatar, Name, Time, SubmitButton,
} from './styles';
import Background from '../../../components/Background';

import api from '../../../services/api';

export default function Confirm({ navigation, route }) {
  const { provider, time } = route.params;

  const timeFormatted = useMemo(
    () => formatRelative(parseISO(time), new Date(), { locale: pt }),
    [time],
  );
  async function handleAddAppointment() {
    await api.post('appointments', {
      provider_id: provider.id,
      date: time,
    });
    navigation.navigate('Dashboard');
  }
  return (
    <Background>
      <Container>
        <Avatar source={{ uri: 'https://api.adorable.io/avatars/250/abott@adorable.png' }}/>
        <Name>{provider.name}</Name>
        <Time>{timeFormatted}</Time>
          <SubmitButton onPress={handleAddAppointment}>
            Confirmar agendamento
          </SubmitButton>
      </Container>
    </Background>
  );
}
