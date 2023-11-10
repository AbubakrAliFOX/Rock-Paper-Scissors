import { Box, HStack, VStack, Text } from "@chakra-ui/react";
import GameBoxChoice from "../GameBoxChoice";
import GameBox from "../GameBox";
import { GameContext } from "../GameContext";
import { useContext } from "react";

export default function Body() {
  const { choice, setChoice } = useContext(GameContext);
  const showWinner = () => {
    if(choice.winner == 'user') {
        return 'You have won!'
    } else if (choice.winner == 'house') {
        return 'The house has won!'
    } else if (choice.winner == 'draw') {
        return 'It is a draw!'
    }
  }
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
        mx="auto"
        // border="2px solid white"
        // borderRadius={34}
      >
          <VStack>
            <HStack>
              <GameBox type={choice.user} />
              <GameBox type={choice.house} />
            </HStack>
            <Text>{showWinner()} </Text>
          </VStack>
      </Box>
    </HStack>
  );
}
