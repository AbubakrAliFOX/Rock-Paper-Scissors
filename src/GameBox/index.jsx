import { Box, Image, Center, Circle } from "@chakra-ui/react";

export default function GameBox({ type }) {
  let borderColor = "";
  if (type === "rock") {
    borderColor = "#5a3bc4";
  } else if (type === "paper") {
    borderColor = "#d6e31c";
  } else if (type === "scissors") {
    borderColor = "#c8374e"
  }
  const styles = {
    border: `10px solid ${borderColor}`,
    // transform: transValue,
    transition: "200ms ease-in-out",
    cursor: 'pointer'
  };
  return (
    <Circle
      _hover={{
        transform: `scale(1.25)`
      }}
      style={styles}
      w={130}
      h={130}
      p={0}
      m={10}
      backgroundColor="white"
    >
      <Image w={80} h={80} src={`${type}.svg`} />
    </Circle>
  );
}
