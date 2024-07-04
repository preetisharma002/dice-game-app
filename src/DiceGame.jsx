import { useState } from "react";
import "./DiceGame.css";
import { Link } from "react-router-dom";
export const DiceGame = () => {
  let date = new Date();
  let myDateObj = date.getFullYear();

  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [message, setMessage] = useState("Play");
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(0);

  // handling the click event
  const handleDice = () => {
    const newDice1 = Math.floor(Math.random() * 6) + 1;
    const newDice2 = Math.floor(Math.random() * 6) + 1;
    setDice1(newDice1);
    setDice2(newDice2);

    const total = newDice1 + newDice2;
    let newMessage = "";
    let newScore = score;

    if (newDice1 === newDice2) {
      newMessage = "You Win!";
      newScore += 20;
    } else if (total >= 8 && total <= 12) {
      newMessage = "You Win!";
      newScore += 5;
    } else {
      newMessage = "Roll Again!";
      newScore -= 5;
    }

    setScore(newScore);
    setMessage(newMessage);
    setRound(round + 1);
  };

  return (
    <>
      <div className="main-container w-full flex justify-center items-center">
        <div className="row h-screen w-[80%] flex justify-center items-center flex-col gap-2">
          <h1 className="text-sm">Dice Game</h1>
          <h2>
            Let's <span className="font-bold">play</span>
          </h2>
          <div className="dice-container w-full flex justify-center items-center gap-4 py-4">
            <div className="dice w-28 h-28 border-[1px] border-gray-300 rounded-xl flex justify-center items-center font-bold text-5xl text-lime-400">
              {dice1}
            </div>
            <div className="dice w-28 h-28 border-[1px] border-gray-300 rounded-xl flex justify-center items-center font-bold text-5xl text-lime-400">
              {dice2}
            </div>
          </div>
          <button
            className="bg-white p-2 px-4 text-black capitalize hover:bg-lime-400 transition-all duration-150 hover:translate-x-2"
            onClick={handleDice}
          >
            shake ⚡
          </button>
          <div className="result-container w-full flex justify-center items-center flex-col gap-2 py-4">
            <div className="result-content score">
              <p className="capitalize">Score</p>
              <p className="capitalize">{score}</p>
            </div>
            <div className="result-content message">
              <p className="capitalize">message</p>
              <p className="capitalize">{message}</p>
            </div>
            <div className="result-content round">
              <p className="capitalize">round</p>
              <p className="capitalize">{round}</p>
            </div>
          </div>
        </div>
      </div>
      <Link
        to="/rules"
        className="fixed top-3 left-3 p-2 px-4 bg-lime-400 rounded-xl hover:text-black hover:bg-white transition-all duration-150"
      >
        Rules 🎲
      </Link>
      <p className="footer fixed bottom-0 w-full text-sm text-center p-1 opacity-65">
        preeti@{myDateObj}
      </p>
    </>
  );
};
