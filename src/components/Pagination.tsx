import { Stack, Button, Box } from '@chakra-ui/react';

export function Pagination() {
  return (
    <Stack
      direction="row"
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> -<strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <Button
          sm="1"
          fontSize="xs"
          w="4"
          colorScheme="pink"
          disabled
          _disabled={{
            bgColor: 'pink.500',
            cursor: 'default'
          }}
        >
          1
        </Button>
        <Button
          sm="1"
          fontSize="xs"
          w="4"
          bgColor="gray.700"
          _hover={{
            bgColor: 'gray.500'
          }}
        >
          2
        </Button>
        <Button
          sm="1"
          fontSize="xs"
          w="4"
          bgColor="gray.700"
          _hover={{
            bgColor: 'gray.500'
          }}
        >
          3
        </Button>
      </Stack>
    </Stack>
  );
}
