import React, { useState } from "react";

function One() {
  const click = [
    "https://www.svgrepo.com/show/315693/dice-1.svg",
    "https://www.svgrepo.com/show/315696/dice-2.svg",
    "https://www.svgrepo.com/show/315695/dice-3.svg",
    "https://www.svgrepo.com/show/315694/dice-4.svg",
    "https://www.svgrepo.com/show/315697/dice-5.svg",
    "https://www.svgrepo.com/show/315698/dice-6.svg",
  ];
  const [number, setNumber] = useState(0);
  const [number1, setNumber1] = useState(0);

  const change = () => {
    const player1 = Math.floor(Math.random() * click.length);
    setNumber(player1);
  };

  const change1 = () => {
    const player2 = Math.floor(Math.random() * click.length);
    setNumber1(player2);
  };

  return (
    <div
      className="one"
      style={{
        marginTop: "6rem",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      {/* {number && number1 ? "playing" : "lets start"} */}
      <div>
        {number === number1 ? (
          <p>die</p>
        ) : number < number1 ? (
          <p>player2 win</p>
        ) : (
          <p>player1 win</p>
        )}
      </div>

      <div>
        <h1> Player 1 </h1>
        <img src={click[number]} alt="img" width="100px" height="100px" />
        <button onClick={change}>player1</button>
      </div>

      <div>
        <h1> Player 2 </h1>
        <img src={click[number1]} alt="img" width="100px" height="100px" />
        <button onClick={change1}>player2</button>
      </div>
    </div>
  );
}

export default One;
