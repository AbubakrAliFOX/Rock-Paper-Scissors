import { Image, Circle } from "@chakra-ui/react";
import { useContext } from "react";
import { GameContext } from "../GameContext";
import GameBox from "../GameBox";

export default function GameBoxChoice({ type, id }) {
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
        win = "house";
      } else if (p1 === "rock" && p2 === "scissors" && p1 != "" && p2 != "") {
        win = "user";
      } else if (p1 === "paper" && p2 === "rock" && p1 != "" && p2 != "") {
        win = "user";
      } else if (p1 === "paper" && p2 === "scissors" && p1 != "" && p2 != "") {
        win = "house";
      } else if (p1 === "scissors" && p2 === "paper" && p1 != "" && p2 != "") {
        win = "user";
      } else if (p1 === "scissors" && p2 === "rock" && p1 != "" && p2 != "") {
        win = "house";
      }

      return { ...prev, user: p1, house: p2, winner: win, gameDone: true };
    });
    // findWinner(choice);
  };

  console.log(choice);
  return (
    <div onClick={(evt) => handleClick(evt, type)}>
      <GameBox forChoice={true} type={type} />
    </div>
  );
}
