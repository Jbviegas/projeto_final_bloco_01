import { BebidaAlcoolica } from "../model/BebidaAlcoolica";

import { Produto } from "../model/Produto";
import {ProdutoRepository} from "../repository/ProdutoRepository"

import { Colors } from "../src/util/Colors";




export class ProdutoController implements ProdutoRepository {
   

    private listaProdutos = new Array<Produto>();//é um array de produtos

    public numero: number = 0;

    // Métodos de contrução do CRUD

     //Método chamado cadastrar Recebe um objeto do tipo Conta, pode ser ContaCorrente, ContaPoupanca, etc (polimorfismo), Não retorna nada (void)
    cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);//this.listaContas → é um array de contas (private listaContas: Array<Conta>) = [];
        //push(conta) → adiciona a conta no final do array
       
    }


    procurarPorID(id: number): void {// listarProdutoPorID(parâmetro) recebe como parâmetro o id digitado pelo usuário
        const buscaProduto = this.buscarNoArray(id);
        //A constante buscarConta chama o método buscarNoArray() para tentar encontrar a conta
        if (buscaProduto !== null)//Se encontrar: Chama visualizar() → mostra os dados da conta - Se não encontrar:Exibe mensagem de erro em vermelho
            buscaProduto.visualizar();
        else
            console.log(Colors.fg.red, "\nProduto não Encontrado!", Colors.reset);
        //📌 Importante: Esse método não retorna nada (void), ele só executa ações (mostrar dados ou mensagem)
    }

    listarProdutos(): void {
        for (let produto of this.listaProdutos) {
            produto.visualizar();
        }
    }

    //Crud(Create)
    //cadastrar = criar e armazenar uma nova conta no sistema
    // O Método cadastrar irá criar uma conta no final do array através da função function criarContasTeste() lá no Menu

    //Método chamado cadastrar Recebe um objeto do tipo Conta, pode ser ContaCorrente, ContaPoupanca, etc (polimorfismo), Não retorna nada (void)
    cadastrarProduto(produto: Produto): void {
        this.listaProdutos.push(produto);//this.listaContas → é um array de contas (private listaContas: Array<Conta>) = [];
        //push(conta) → adiciona a conta no final do array
        console.log(Colors.fg.green,
            `\nO Produto ID número ${produto.id} foi cadastrada com sucesso!`, Colors.reset);
        // Exibe uma mensagem no terminal Usa cores para deixar o texto verde
        //  conta.numero acessa o número da conta criada
    }

    atualizar(produto: Produto): void {//atualizar(parâmetro) recebe como parâmetro o número da conta digitado pelo usuário
        const buscaProduto = this.buscarNoArray(produto.id);
        //A constante buscarConta chama o método buscarNoArray() para tentar encontrar a conta 
        if (buscaProduto !== null) {//Se encontrar
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            /*Acessa o Array de contas this.listaContas, depois acessa o indice da conta através do numero da conta indexOf(buscaConta) 
            e envia todos os dados atualizados que vinheram do Menu para a mesma conta -> = conta*/
        } else
            console.log(Colors.fg.red, "\nProduto não Encontrado!", Colors.reset);
    }

    deletar(id: number): void {//deletar(parâmetro) recebe como parâmetro o número digitado pelo usuário
        const buscaProduto = this.buscarNoArray(id);
        //A constante buscarConta chama o método buscarNoArray() para tentar encontrar a conta
        if (buscaProduto !== null) {//Se encontrar
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
            /*Acessa o Array de contas (listaContas) e "splice" exclui a conta do Array de contas acessando o
             indice dela pelo número dela e excluindo somente ela (1) */
            console.log(Colors.fg.green,
                `\nO Produto ID número ${id} foi Deletado com Sucesso!`, Colors.reset);
        } else
            console.log(Colors.fg.red, "\nProduto não Encontrado!", Colors.reset);
    }


    //Método buscarNoArray, esse método é o coração da busca
    public buscarNoArray(id: number): Produto | null {//Conta(Encontrou → retorna Conta) - Null(Não encontrou → retorna null)
        for (let produto of this.listaProdutos) {//Percorre todas as contas do array
            if (produto.id === id)//Se o número da conta for igual ao número procurado:
                return produto//Retorna o objeto Conta (A conta que ele estava procurando no Array seja ela conta corrente ou poupança)
        }

        return null;//Se terminar o loop e não encontrar: Retorna null
    }
}