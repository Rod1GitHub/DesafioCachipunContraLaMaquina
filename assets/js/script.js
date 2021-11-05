// 1. Variables
var remainingGames;
var playerComputerCount = 0;
var playerYouCount = 0;

var piedra_0 = 'Piedra';
var papel_1 = 'Papel';
var tijera_2 = 'Tijera';

var playerComputerText = 'X';
var playerYouText = 'Y';

// 2. Usuario selecciona cantidad de juegos
var numberOfGames = parseInt(
  prompt(
    'Ca-Chi-Pún!! \n(Si empatas, no se cuenta y se repite) \nEscribe la cantidad de juegos: '
  )
);

// 3. Función del juego
function playTheGame(playerComputer, playerYou) {
  // Asignación de texto a las variables numéricas del usuario
  if (playerYou == 0) {
    playerYouText = piedra_0;
  }
  if (playerYou == 1) {
    playerYouText = papel_1;
  }
  if (playerYou == 2) {
    playerYouText = tijera_2;
  }
  // Primero, evaluar empate
  if (playerComputer == playerYou) {
    remainingGames--; // Si empate, entonces no avanza el contador y se repite.
    alert(`Empate!! (No cuenta, repetimos esta jugada).\n
    Juegos restantes: ${numberOfGames - 1 - remainingGames}\n
    Resultado parcial: \nComputador = ${playerComputerCount} | Tú = ${playerYouCount}.`);
    console.log(
      `Empate!! Se juega denuevo. Juegos restantes: ${
        numberOfGames - 1 - remainingGames
      }`
    );
  } else {
    // Segundo,  evaluar las jugadas del computador y el usuario, y asignarles puntaje.
    if (playerComputer == 0) {
      // Computador 0_Piedra
      if (playerYou == 1) {
        // Tu 1_Papel: Tu ganas
        console.log(
          `Antes playerComputerText = ${playerComputerText} | playerYouText = ${playerYouText}`
        );
        winMessage();
        console.log(
          `Después playerComputerText = ${playerComputerText} | playerYouText = ${playerYouText}`
        );
      } else {
        // Tu 2_Tijera: Tu pierdes
        console.log(
          `Antes playerComputerText = ${playerComputerText} | playerYouText = ${playerYouText}`
        );
        loseMessage();
        console.log(
          `Después playerComputerText = ${playerComputerText} | playerYouText = ${playerYouText}`
        );
      }
    } else if (playerComputer == 1) {
      // Computador 1_Papel
      if (playerYou == 2) {
        // Tu 2_Tijera: Tu ganas
        console.log(
          `Antes playerComputerText = ${playerComputerText} | playerYouText = ${playerYouText}`
        );
        winMessage();
        console.log(
          `Después playerComputerText = ${playerComputerText} | playerYouText = ${playerYouText}`
        );
      } else {
        // Tu 0_Piedra: Tu pierdes
        console.log(
          `Antes playerComputerText = ${playerComputerText} | playerYouText = ${playerYouText}`
        );
        loseMessage();
        console.log(
          `Después playerComputerText = ${playerComputerText} | playerYouText = ${playerYouText}`
        );
      }
    } else if (playerComputer == 2) {
      // Computador 2_Tijera
      if (playerYou == 0) {
        // Tu 0_Piedra: Tu ganas
        console.log(
          `Antes playerComputerText = ${playerComputerText} | playerYouText = ${playerYouText}`
        );
        winMessage();
        console.log(
          `Después playerComputerText = ${playerComputerText} | playerYouText = ${playerYouText}`
        );
      } else {
        // Tu 1_Papel: Tu pierdes
        console.log(
          `Antes playerComputerText = ${playerComputerText} | playerYouText = ${playerYouText}`
        );
        loseMessage();
        console.log(
          `Después playerComputerText = ${playerComputerText} | playerYouText = ${playerYouText}`
        );
      }
    }
  }
}

// 4. Se hace loop de la cantidad de juegos;
for (var remainingGames = 0; remainingGames < numberOfGames; remainingGames++) {
  // Juega el computador. Juega el usuario; y se define el ganador.
  // 4.1. Juega el computador
  function randomPlay(max) {
    return Math.floor(Math.random() * max);
  }
  var playerComputer = randomPlay(3); // Computador seleciona: 0, 1 o 2

  // 4.2. Asignación de texto a las variables numéricas del computador
  if (playerComputer == 0) {
    playerComputerText = piedra_0;
  }
  if (playerComputer == 1) {
    playerComputerText = papel_1;
  }
  if (playerComputer == 2) {
    playerComputerText = tijera_2;
  }

  // 4.3. Mensaje
  function winMessage() {
    playerYouCount++;
    alert(`Tú ganas!! 
  \nComputador = ${playerComputerText} | Tú = ${playerYouText}
  \nResultado: \nComputador = ${playerComputerCount} | Tú = ${playerYouCount}.`);
    console.log(`Tú ganas!! 
  \nComputador = ${playerComputerText} | Tú = ${playerYouText}
  \nResultado: \nComputador = ${playerComputerCount} | Tú = ${playerYouCount}.`);
  }
  function loseMessage() {
    playerComputerCount++;
    alert(`Tú pierdes!!
  \nComputador = ${playerComputerText} | Tú = ${playerYouText}
  \nResultado: \nComputador = ${playerComputerCount} | Tú = ${playerYouCount}.`);
    console.log(`Tú pierdes!!
  \nComputador = ${playerComputerText} | Tú = ${playerYouText}
  \nResultado: \nComputador = ${playerComputerCount} | Tú = ${playerYouCount}.`);
  }

  // 4.4. Juega el usuario
  var playerYou = parseInt(
    prompt(`
  (Trampa para corrección: El computador eligió ${playerComputerText})\n
  Ahora elige tu.\n0. Piedra \n1. Papel \n2. Tijera \nEscribe el número:`)
  );

  // 4.5. Se llama a la función del juego
  playTheGame(playerComputer, playerYou);
  console.log(`Termina un loop.\n.`);
}

// 5. Se da el resultado final de la partida
if (playerComputerCount < playerYouCount) {
  alert(`¡¡¡Felicitaciones, has ganado!!!\n
  Resultado final:\n
  Computador = ${playerComputerCount} | Tú = ${playerYouCount}.\n  
  Muchas gracias por jugar.`);
} else if (playerComputerCount > playerYouCount) {
  alert(`Lamentablemente has perdido contra el computador.\n
  Resultado final:\n
  Computador = ${playerComputerCount} | Tú = ${playerYouCount}.\n  
  Muchas gracias por jugar.`);
} else if (playerComputerCount == playerYouCount) {
  alert(`¡Has empatado la partida!\n
Resultado final:\n
Computador = ${playerComputerCount} | Tú = ${playerYouCount}.\n  
Muchas gracias por jugar.`);
}
