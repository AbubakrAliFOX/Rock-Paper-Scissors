import { Box, Image, Center, Circle } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { GameContext } from "../GameContext";

export default function GameBox({ type, id }) {
    const newHouse = () => {
        return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
    }
  const handleClick = (e, type) => {
    setChoice((prev) => {
      return { ...prev, user: type, house: newHouse() };
    });
  };
  let borderColor = "";
  if (type === "rock") {
    borderColor = "#5a3bc4";
  } else if (type === "paper") {
    borderColor = "#d6e31c";
  } else if (type === "scissors") {
    borderColor = "#c8374e";
  }
  const styles = {
    border: `10px solid ${borderColor}`,
    // transform: transValue,
    transition: "200ms ease-in-out",
    cursor: "pointer",
  };
  const { choice, setChoice } = useContext(GameContext);
  return (
    <div onClick={(evt) => handleClick(evt, type)}>
      <Circle
        _hover={{
          transform: `scale(1.25)`,
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
      <div>{choice.user}</div>
    </div>
  );
}
