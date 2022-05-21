import React, { useState } from "react";
import "./TicTacToe.css";

export const TicTacToe = () => {
  const [turn, setTurn] = useState("x");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState("");
  const [cass, setClass] = useState();
  const [doubt, setDoubt] = useState("");
  const [ladu, setladu] = useState();

  const sto = {
    pointerEvents: "auto",
  };

  const handleRestart = () => {
    setWinner("");
    setDoubt("");
    setCells(Array(9).fill(""));
    setClass((document.body.style.pointerEvents = "auto"));
    document.button.style.opacity = "0";
  };

  const handleRestart1 = () => {
    setWinner("");
    setDoubt("");
    setCells(Array(9).fill(""));
    setClass((document.body.style.pointerEvents = "auto"));
    document.button.style.opacity = "0";
  };

  const checkForWinner = (sqaures) => {
    let combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [6, 4, 2],
      ],
    };
    for (let combo in combos) {
      combos[combo].forEach((e) => {
        if (
          sqaures[e[0]] === "" ||
          sqaures[e[1]] === "" ||
          sqaures[e[2]] === ""
        ) {
          //do nothing
        } else if (
          sqaures[e[0]] === sqaures[e[1]] &&
          sqaures[e[1]] === sqaures[e[2]]
        ) {
          //  alert(`Winner is ${sqaures[e[0]]}`)
          setWinner(sqaures[e[0]]);
          setClass((document.body.style.pointerEvents = "none"));
          return true;
        }
      });
    }
  };

  const handleClick = (num) => {
    if (cells[num] != "") {
      alert("alerady click");
      return;
    }

    let sqaures = [...cells];

    if (turn === "x") {
      sqaures[num] = "x";
      setTurn("o");
    } else {
      sqaures[num] = "o";
      setTurn("x");
    }

    setCells(sqaures);
    if (
      checkForWinner(sqaures) !== true &&
      sqaures[0] !== "" &&
      sqaures[1] !== "" &&
      sqaures[2] !== "" &&
      sqaures[3] !== "" &&
      sqaures[4] !== "" &&
      sqaures[5] !== "" &&
      sqaures[6] !== "" &&
      sqaures[7] !== "" &&
      sqaures[8] !== ""
    ) {
      setDoubt("Match Drawn");
    }
  };
  const con = () => {
    console.log("Match Drawn");
  };
  const Cell = ({ num }) => {
    return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
  };
  return (
    
    <div className="container">
        <h1 className="hat">TIC TAC TOE</h1>

        <h1>Turn: <span className="roti">{turn}</span></h1>
      <table>
        
        <tbody>
          <tr>
            <Cell num={0} />
            <Cell num={1} />
            <Cell num={2} />
          </tr>
          <tr>
            <Cell num={3} />
            <Cell num={4} />
            <Cell num={5} />
          </tr>
          <tr>
            <Cell num={6} />
            <Cell num={7} />
            <Cell num={8} />
          </tr>
        </tbody>
      </table>
      {winner != "" ? (
        <>
          <p className="Goti">Winner is: <span className="roti">{winner}</span></p>

          <button
            style={sto}
            onClick={() => {
              handleRestart();
            }}
          >
            Restart The Game
          </button>
        </>
      ) : (
        <>
          <p className="Goti">{doubt}</p>

          <button
            style={sto}
            onClick={() => {
              handleRestart1();
            }}
          >
            Restart The Game
          </button>
        </>
      )}
    </div>
  );
};
