import { Box, Text, Link, Button, ButtonGroup } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { GameContext } from "../GameContext";

export default function Footer() {
  const { choice, setChoice } = useContext(GameContext);
  const resetGame = () => {
    setChoice((prev) => ({
      ...prev,
      user: "",
      house: "",
      winner: "",
      score: 0,
      gameDone: false,
    }));
  };
  const buttonStyles = {
    color: "white",
    background: "none",
    border: "1px white solid",
  };

  const buttonHoverStyles = {
    border: "1px purple solid",
    color: "purple",
  };
  return (
    <Box mb={100}>
      <Text>
        Rock Paper Scissors Game -{" "}
        <Link href="https://portfolio-kfwr.onrender.com/" isExternal>
          Abubakr Ali <ExternalLinkIcon mx="2px" />
        </Link>
      </Text>
      <ButtonGroup gap="4">
        <Button
          my={15}
          onClick={resetGame}
          color="white"
          background="none"
          border="1px white solid"
          transition="transition: color 0.3s, border 0.3s, transform 0.3s, box-shadow 0.7s"
          _hover={{
            border: "1px #6700ff solid",
            transform: "translateY(-4px)",
          }}
          _active={{
            color: "#dd24e3"
          }}
        >
          Reset
        </Button>
        {/* <Button>Rules</Button> */}
      </ButtonGroup>
    </Box>
  );
}
