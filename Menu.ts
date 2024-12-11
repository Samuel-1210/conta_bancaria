import readlinesync = require("readline-sync")
import { colors } from "./src/util/Colors"

export function main() {
  let opcao: number

  while (true) {
    console.log(
      colors.bg.black,
      colors.fg.magentastrong,
      "╔═════════════════════════════════════════════╗"
    )
    console.log("║ ║                VESTIDO BANK               ║ ║")
    console.log("╚═════════════════════════════════════════════╝")
    console.log("       1- Criar conta")
    console.log("       2- Listar todas as Contas")
    console.log("       3- Buscar conta por Numero")
    console.log("       4- Atualizar Dados da Conta")
    console.log("       5- Apagar Conta")
    console.log("       6- Sacar")
    console.log("       7- Depositar")
    console.log("       8- Transferir valores entre Contas")
    console.log("       9- Sair")
    console.log("  ╔═════════════════════════════════════════════╗")
    console.log("║ ║        Entre com a opção desejada         ║ ║")
    console.log("╚═════════════════════════════════════════════╝")
    console.log("", colors.reset)

    console.log(colors.fg.red, "", colors.reset)
    opcao = readlinesync.questionInt(colors.fg.magentastrong + "")

    if (opcao == 9) {
      console.log(
        colors.fg.magenta,
        "\n VESTIDO BANK - PROTEGIDO CONTRA A ECONOMIA"
      )
      sobre()
      process.exit(0)
    }

    switch (opcao) {
      case 1:
        console.log(colors.fg.magenta, "\n\nCriar Conta\n\n", colors.reset)
        keyPress()
        break
      case 2:
        console.log(
          colors.fg.magenta,
          "\n\nListar todas as Contas\n\n",
          colors.reset
        )
        keyPress()
        break
      case 3:
        console.log(
          colors.fg.magenta,
          "\n\nConsultar dados da Conta - por número\n\n",
          colors.reset
        )
        keyPress()
        break
      case 4:
        console.log(
          colors.fg.magenta,
          "\n\nAtualizar dados da Conta\n\n",
          colors.reset
        )
        keyPress()
        break
      case 5:
        console.log(colors.fg.magenta, "\n\nApagar uma Conta\n\n", colors.reset)
        keyPress()
        break
      case 6:
        console.log(colors.fg.magenta, "\n\nSaque\n\n", colors.reset)
        keyPress()
        break
      case 7:
        console.log(colors.fg.magenta, "\n\nDepósito\n\n", colors.reset)
        keyPress()
        break
      case 8:
        console.log(
          colors.fg.magenta,
          "\n\nTransferência entre Contas\n\n",
          colors.reset
        )
        keyPress()
        break
      default:
        console.log(colors.fg.magenta, "\nOpção Inválida!\n", colors.reset)
        keyPress()
        break
    }
  }
}

export function sobre(): void {
  console.log("\n╔══════════════════════════════════════════════════╗")
  console.log("   Projeto Desenvolvido por: ")
  console.log("   Samuel Francisco - samuelf@genstudents.org")
  console.log("   https://github.com/Samuel-1210/conta_bancaria")
  console.log("╚══════════════════════════════════════════════════╝")
}

function keyPress(): void {
  console.log(colors.reset, "")
  console.log("\nPressione enter para continuar...")
  readlinesync.prompt()
}

main()
