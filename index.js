const input = require('readline-sync');
const fs = require('fs');
let inventario = [];
let contID = 1;

function addProduto() {
    let nome = input.question("Nome do produto: ");
    let preco = input.questionFloat("preco: ");
    let qtd = input.questionInt("quantidade: ");

    let produto = {
        id: contID,
        nome: nome,
        preco: preco,
        quantidade: qtd
    };

    inventario.push(produto);
    contID++;
    console.log("Produto adicionado!!!");

    salvarDD();
}

function listarPorduto() {
    if (inventario.length === 0) {
        console.log("O inventario esta vazio!!!");
    } else {
        console.table(inventario);
    }
}

function atualizarProduto() {
    let buscaID = input.questionInt("Digite o Id do produto que voce deseja atualizar: ");
    let produto = inventario.find(p => p.id === buscaID);

    if (produto) {
        console.log(`Atualizando: ${produto.nome}`);

        let novoNome = input.question("Novo nome (Enter para manter): ");
        let novoQtd = input.questionInt("Nova Quantidade: ");
        let novoPreco = input.questionFloat("Novo preco: ");

        if (novoNome) produto.nome = novoNome;
        produto.quantidade = novoQtd;
        produto.preco = novoPreco;

        console.log("Produto atualizado com sucesso!!!");
        salvarDD();
    } else {
        console.log("Produto não encontrado");
    }
}

function excluirProduto() {
    let excluirID = input.questionInt("Digite o ID do produto que voce quer retirar: ");
    let indice = inventario.findIndex(p => p.id === excluirID);

    if (indice !== -1) {
        inventario.splice(indice, 1);
        console.log("Produto retirado com sucesso!!");
        salvarDD();
    } else {
        console.log("ID não encontrado");
    }
}

function buscarProduto() {
    let termo = input.question("Busque por ID ou nome: ");
    let resultados = inventario.filter(p => 
        p.id.toString() === termo || 
        p.nome.toLowerCase().includes(termo.toLowerCase())
    );

    if (resultados.length > 0) {
        console.table(resultados);
    } else {
        console.log("Nenhum produto encontrado.");
    }
}

function salvarDD() {
    const dados = JSON.stringify(inventario, null, 2);
    fs.writeFileSync('estoque.json', dados);
}

function carrDD() {
    if (fs.existsSync('estoque.json')) {
        const ddTexto = fs.readFileSync('estoque.json', 'utf-8');
        inventario = JSON.parse(ddTexto);

        if (inventario.length > 0) {
            const ultimoId = inventario[inventario.length - 1].id;
            contID = ultimoId + 1;
        }
    }
}

carrDD();

while (true) {
    console.log("\n--- AGILSTORE ---");
    console.log("1- adicionar produtos");
    console.log("2- listar produtos");
    console.log("3- excluir produtos");
    console.log("4- atualizar produto");
    console.log("5- buscar produto");
    console.log("6- sair");

    let opcao = input.question("Qual sua escolha: ");

    if (opcao === "1") {
        addProduto();
    } else if (opcao === "2") {
        listarPorduto();
    } else if (opcao === "3") {
        excluirProduto();
    } else if (opcao === "4") {
        atualizarProduto();
    } else if (opcao === "5") {
        buscarProduto();
    } else if (opcao === "6") {
        break;
    }
}