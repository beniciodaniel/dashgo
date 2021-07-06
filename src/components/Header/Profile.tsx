import { Flex, Box, Avatar, Text } from '@chakra-ui/react';
import React from 'react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Beni</Text>
        <Text color="gray.300" fontSize="small">
          beni@uol.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="beni hasegawa"
        src="https://avatars.githubusercontent.com/u/52285940?v=4"
      />
    </Flex>
  );
}
