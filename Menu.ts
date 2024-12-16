import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

export function main() {
  let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
  let titular: string;
  const tipoContas = ["Conta Corrente", "Conta Poupanca"];

  //  Criando um Objeto da Classe ContaController
  const contas = new ContaController();

  //Novas Instâncias da Classe ContaCorrente (Objetos)
  contas.cadastrar(
    new ContaCorrente(
      contas.gerarNumero(),
      1234,
      1,
      "Isabella Valéria",
      1000000.0,
      100000.0
    )
  );
  contas.cadastrar(
    new ContaCorrente(
      contas.gerarNumero(),
      4578,
      1,
      "Maria Selma",
      1000.0,
      100.0
    )
  );

  // Novas Instâncias da Classe ContaPoupança (Objetos)
  contas.cadastrar(
    new ContaPoupanca(contas.gerarNumero(), 5789, 2, "Kate Perry", 10000, 10)
  );
  contas.cadastrar(
    new ContaPoupanca(contas.gerarNumero(), 5698, 2, "Valdemir José", 15000, 15)
  );

  while (true) {
    // Menu de opções do sistema

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

        console.log("Digite o Número da Agência: ");
        agencia = readlinesync.questionInt("");
        console.log("Digite o Nome do Titular: ");
        titular = readlinesync.question("");

        console.log("Escolha o tipo da conta: ");
        tipo = readlinesync.keyInSelect(tipoContas, "", { cancel: false }) + 1;

        console.log("Digite o Saldo da Conta: ");
        saldo = readlinesync.questionFloat("");

        switch (tipo) {
          case 1:
            console.log("Digite o Limite da Conta: ");
            limite = readlinesync.questionFloat("");
            contas.cadastrar(
              new ContaCorrente(
                contas.gerarNumero(),
                agencia,
                tipo,
                titular,
                saldo,
                limite
              )
            );

            break;
          case 2:
            console.log("Digite o Dia do Aniversário da Poupança: ");
            aniversario = readlinesync.questionInt("");
            contas.cadastrar(
              new ContaPoupanca(
                contas.gerarNumero(),
                agencia,
                tipo,
                titular,
                saldo,
                aniversario
              )
            );
        }

        keyPress();
        break;
      case 2:
        console.log(
          colors.fg.magenta,
          "\n\nListar todas as Contas\n\n",
          colors.reset
        );

        contas.listarTodas();

        keyPress();
        break;
      case 3:
        console.log(
          colors.fg.magenta,
          "\n\nConsultar dados da Conta - por número\n\n",
          colors.reset
        );

        console.log("Digite o número da conta: ");
        numero = readlinesync.questionInt("");
        contas.procurarPorNumero(numero);

        keyPress();
        break;
      case 4:
        console.log(
          colors.fg.magenta,
          "\n\nAtualizar dados da Conta\n\n",
          colors.reset
        );
        console.log("Digite o número da conta: ");
        numero = readlinesync.questionInt("");

        let conta = contas.buscarNoArray(numero);
        if (conta !== null) {
          console.log("Digite o Número da Agência: ");
          agencia = readlinesync.questionInt("");

          console.log("Digite o Nome do Titular: ");
          titular = readlinesync.question("");

          console.log("Digite o Saldo da Conta: ");
          saldo = readlinesync.questionFloat("");

          tipo = conta.tipo;

          switch (tipo) {
            case 1:
              console.log("Digite o novo Limite da Conta: ");
              limite = readlinesync.questionFloat("");
              contas.atualizar(
                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
              );

              break;
            case 2:
              console.log("Digite o novo Dia do Aniversário da Poupança: ");
              aniversario = readlinesync.questionInt("");
              contas.atualizar(
                new ContaPoupanca(
                  numero,
                  agencia,
                  tipo,
                  titular,
                  saldo,
                  aniversario
                )
              );
          }
        }

        keyPress();
        break;
      case 5:
        console.log(
          colors.fg.magenta,
          "\n\nApagar uma Conta\n\n",
          colors.reset
        );

        console.log("Digite o número da conta: ");
        numero = readlinesync.questionInt("");
        contas.deletar(numero);

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

// Função para formatar valores como moeda brasileira (BRL)

function formatToBRL(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

// Função que exibe informações sobre o projeto

export function sobre(): void {
  console.log("\n╔══════════════════════════════════════════════════╗");
  console.log("   Projeto Desenvolvido por: ");
  console.log("   Samuel Francisco - samuelf@genstudents.org");
  console.log("   https://github.com/Samuel-1210/conta_bancaria");
  console.log("╚══════════════════════════════════════════════════╝");
}

// Função que aguarda o pressionamento de uma tecla para continuar
function keyPress(): void {
  console.log(colors.reset, "");
  console.log("\nPressione enter para continuar...");
  readlinesync.prompt();
}
// Chama a função principal para iniciar o programa
main();
