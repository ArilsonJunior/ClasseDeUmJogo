const prompt = require("prompt-sync")();

class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    switch (this.tipo.toLowerCase()) {
      case 'mago':
        ataque = 'magia';
        break;
      case 'guerreiro':
        ataque = 'espada';
        break;
      case 'monge':
        ataque = 'artes marciais';
        break;
      case 'ninja':
        ataque = 'shuriken';
        break;
      default:
        ataque = 'um ataque básico';
    }

    console.log(" \n")
    console.log(`O herói ${this.nome}, com suas habilidades de ${this.tipo}, atacou usando ${ataque}.`);
    console.log(" \n")
  }
}

const herois = []; // Array para armazenar os heróis criados

function criarHeroi() {
  const nome = prompt("Digite o nome do herói: ");
  console.log("--------------------------------------------------------");
  const idade = parseInt(prompt("Digite a idade do herói: "), 10);
  console.log("--------------------------------------------------------");
  const tipo = prompt("Digite o tipo do herói (mago, guerreiro, monge, ninja): ");
  console.log("--------------------------------------------------------");

  const heroi = new Heroi(nome, idade, tipo);

  herois.push(heroi); // Adiciona o herói criado ao array

  console.log("Herói criado com sucesso!\n");
}

function listarHerois() {
  if (herois.length === 0) {
    console.log("Nenhum herói foi criado ainda.");

  } else {
    console.log("Lista de heróis:");
    
    herois.forEach((heroi, index) => {
      console.log(`[${index + 1}] Nome: ${heroi.nome}, Idade: ${heroi.idade}, Tipo: ${heroi.tipo}`);
    });
  }
  console.log("--------------------------------------------------------");
}

function usarHeroi() {
  listarHerois();
  
  if (herois.length > 0) {
    const index = parseInt(prompt("Digite o número do herói que deseja usar: "), 10) - 1;

    if (index >= 0 && index < herois.length) {
      herois[index].atacar();
    } else {
      console.log("Herói inválido!");
    }
  }
}

let sair = false;

console.log("\nBem Vindo(a) ao jogo\n")

do {
  console.log("-----MENU-----\n" +
    "[1] - Criar herói\n" +
    "[2] - Listar heróis\n" +
    "[3] - Usar herói\n" +
    "[4] - Sair");
  
  const escolha = parseInt(prompt("Escolha uma opção: "), 10);
  console.log("--------------------------------------------------------");

  switch (escolha) {
    case 1:
      criarHeroi();
      break;
    case 2:
      listarHerois();
      break;
    case 3:
      usarHeroi();
      break;
    case 4:
      sair = true;
      console.log("Saindo do programa...");
      break;
    default:
      console.log("Opção inválida. Tente novamente.");
  }
} while (!sair);