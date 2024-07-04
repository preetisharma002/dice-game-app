import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

function Rules() {
  return (
    <>
      <div className="rules-container mt-12 flex w-full justify-center items-center">
        <div className="row flex w-[80%] justify-center items-center flex-col gap-2">
          <h1>Rules</h1>
          <div className="rules w-full py-4 mb-6 flex justify-center items-center flex-col gap-4">
            <p>
              <strong>1. Rolling the Dice:</strong> Press the "Shake ⚡" button
              to roll the two dice. The numbers on the dice will be randomly
              generated between 1 and 6.
            </p>
            <p>
              <strong>2. Scoring System:</strong>
              <ul>
                <li>
                  Doubles Bonus: If both dice show the same number, you win 20
                  points.
                </li>
                <li>
                  High Total Bonus: If the sum of the dice is between 8 and 12
                  (inclusive), you win 5 points.
                </li>
                <li>
                  Try Again: If the sum is outside the 8-12 range and the dice
                  do not show doubles, you lose 5 points.
                </li>
              </ul>
            </p>
            <p>
              <strong>3. Game Rounds:</strong> Each roll counts as one round.
              Your round count will increment with every roll.
            </p>
            <p>
              <strong>4. Winning and Losing:</strong> The game continues
              indefinitely. Keep rolling to accumulate points. Aim to maximize
              your score by rolling doubles and high totals.
            </p>
            <p>
              <strong>5. End of Game:</strong> There is no formal end to the
              game. Play as long as you like and try to beat your high score.
            </p>
          </div>
          <Link
            to="/"
            className="bg-white text-black p-2 px-4 my-2 hover:bg-lime-400 font-bold fixed top-0 right-4 capitalize flex justify-center items-center gap-2"
          >
            <FaArrowLeftLong /> Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}

export default Rules;
