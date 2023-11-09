import { Box, HStack, VStack } from "@chakra-ui/react";
import GameBox from "../GameBox";

export default function Body() {
  return (
    <Box
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      h="278px"
      w="313px"
      mx="auto"
      my={100}
    >
      <VStack>
        <HStack>
          <GameBox type='rock' mr="30px" />
          <GameBox type='paper' />
        </HStack>
        <GameBox type='scissors' mt="500px" />
      </VStack>
    </Box>
  );
}
