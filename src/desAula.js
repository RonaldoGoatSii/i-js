// Criem uma classe chamada `Produto`.

// `Categorias` podem ser "eletrodoméstico", "decoração", "materiais de construção", "vestuário"

// Pensem em todos os atributos que um produto pode ter. E.g. `Preço`, `nome`, `fabricante`, `categoria`, `número máximo de parcelas`...

// getValorDaParcela(numeroDeParcelas) -> Deve retornar o valor de cada parcela baseado no this.preco do produto

// ---

// Crie uma lista de produtos. Pelo menos 10 itens.

// ---

// Crie uma função que conte o número de produtos d a lista que pertencem a uma mesma categoria.


class Produto {
    constructor(nome, preco, fabricante, categoria, numeroMaxParcelas) {
        this.nome = nome;
        this.preco = preco;
        this.fabricante = fabricante;
        this.categoria = categoria;
        this.numeroMaximoParcelas = numeroMaxParcelas;
    }

    getValorDaParcela(numeroDeParcelas) {
        if (numeroDeParcelas > this.numeroMaximoParcelas) {
            return `Máximo de ${this.numeroMaximoParcelas}x permitido.`;
        }
        return this.preco / numeroDeParcelas;
    }
}


const listaDeProdutos = [
    new Produto("Frigorífico", 2500, "LG", "eletrodoméstico", 12),
    new Produto("Sofá", 1500, "IKEA", "decoração", 10),
    new Produto("Tinta", 200, "CAT", "materiais de construção", 5),
    new Produto("Camisola", 50, "Nike", "vestuário", 3),
    new Produto("Forno", 1800, "Smeg", "eletrodoméstico", 12),
    new Produto("Micro-ondas", 600, "Samsung", "eletrodoméstico", 6),
    new Produto("Vaso Flor", 45, "DecorPlus", "decoração", 2),
    new Produto("Cimento", 10, "Lafarge", "materiais de construção", 1),
    new Produto("Calças Jeans", 80, "Levi's", "vestuário", 4),
    new Produto("Máquina Lavar", 1200, "Whirlpool", "eletrodoméstico", 10)
];

function contarProdutosPorCategoria(lista, categoria) {
    let contador = 0;
    for (const produto of lista) {
        if (produto.categoria === categoria) {
            contador++;
        }
    }
    return contador;
}
