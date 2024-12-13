// Importando o modelo Conta, que representa a estrutura de uma conta bancária

import { Conta } from "../model/Conta";
// Interface para o repositório de contas
// Define os métodos que o repositório deve implementar para gerenciar as contas bancárias.
export interface ContaRepository {
  procurarPorNumero(numero: number): void;
  listarTodas(): void;
  cadastrar(cont: Conta): void;
  atualizar(conta: Conta): void;
  deletar(numero: number): void;

  // Metodos Bancários

  sacar(numero: number, valor: number): void;
  depositar(numero: number, valor: number): void;
  transferir(numeroOrigem: number, numeroDestino: number, valor: number): void;
}
