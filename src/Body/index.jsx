import { Box, HStack, VStack } from "@chakra-ui/react";
import GameBox from "../GameBox";

export default function Body() {
  const handleClick = (choice) => {
    console.log(choice);
  };
  return (
    <HStack mt={50} mb={100}>
      <Box h="278px" w="313px" mx="auto" >
        <VStack>
          <HStack>
            <GameBox
              id="Whatsup"
              value={3}
              type="rock"
              
            />
            <GameBox type="paper" />
          </HStack>
          <GameBox type="scissors"/>
        </VStack>
      </Box>
      <Box h="278px" w="313px" border="2px solid white" borderRadius={34}>
        hi
      </Box>
    </HStack>
  );
}
