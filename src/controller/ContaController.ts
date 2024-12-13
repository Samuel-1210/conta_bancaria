// Importando a classe Conta e a interface ContaRepository para gerenciar as contas

import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

// A classe ContaController implementa a interface ContaRepository e gerencia uma lista de contas
// Ela oferece funcionalidades como buscar, listar, cadastrar, entre outras, relacionadas às contas bancárias
export class ContaController implements ContaRepository {
  private listaContas = new Array<Conta>();

  public numero: number = 0;

  procurarPorNumero(numero: number): void {
    const buscaConta = this.buscarNoArray(numero);

    if (buscaConta !== null) buscaConta.visualizar();
    else console.log("Conta não Encontrada!");
  }
  listarTodas(): void {
    for (let conta of this.listaContas) {
      conta.visualizar();
    }
  }
  cadastrar(conta: Conta): void {
    this.listaContas.push(conta);
    console.log("A conta foi cadastrada com sucesso!");
  }
  atualizar(conta: Conta): void {
    throw new Error("Method not implemented.");
  }
  deletar(numero: number): void {
    throw new Error("Method not implemented.");
  }
  sacar(numero: number, valor: number): void {
    throw new Error("Method not implemented.");
  }
  depositar(numero: number, valor: number): void {
    throw new Error("Method not implemented.");
  }
  transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
    throw new Error("Method not implemented.");
  }
  public gerarNumero(): number {
    return ++this.numero;
  }

  public buscarNoArray(numero: number): Conta | null {
    for (let conta of this.listaContas) {
      if (conta.numero === numero) return conta;
    }
    return null;
  }
}