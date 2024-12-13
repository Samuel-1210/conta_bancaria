import { colors } from "../util/Colors";

// A classe Conta é uma classe abstrata que serve como base para tipos específicos de contas bancárias
// Ela contém os dados comuns a todas as contas, como número, agência, tipo, titular e saldo
export abstract class Conta {
  private _numero: number;
  private _agencia: number;
  private _tipo: number;
  private _titular: string;
  private _saldo: number;

  public get numero(): number {
    return this._numero;
  }

  public get agencia(): number {
    return this._agencia;
  }

  public get tipo(): number {
    return this._tipo;
  }

  public get titular(): string {
    return this._titular;
  }

  public get saldo(): number {
    return this._saldo;
  }

  public set numero(value: number) {
    this._numero = value;
  }

  public set agencia(value: number) {
    this._agencia = value;
  }

  public set tipo(value: number) {
    this._tipo = value;
  }

  public set titular(value: string) {
    this._titular = value;
  }

  public set saldo(value: number) {
    this._saldo = value;
  }

  constructor(
    numero: number,
    agencia: number,
    tipo: number,
    titular: string,
    saldo: number
  ) {
    this._numero = numero;
    this._agencia = agencia;
    this._tipo = tipo;
    this._titular = titular;
    this._saldo = saldo;
  }

  public sacar(valor: number): boolean {
    if (valor >= this._saldo) {
      console.log("Saldo Insuficiente!");
      return false;
    }
    this._saldo -= valor;
    return true;
  }

  public depositar(valor: number) {
    this._saldo += valor;
  }

  public visualizar() {
    var tipo: string = "";

    switch (this._tipo) {
      case 1:
        tipo = "Conta Corrente";
        break;
      case 2:
        tipo = "Conta Poupança";
        break;
      default:
    }

    console.log(
      colors.fg.magentastrong,
      "\n\n*****************************************************"
    );
    console.log("Dados da Conta:");
    console.log(
      "*****************************************************" + colors.reset
    );
    console.log(colors.fg.magenta, "Numero da Conta: " + this._numero);
    console.log("Agência: " + this._agencia);
    console.log("Tipo da Conta: " + tipo);
    console.log("Titular: " + this._titular);
    console.log("Saldo: " + formatToBRL(this._saldo) + colors.reset);
  }
}

function formatToBRL(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}
