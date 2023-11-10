import { Box, Image, Center, Circle } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { GameContext } from "../GameContext";

export default function GameBox({ type, id }) {
  const { choice, setChoice } = useContext(GameContext);
  const newHouse = () => {
    return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
  };
  const findWinner = (choice) => {
    if (
      choice.user === choice.house &&
      choice.user != "" &&
      choice.house != ""
    ) {
      setChoice((prev) => {
        return { ...prev, winner: "draw" };
      });
    } else if (
      choice.user === "rock" &&
      choice.house === "paper" &&
      choice.user != "" &&
      choice.house != ""
    ) {
      setChoice((prev) => {
        return { ...prev, winner: "house" };
      });
    }
    // console.log(`user:${choice.user}, house:${choice.house}`);
    // console.log(choice.winner);
  };
  const handleClick = (e, type) => {
    setChoice((prev) => {
      let p1 = type;
      let p2 = newHouse();
      let win = "";
      if (p1 === p2 && p1 != "" && p2 != "") {
        win = "draw";
      } else if (p1 === "rock" && p2 === "paper" && p1 != "" && p2 != "") {
        win = "p2 won";
      } else if (p1 === "rock" && p2 === "scissors" && p1 != "" && p2 != "") {
        win = "p1 won";
      } else if (p1 === "paper" && p2 === "rock" && p1 != "" && p2 != "") {
        win = "p1 won";
      } else if (p1 === "paper" && p2 === "scissors" && p1 != "" && p2 != "") {
        win = "p2 won";
      } else if (p1 === "scissors" && p2 === "paper" && p1 != "" && p2 != "") {
        win = "p1 won";
      } else if (p1 === "scissors" && p2 === "rock" && p1 != "" && p2 != "") {
        win = "p2 won";
      }

      return { ...prev, user: p1, house: p2, winner: win };
    });
    // findWinner(choice);
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

  console.log(choice);
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
      <div>
        {choice.user} {choice.house} {choice.winner}
      </div>
    </div>
  );
}
