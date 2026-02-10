
import { Produto } from "./Produto";

export class BebidaSemAlcool extends Produto {//Isso significa: BebidaASemAlcool é um Produto e pode ser usada onde o tipo Produto é esperado
    // Exemplo: cadastrar(produto: Produto) Pode receber:produtos.cadastrar(new BebidaSemAlcool(1, "Coca-Cola", 2, 10, sem_alcool)); ➡️ Isso é polimorfismo

    // Atributos expecificos de Bebida Sem Alcool
    private _sem_alcool: string;//private significa que esses atributos só podem ser acessados dentro da própria classe BebidaSemAlcool 


    constructor
        //Atributos 
        (id: number, nome: string, tipo: number, preco: number, sem_alcool: string) {
        // id→ valor recebido como parâmetro no construtor - esse valor será setado no Menu quando formos criar um produto

        super(id, nome, tipo, preco,)//super(...) → chama o construtor da classe BebidaSemAlcool
        // Inicializa: id, nome, tipo, preco
        this._sem_alcool = sem_alcool; //Depois define o atributo específico: _sem_alcool- Polimorfismo
    }


    //Métodos Get e Set específicos da Classe BebidaSemAlcool

    public get sem_alcool(/*parâmetro*/): string {// É acessado pelo método auxiliar visualizar para exibir os dados do produto
        return this._sem_alcool;
    }

    public set sem_alcool(/*parâmetro*/value: string) {
        this._sem_alcool = value;
    }


    //Método visualizar sobrescrito(Polimorfismo)
    public visualizar(): void {
        super.visualizar();//Pega o método visualizar de Produto para exibir os dados do produto
       console.log(`Limite da conta: R$ ${(this._sem_alcool)}`)//this.sem_alcool acessa o método get sem_alcool para exibir o tipo de bebida 
    }

}

