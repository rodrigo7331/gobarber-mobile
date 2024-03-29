import React, { useMemo } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import pt from 'date-fns/locale/pt';
import { TouchableOpacity } from 'react-native';
import { parseISO, formatRelative } from 'date-fns';
import {
  Container, Left, Avatar, Info, Name, Time,
} from './styles';


export default function Appointment({ data, onCancel }) {
  const dateParsed = useMemo(() => formatRelative(parseISO(data.date), new Date(), {
    locale: pt,
    addSuffix: true,
  }), [data.date]);
  return (
            <Container past={data.past}>
            <Left>
              <Avatar source={{ uri: 'https://api.adorable.io/avatars/250/abott@adorable.png' }}/>

              <Info>
                <Name>{data.provider.name}</Name>
                  <Time>{dateParsed}</Time>

              </Info>
            </Left>
           {data.cancelable && !data.canceled_at && (
              <TouchableOpacity onPress={onCancel}>
              <Icon name="event-busy" size={20} color="#f64c75"/>
            </TouchableOpacity>
           )}

          </Container>
  );
}
