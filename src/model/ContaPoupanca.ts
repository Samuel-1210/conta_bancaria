// Importando a classe Conta, que é a classe base para contas bancárias

import { Conta } from "./Conta";

// A classe ContaPoupanca herda de Conta e representa uma conta do tipo Poupança
export class ContaPoupanca extends Conta {
  private _aniversario: number;

  // Construtor da classe ContaPoupanca
  // Parâmetros: numero, agencia, tipo, titular, saldo e aniversario
  // O construtor chama o construtor da classe base (Conta) usando `super` e inicializa o valor do aniversário

  constructor(
    numero: number,
    agencia: number,
    tipo: number,
    titular: string,
    saldo: number,
    aniversario: number
  ) {
    super(numero, agencia, tipo, titular, saldo);
    this._aniversario = aniversario;
  }

  public get aniversario(): number {
    return this._aniversario;
  }

  public set aniversario(value: number) {
    this._aniversario = value;
  }

  // Método para visualizar os dados da conta poupança
  // Este método sobrescreve o método `visualizar` da classe base (Conta)
  // Exibe as informações da conta, incluindo o dia do aniversário da conta

  public visualizar() {
    super.visualizar();
    console.log(`Dia do aniversário: ${this._aniversario}`);
  }
}
