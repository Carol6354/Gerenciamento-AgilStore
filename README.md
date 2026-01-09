---Gerenciamento de Inventário - AgilStore---
Sistema de controle de estoque desenvolvido em Node.js para a loja AgilStore. A aplicação permite a gestão completa de produtos eletrônicos através de uma interface de linha de comando

*Tecnologias Utilizadas*
-JavaScript (ES6+)
-Node.js
-Biblioteca Readline-sync (Interação via terminal)
-Módulo FS (Manipulação de arquivos do sistema)

*Lógica de Funcionamento*
O sistema foi estruturado em três pilares principais:

-Armazenamento Dinâmico: Os dados são manipulados em um Array de Objetos durante a execução, permitindo acesso rápido para filtragem e exibição.
-Persistência de Dados: Utiliza o formato JSON para salvar o estado do inventário em um arquivo físico (estoque.json), garantindo que as informações não sejam perdidas ao encerrar o programa.
-Identificação Única: Implementação de um contador incremental automático que atribui um ID exclusivo a cada novo produto, facilitando operações de busca e exclusão.

*Descrição das Funções*

-Adicionar: Coleta nome, preço e quantidade, criando um objeto com ID automático e inserindo-o na lista principal.
-Listar: Verifica se há itens no estoque e utiliza o método de tabela do console para uma exibição organizada dos dados.
-Atualizar: Localiza um produto pelo ID e permite a modificação de suas propriedades mantendo o identificador original.
-Excluir: Identifica a posição de um item no array via ID e utiliza o método de remoção por índice para atualizar a lista.
-Buscar: Filtra o inventário utilizando termos de pesquisa que podem corresponder tanto ao ID quanto a partes do nome do produto.
-Persistência (Salvar/Carregar): Converte objetos JavaScript em strings JSON para gravação e realiza o processo inverso (Parsing) ao iniciar o sistema.

*Como Executar*

-Certifique-se de ter o Node.js instalado em sua máquina.
-Clone o repositório ou baixe os arquivos.
-No terminal, dentro da pasta do projeto, instale a dependência necessária:
-npm install readline-sync
-Inicie a aplicação:
-node index.js
