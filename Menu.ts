import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";

export function main() {
  let opcao: number;

  // //  Cria novas instâncias (Objetos) da Classe Conta
  // const c1 = new Conta(1, 1, 1, "Paulo", 1000);
  // c1.visualizar();
  // c1.trocaConta(2);
  // c1.visualizar();

  // const c2 = new Conta(2, 1, 2, "Aline", 200000);
  // c2.visualizar();
  // c2.depositar(2000);
  // c2.sacar(1000);
  // c2.visualizar();
  // c2.trocaConta(1);
  // c2.visualizar();

  // // Contas Correntes

  const contac = new ContaCorrente(3, 789, 1, "Andressa", 100000, 1000);
  contac.visualizar();
  contac.sacar(100500);
  contac.visualizar();
  contac.depositar(2000);
  contac.visualizar;
  console.log("");

  const contaC1 = new ContaCorrente(4, 352, 1, "Joana", 5000, 1000);
  contaC1.visualizar();
  contaC1.sacar(220);
  contaC1.visualizar();
  contaC1.depositar(1000);
  contaC1.visualizar;
  console.log("");

  const contap = new ContaPoupanca(5, 300, 2, "Thiago", 1412, 28);
  contap.visualizar();
  contap.sacar(2500);
  contap.visualizar();
  contap.depositar(1000);
  contap.visualizar();
  console.log("");

  const contap1 = new ContaPoupanca(6, 300, 2, "William", 5000, 28);
  contap1.visualizar();
  contap1.depositar(1000);
  contap1.visualizar();
  contap1.sacar(5500);
  contap1.visualizar();
  console.log("");

  while (true) {
    console.log(
      colors.bg.black,
      colors.fg.magentastrong,
      "╔═════════════════════════════════════════════╗"
    );
    console.log("║ ║                VESTIDO BANK               ║ ║");
    console.log("╚═════════════════════════════════════════════╝");
    console.log("       1- Criar conta");
    console.log("       2- Listar todas as Contas");
    console.log("       3- Buscar conta por Numero");
    console.log("       4- Atualizar Dados da Conta");
    console.log("       5- Apagar Conta");
    console.log("       6- Sacar");
    console.log("       7- Depositar");
    console.log("       8- Transferir valores entre Contas");
    console.log("       9- Sair");
    console.log("  ╔═════════════════════════════════════════════╗");
    console.log("║ ║        Entre com a opção desejada         ║ ║");
    console.log("╚═════════════════════════════════════════════╝");
    console.log("", colors.reset);

    console.log(colors.fg.red, "", colors.reset);
    opcao = readlinesync.questionInt(colors.fg.magentastrong + "");

    if (opcao == 9) {
      console.log(
        colors.fg.magenta,
        "\n VESTIDO BANK - PROTEGIDO CONTRA A ECONOMIA"
      );
      sobre();
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log(colors.fg.magenta, "\n\nCriar Conta\n\n", colors.reset);
        keyPress();
        break;
      case 2:
        console.log(
          colors.fg.magenta,
          "\n\nListar todas as Contas\n\n",
          colors.reset
        );
        keyPress();
        break;
      case 3:
        console.log(
          colors.fg.magenta,
          "\n\nConsultar dados da Conta - por número\n\n",
          colors.reset
        );
        keyPress();
        break;
      case 4:
        console.log(
          colors.fg.magenta,
          "\n\nAtualizar dados da Conta\n\n",
          colors.reset
        );
        keyPress();
        break;
      case 5:
        console.log(
          colors.fg.magenta,
          "\n\nApagar uma Conta\n\n",
          colors.reset
        );
        keyPress();
        break;
      case 6:
        console.log(colors.fg.magenta, "\n\nSaque\n\n", colors.reset);
        keyPress();
        break;
      case 7:
        console.log(colors.fg.magenta, "\n\nDepósito\n\n", colors.reset);
        keyPress();
        break;
      case 8:
        console.log(
          colors.fg.magenta,
          "\n\nTransferência entre Contas\n\n",
          colors.reset
        );
        keyPress();
        break;
      default:
        console.log(colors.fg.magenta, "\nOpção Inválida!\n", colors.reset);
        keyPress();
        break;
    }
  }
}

function formatToBRL(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function sobre(): void {
  console.log("\n╔══════════════════════════════════════════════════╗");
  console.log("   Projeto Desenvolvido por: ");
  console.log("   Samuel Francisco - samuelf@genstudents.org");
  console.log("   https://github.com/Samuel-1210/conta_bancaria");
  console.log("╚══════════════════════════════════════════════════╝");
}

function keyPress(): void {
  console.log(colors.reset, "");
  console.log("\nPressione enter para continuar...");
  readlinesync.prompt();
}

main();
