import {
  Box,
  HStack,
  VStack,
  Text,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import GameBoxChoice from "../GameBoxChoice";
import GameBox from "../GameBox";
import { GameContext } from "../GameContext";
import { useContext } from "react";

export default function Body() {
  const { choice, setChoice } = useContext(GameContext);
  const showWinner = () => {
    if (choice.winner == "user") {
      return "You have won!";
    } else if (choice.winner == "house") {
      return "The house has won!";
    } else if (choice.winner == "draw") {
      return "It is a draw!";
    }
  };
  const reset = () => {
    setChoice((prev) => {
      return { ...prev, user: "", house: "", winner: "", gameDone: false };
    });
  };
  return (
    <HStack mt={15}>
      <Box mx="auto" mb="30px" display={choice.gameDone == true ? "none" : "block"}>
        <VStack>
          <HStack>
            <GameBoxChoice id="Whatsup" value={3} type="rock" />
            <GameBoxChoice type="paper" />
          </HStack>
          <GameBoxChoice type="scissors" />
        </VStack>
      </Box>

      <Box mx="auto" mb="120px" display={choice.gameDone == true ? "block" : "none"}>
        <VStack>
          <HStack>
            <GameBox type={choice.user} />
            <GameBox type={choice.house} />
          </HStack>
          <Text>{showWinner()}</Text>
          <ButtonGroup gap="4">
            <Button
              color="white"
              background="none"
              border="1px white solid"
              transition="transition: color 0.3s, border 0.3s, transform 0.3s, box-shadow 0.7s"
              _hover={{
                border: "1px #6700ff solid",
                transform: "translateY(-4px)",
              }}
              _active={{
                color: "#dd24e3",
              }}
              onClick={reset}
            >
              Try again
            </Button>
          </ButtonGroup>
        </VStack>
      </Box>
    </HStack>
  );
}
