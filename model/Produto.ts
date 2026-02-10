import { formatarMoeda } from "../src/util/Currency";

export abstract class Produto {

    //Os atributos representam as características / dados que cada objeto da classe Produto vai ter.

    //Os Atributos da Classe Produto São:
    private _id: number;/*private significa que esses atributos só podem ser acessados dentro da própria classe Produto
    Isso garante:  Segurança dos dados, Controle de acesso (normalmente usando getters e setters)*/
    private _nome: string;
    private _tipo: number;
    private _preco: number;

    //Método Construtor
    //O construtor é um método especial que é executado automaticamente quando um objeto é criado a partir da classe.
    //Para que ele serve? Inicializar (dar valor inicial) aos atributos da classe.

    constructor(id: number, nome: string, tipo: number, preco: number) {
        //O que significa this? O this faz referência ao objeto que está sendo criado.

        //Objetos Criados
        this._id = id;//this._numero → atributo da classe - numero → valor recebido como parâmetro no construtor
        this._nome = nome;
        this._tipo = tipo;
        this._preco = preco;
    }


    //Métodos Getters e Setters

    // Servem para criar validações. 
    // sem eles qualquer código pode alterar os dados livremente
    // Se a regra mudar: Você precisa revisar o sistema inteiro, Com getter/setter, muda só em um lugar 
    // Um erro pequeno pode quebrar todo o sistema.

    public get id(): number {
        return this._id;
    }


    public get nome(): string {
        return this._nome;
    }


    public get tipo(): number {
        return this._tipo;
    }

    public get preco(): number {// É acessado pelo método auxiliar sacar para fazer a validação do saldo
        return this._preco;
    }

    //Métodos Setter

    public set id(value: number) {
        this._id = value;
    }


    public set nome(value: string) {
        this._nome = value;
    }


    public set tipo(value: number) {
        this._tipo = value;
    }


    public set preco(value: number) {
        this._preco = value;
    }


    //Métodos Auxiliares
    

    public visualizar(/*parâmetro vazio*/): void {
        let tipo: string;
        switch (this._tipo) {//Acessa o método get tipo acessa o tipo e faz a validação
            case 1:// Caso o tipo seja igual 1, o tipo de bebida vai ser alcoolica
                tipo = "Bebida Alcoolica";
                break;//Para o código
            case 2:
                tipo = "Bebida sem Alcool";// Caso o tipo seja igual 2, o tipo de bebida vai ser sem alcool
                break;//Para o código
            default:
                tipo = "Inválido";
        }

        console.log("\n===============================");
        console.log("\nDados da Conta:");
        console.log("===============================\n");
        console.log(`Número da Conta: ${this._id}`);//Acessa o método get id, acessa o numero do produto e exibe no painel
        console.log(`Nome do Titular: ${this._nome}`);//Acessa o método get nome, acessa o nome do produto e exibe no painel
        console.log(`Tipo de Conta: ${tipo}`);//Acessa o método get tipo, acessa o tipo do produto (Alcoolico, Sem Alcool..) e exibe no painel
        console.log(`Saldo da conta: R$ ${formatarMoeda(this._preco)}`)// //Acessa o método get preco, acessa o preco e exibe no painel
    }
}