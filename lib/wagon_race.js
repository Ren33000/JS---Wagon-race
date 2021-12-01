const doc = document.addEventListener("keyup", (event) => {
  if (event.key === 'q') {
    const wagon1 = document.querySelector("#player1-race .active");
    if (wagon1.classList.contains("end")) { alert("You won!"); window.location.reload(); }
    wagon1.classList.remove("active");
    wagon1.nextElementSibling.classList.add("active");
  }

  if (event.key === 'p') {
    const wagon2 = document.querySelector("#player2-race .active");
    if (wagon2.classList.contains("end")) { alert("You won!"); window.location.reload(); }
    wagon2.classList.remove("active");
    wagon2.nextElementSibling.classList.add("active");
  }
});


// const moveForward = (player) => {
//   const wagon = document.querySelector(`#player${player}-race .active`);
//   if (wagon.nextElementSibling) {
//     wagon.nextElementSibling.classList.add('active');
//     wagon.classList.remove('active');
//   } else {
//     alert(`Player ${player} wins! Play again?`);
//     window.location.reload();
//   }
// };

// const moveWagons = (event) => {
//   if (event.key === "q") {
//     moveForward(1);
//   } else if (event.key === "p") {
//     moveForward(2);
//   }
// };

// document.addEventListener("keyup", moveWagons);
