import { Colors } from "./src/util/Colors";
import { formatarMoeda } from "./src/util/Currency";
import { Input } from "./src/util/Input";






//Criar um objeto global da classe ContaController
const produtos = new ProdutoController();//Permite a constante produtos acessar ContaController e instanciar seus métodos 

// Criar um array contendo os tipos de conta
const tipoBebidas = ['Alcoolica', 'Sem Alcool'];

export function main() {

    let opcao: number;

    criarProdutosTeste();

    while (true) {

        console.log(Colors.bg.black, Colors.fg.yellow,
            "*****************************************************");
        console.log("                                                     ");
        console.log("                  Zezé Delivery                      ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("      1 - Cadastrar Produto                          ");
        console.log("      2 - Listar Todos os Produtos                   ");
        console.log("      3 - Listar Produtos Pelo ID(Codigo do Produto) ");
        console.log("      4 - Atualizar Produto                          ");
        console.log("      5 - Deletar Produto                            ");
        console.log("*****************************************************");
        console.log("                                                     ",
            Colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = Input.questionInt("");

        if (opcao === 0) {
            console.log(Colors.fg.greenstrong, "\nZezé Delivery");
            sobre();
            console.log(Colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(Colors.fg.whitestrong, "\n\nCadastrar Produtos\n\n", Colors.reset);
                cadastrarProduto();
                keyPress()
                break;
            case 2:
                console.log(Colors.fg.whitestrong, "\n\nListar Todos os Produtos\n\n", Colors.reset);
                produtos.listarProdutos();
                break;

             case 3:
                console.log(Colors.fg.whitestrong, "\n\nListar Produtos Pelo ID(Codigo do Produto)\n\n", Colors.reset);

                listarProdutoPorID();

                keyPress()
                break;
           
            case 4:
                console.log(Colors.fg.whitestrong, "\n\nAtualizar Produto\n\n", Colors.reset);

                atualizarProduto();

                keyPress()
                break;
            case 5:
                console.log(Colors.fg.whitestrong, "\n\nDeletar Produto\n\n", Colors.reset);

                deletarProdutoPorID();

                keyPress()
                break;

            default:
                console.log(Colors.fg.whitestrong, "\nOpção Inválida!\n", Colors.reset);

                keyPress()
        }
    }

}

/* Opção 1: Criar uma nova Conta */

function cadastrarProduto() {

    console.log("Digite o id do produto: ")
    const id = Input.questionInt("");

    console.log("Digite o nome do produto: ")
    const nome = Input.question("");

    console.log("Selecione o tipo de bebida: ")
    const tipo = Input.keyInSelect(tipoBebidas, "", { cancel: false }) + 1;//Input.keyInSelect Exibe um menu de opções para o usuário escolher
    //tipoBebidas é um Array  contendo os tipo de bebidas const tipoBebidas = ['Alcoolica[0]', 'Sem Alcool'[1]];
    //"" (string vazia) É a mensagem extra que poderia aparecer acima do menu, como está vazia, não aparece nada adicional.
    //{ cancel: false } Desativa a opção "Cancelar" no menu de opções -> [1] Alcoolica [2] Sem Alcool [3] Cancel
    //O keyInSelect não retorna 1 ou 2, ele retorna o índice do array: tipoBebidas = ['Alcoolica[0]', 'Sem Alcool'[1]]
    //+1 ajusta o valor ao switch que vem depois: switch (tipo) { case 1: Alcoolica - case 2: // Sem Alcool}

    console.log("Digite o preço do produto: ")
    const preco = Input.questionFloat("");

    switch (tipo) {
        case 1: // Bebida Alcoolica
          
            const alcoolica = "Bebida Alcoolica";
            console.log("Bebida Alcoolica")
            produtos.cadastrar(new BebidaAlcoolica(//A variável produtos acessa o método cadastrar em ProdutoController e cria um Produto
                id, nome, tipo, alcoolica, preco));
                 
            break;//para o código após criar a conta

        case 2: // bebida sem Alcool

             const sem_alcool = "Bebida Sem Alcool";
            produtos.cadastrar(new BebidaSemAlcool(//A variável produtos acessa o método cadastrar em ProdutoController e cria um Produto
                id, nome, tipo, preco, sem_alcool));
          
            break;//para o código após criar a conta

    }

}


/* Opção 2: Veja o case 2 do Menu */

/* Opção 3: Procurar produtos pelo id */

function  listarProdutoPorID(): void {

    console.log("Digite o ID do produto: ");//O usuário digita um id do produto
    const id = Input.questionInt("");//Esse id é adicionado a variável id

    produtos.procurarPorID(id);//A constante id envia esse id digitado pelo usuário como parâmetro para o método procurarPorID
    //produtos é uma instância de ContaController -  Chama o método que faz a busca
    /* 
    O Menu não se preocupa com a lógica
    
    O Controller resolve tudo
    
    📌 Isso é separação de responsabilidades (MVC):
    
    Menu → interação com usuário
    
    Controller → regras e lógica
    
    Model (Produto) → dados
        */
}

/* Opção 4: Atualizar os dados de uma Conta */

function atualizarProduto(): void {

    // Solicita o número da conta
    console.log("Digite o ID do produto: ");
    const id = Input.questionInt("");

    // Verifica se a conta existe
    const produto = produtos.buscarNoArray(id);//Busca a conta no Array de contas listaContas em ContaController pelo número que o usuario digitou
    //produtos é uma instância de ContaController 

    // Se a conta existir...
    if (produto !== null) {

        /**
         * Guarda os valores atuais do produto em variáveis
         */
       
        const id: number = produto.id; //Se o id existir, guarda o id
        const nome: number = produto.nome; //Se o nome existir, guarda o nome
        let preco: number = produto.preco; //Se o preço existir, guarda o preço 
        const tipo: number = produto.tipo;
        const alcoolica = "Bebida Alcoolica";
        const sem_alcool = "Bebida Sem Alcool";

        // Atualização o Preço
        console.log(`\nPreço atual: ${formatarMoeda(preco)}`);//Exibe o saldo atual
        console.log("Digite o novo preço: ");//Se pressionar ENTER o saldo atual será mantido
        console.log("(Pressione ENTER para manter o valor atual)");//Para o ENTER funcionar, passamos o parâmetro  default input
        preco = Input.questionFloat("", { defaultInput: preco });//default input, que indica o valor padrão (solução mais simples)

        // Atualização do Tipo
        switch (tipo) {
            case 1: // Conta Corrente

              
                produtos.atualizar(new BebidaAlcoolica(id, nome, preco, tipo, alcoolica ));
                //Instanciamos o método atualizar que está em ContaController e passamos os novos dados
                break;//para o código após atualizar

            case 2: // Conta Poupança


                produtos.atualizar(new BebidaSemAlcool(id, nome, preco, tipo, sem_alcool ));
                //Instanciamos o método atualizar que está em ContaController e passamos os novos dados
                break;//para o código após atualizar 
        }


    } else {
        console.log(Colors.fg.red, `O Produto ${id} não foi encontrado!`, Colors.reset);
    }
}


/* Opção 5: Deletar uma Conta pelo número */

function deletarProdutoPorID(): void {

    console.log("Digite o ID do produto: ");//O usuário digita o ID de um produto
    const id = Input.questionInt("");//Esse ID é adicionado a variável id

    produtos.deletar(id);//A constante id envia esse id digitado pelo usuário como parâmetro para o método deletar
    //produtos é uma instância de ContaController -  Chama o método deletar que faz a exclusão do produto

}


/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Josue barreto Viegas");
    console.log("github.com/conteudoGeneration");
    console.log("*****************************************************");
}


/* Função de pausa entre as opções do menu */
function keyPress(): void {
    console.log(Colors.reset, "\nPressione enter para continuar...");
    Input.prompt();
}

/* Constas para Testes  */
function criarProdutosTeste(): void {

     //      cadastrar(conta: Conta)       id nome titular tipo  preço
    produtos.cadastrar(new BebidaAlcoolica(id, 'Coca Cola',  1, 10));
    //produtos está pegando os métodos da classe ProdutoController(cadastrar) - const produtos = new ContaController();
    // new BebidaAlcoolica(...) Cria um objeto BebidaAlcoolica
    // id irá cadastrar o próximo id do produto no Array listaProdutos em ContaController.
    // O objeto é enviado para o Método cadastrar, - cadastrar(produto: Produto)
    // Mesmo sendo BebidaAlcoolica, ele entra como Produto.
    // listaProdutos.push(produto), - O produto é armazenado na lista 
    // Mensagem aparece no console
    // Produto cadastrado com sucesso


     //      cadastrar(conta: Conta)       id nome titular tipo  preço
    produtos.cadastrar(new BebidaSemAlcool(id, 'Skol',  1, 15));
    //produtos está pegando os métodos da classe ProdutoController(cadastrar) - const produtos = new ContaController();
    // new BebidaSemAlcool(...) Cria um objeto BebidaSemAlcool
    // id irá cadastrar o próximo id do produto no Array listaProdutos em ContaController.
    // O objeto é enviado para o Método cadastrar, - cadastrar(produto: Produto)
    // Mesmo sendo BebidaSemAlcool, ele entra como Produto.
    // listaProdutos.push(produto), - O produto é armazenado na lista 
    // Mensagem aparece no console
    // Produto cadastrado com sucesso
}

main();