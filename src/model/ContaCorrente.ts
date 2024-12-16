// Importando a classe Conta, que é a classe base para contas bancárias

import { colors } from "../util/Colors";
import { Conta } from "./Conta";

// A classe ContaCorrente herda de Conta e representa uma conta do tipo Corrente
export class ContaCorrente extends Conta {
  private _limite: number;

  // Construtor da classe ContaCorrente
  // Parâmetros: numero, agencia, tipo, titular, saldo e limite
  // O construtor chama o construtor da classe base (Conta) usando `super` e inicializa o valor do limite
  constructor(
    numero: number,
    agencia: number,
    tipo: number,
    titular: string,
    saldo: number,
    limite: number
  ) {
    super(numero, agencia, tipo, titular, saldo);
    this._limite = limite;
  }

  public get limite(): number {
    return this._limite;
  }

  public set limite(value: number) {
    this._limite = value;
  }

  public sacar(valor: number): boolean {
    if (valor > this.saldo + this._limite) {
      console.log("Saldo Insuficiente!");
      return false;
    }
    this.saldo -= valor;
    return true;
  }
  public depositar(valor: number) {
    this.saldo += valor;
  }

  public visualizar() {
    super.visualizar();
    console.log(
      colors.fg.magenta +
        `Limite da Conta: ${formatToBRL(this._limite)}` +
        colors.reset
    );
  }
}
function formatToBRL(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}
