
import { Produto } from "./Produto";

export class BebidaAlcoolica extends Produto {//Isso significa: BebidaAlcoolica é um Produto e pode ser usada onde o tipo Produto é esperado
    // Exemplo: cadastrar(produto: Produto) Pode receber:produtos.cadastrar(new BebidaAlcoolica(1, "Skol", 1, 15, alcoolica)); ➡️ Isso é polimorfismo

    // Atributos expecificos de Bebida Alcoolica
    private _alcoolica: string;//private significa que esses atributos só podem ser acessados dentro da própria classe BebidaAlcoolica 


    constructor
        //Atributos 
        (id: number, nome: string, tipo: number, preco: number, alcoolica: string) {
        // id → valor recebido como parâmetro no construtor - esse valor será setado no Menu quando formos criar um produto

        super(id, nome, tipo, preco,)//super(...) → chama o construtor da classe BebidaAlcoolica
        // Inicializa: id, nome, tipo, preco
        this._alcoolica = alcoolica; //Depois define o atributo específico: _alcoolica - Polimorfismo
    }


    //Métodos Get e Set específicos da Classe BebidaAlcoolica

    public get alcolica(/*parâmetro*/): string {// É acessado pelo método auxiliar visualizar para exibir os dados do produto
        return this._alcoolica;
    }

    public set alcoolica(/*parâmetro*/value: string) {
        this._alcoolica = value;
    }


    //Método visualizar sobrescrito(Polimorfismo)
    public visualizar(): void {
        super.visualizar();//Pega o método visualizar do produto para exibir os dados do produto
       console.log(`Tipo de Produto: R$ ${(this._alcoolica)}`)//this.alcoolica acessa o método get alcoolica para exibir o tipo de bebida 
    }

}

