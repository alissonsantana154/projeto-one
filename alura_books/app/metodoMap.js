function aplicarDescontos(livro) {
    const desconto = 0.3
    livrosComDesconto = livro.map(livro => {
        return{...livro, preco: livro.preco - (livro.preco * desconto)}
    })
    return livrosComDesconto
}