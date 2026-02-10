import { Produto } from "../model/Produto";


export interface ContaRepository {//Interface define o que deve existir, não como funciona.

    //Métodos do Crud(Create, Read, Update, Delete)

    //Isso NÃO tem código, só a regra do contrato
     listarProdutoPorID(id: number): void;
    listarProdutos(): void;
    cadastrarProduto(produto: Produto): void;/*Toda classe que implementar ContaRepository é obrigada a ter um método cadastrar que receba um
     Produto e não retorne nada (void).” */
    atualizar(produto: Produto): void;
    deletar(id: number): void;
}

