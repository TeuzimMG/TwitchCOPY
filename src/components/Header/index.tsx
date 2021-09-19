import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';

import { Text } from 'react-native';

import { Container } from './styles';

const Header : React.FC = () => {
   return (
   <Container>
      <Avatar>
         <OnlineStatus/>
      </Avatar>

      <RigthSide>
         <Button>
            <MaterialIcons
         </Button>

      </RigthSide>

    </Container>
   );
};

export default Header;
