import { Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';

import { Text } from 'react-native';
import colors from '../../styles/colors';

import { Container, Avatar, RigthSide,Button, OnlineStatus } from './styles';

const Header : React.FC = () => {
   return (
   <Container>
      <Avatar>
         <OnlineStatus/>
      </Avatar>

      <RigthSide>
         <Button>
            <MaterialIcons
               name='notifications-none'
               size={26}
               color={colors.black}
            />
         </Button>
         <Button>
            <MaterialCommunityIcons
               name='message-outline'
               size={26}
               color={colors.black}
            />
         </Button>
         <Button>
            <Feather
               name='search'
               size={26}
               color={colors.black}
            />
         </Button>

      </RigthSide>

    </Container>
   );
};

export default Header;
