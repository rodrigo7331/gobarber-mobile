import React, { useState, useEffect } from 'react';
import api from '../../../services/api';

import Background from '../../../components/Background';
import {
  Container, Provider, ProviderList, Avatar, Name,
} from './styles';

export default function SelectProvider({ navigation }) {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    async function loadProviders() {
      const response = await api.get('providers');
      setProviders(response.data);
    }
    loadProviders();
  }, []);
  return (

    <Background>
      <Container>
        <ProviderList
        data={providers}
        keyExtractor={(provider) => String(provider.id)}
        renderItem={({ item: provider }) => (
          <Provider onPress={() => navigation.navigate('SelectDateTime', { provider })}>
            <Avatar source={{ uri: 'https://api.adorable.io/avatars/250/abott@adorable.png' }}/>
            <Name>{provider.name}</Name>
          </Provider>
        )}/>
      </Container>
    </Background>
  );
}
