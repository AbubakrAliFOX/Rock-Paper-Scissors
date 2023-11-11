import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import { Box } from "@chakra-ui/react";
import { GameContext } from "./GameContext";

function App() {
  const [choice, setChoice] = useState({
    user: "",
    house: "",
    winner: '',
    score: 0,
    gameDone: false,
    showRules: false
  });
  const randomHouseChoice = ["rock", "paper", "scissors"][
    Math.floor(Math.random() * 3)
  ];
  const randomHouseChoice2 = randomHouseChoice;
  // console.log(randomHouseChoice2);
  // useEffect(() => {
  //   if (choice.user) {
  //     setChoice((prev) => {
  //       return {
  //         ...prev,
  //         house: ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)]
  //       };
  //     });
  //   }
  // }, [choice.user]);
  // console.log(choice);
  return (
    <Box w="80%" mx="auto">
      <GameContext.Provider value={{ choice, setChoice }}>
        <Header />
        <Body />
        <Footer />
      </GameContext.Provider>
    </Box>
  );
}

export default App;
