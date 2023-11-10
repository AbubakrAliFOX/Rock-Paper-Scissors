import { Box, HStack, VStack, Center } from "@chakra-ui/react";
import GameBoxChoice from "../GameBoxChoice";
import GameBox from "../GameBox";
import { GameContext } from "../GameContext";
import { useContext } from "react";

export default function Body() {
  const { choice, setChoice } = useContext(GameContext);
  return (
    <HStack mt={50} mb={100}>
      <Box
        h="278px"
        w="313px"
        mx="auto"
        display={choice.gameDone == true ? "none" : "block"}
      >
        <VStack>
          <HStack>
            <GameBoxChoice id="Whatsup" value={3} type="rock" />
            <GameBoxChoice type="paper" />
          </HStack>
          <GameBoxChoice type="scissors" />
        </VStack>
      </Box>
      <Box
        display={choice.gameDone == true ? "block" : "none"}
        h="278px"
        w="313px"
        // border="2px solid white"
        // borderRadius={34}
      >
        <Center>
          <VStack>
            <HStack>
              <GameBox type="scissors" />
              <GameBox type="scissors" />
            </HStack>
          </VStack>
        </Center>
      </Box>
    </HStack>
  );
}
