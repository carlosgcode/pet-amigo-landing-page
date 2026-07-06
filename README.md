# Pet Amigo — Landing Page

Landing page desenvolvida como desafio extra do curso **Introdução à Programação
Front-End e Back-End (IP 20h A)**, no âmbito do programa SCTEC / Carreira Tech —
LAB365 SENAI/SC.

## 1. Identificação do projeto

- **Nome do projeto:** Pet Amigo
- **Tipo:** Landing page comercial para pet shop (marca fictícia)
- **Autor(a):** Carlos Eduardo da Silva Gonçalves
- **Curso:** Introdução à Programação Front-End e Back-End (IP 20h A)
- **Atividade:** Desafio extra — Ciclo 2, Carreira Tech / SCTEC
- **Data de entrega:** 06/07/2026

## 2. Sobre o projeto

O Pet Amigo é uma marca fictícia de pet shop criada para este desafio. A proposta
da página é funcionar como um cartão de visitas digital: apresentar a marca,
destacar os serviços oferecidos e facilitar o contato com potenciais clientes por
meio de dois pontos de conversão — um formulário de contato e um modal de
agendamento de atendimento.

A identidade visual foi construída em torno de tons quentes (laranja `#FFAA57` e
terracota `#D96A4E`) sobre um fundo neutro claro (`#FFF8F2`), buscando transmitir
acolhimento e cuidado, associados ao universo pet. A tipografia combina uma fonte
customizada (Dynamo) para títulos e identidade da marca, com Arial/Helvetica para
textos de leitura corrida.

## 3. Descrição das etapas de desenvolvimento

O desenvolvimento foi dividido em três camadas, seguindo a estrutura pedida pelo
desafio:

### 3.1. Estruturação (HTML)
A página foi organizada em seções semânticas: `header` (cabeçalho fixo com
navegação), `section#inicio` (hero de destaque), `section#sobre` (apresentação da
marca e indicadores), `section#servicos` (cards de serviços) e
`section#contato` (formulário). Um modal de agendamento foi implementado como
elemento independente, sobreposto ao conteúdo principal via overlay.

### 3.2. Estilização e layout (CSS)
- Uso de **Flexbox** para o alinhamento do cabeçalho, das seções "Sobre" e
  "Serviços" e dos indicadores de confiança;
- Uso de **`position: relative`/`absolute`/`fixed`** no cabeçalho fixo, no
  círculo decorativo sobreposto à imagem do hero e no modal de agendamento;
- Uso de **`aspect-ratio: 1/1`** nas imagens dos cards de serviço, garantindo
  proporção consistente independentemente do tamanho da imagem original;
- Paleta de cores e tipografia definidas via variáveis de contexto (fonte
  customizada `@font-face` + fontes do sistema) para reforçar a identidade
  visual da marca.

### 3.3. Interatividade (JavaScript/DOM)
- **Header retrátil:** o cabeçalho se esconde ao rolar a página para baixo e
  reaparece ao rolar para cima, usando `scrollY` e manipulação de classes;
- **Modal de agendamento:** abertura e fechamento controlados via
  `addEventListener`, com validação dos campos obrigatórios (nome, pet,
  telefone, serviço e data) antes de confirmar a solicitação;
- **Formulário de contato:** validação básica de campos obrigatórios e
  validação de formato de e-mail via expressão regular, com mensagens de
  retorno visual (sucesso em verde, erro em vermelho) e limpeza automática do
  formulário após envio bem-sucedido.

### 3.4. Revisão e correções
Após uma primeira versão funcional, o projeto passou por uma etapa de revisão
em que foram corrigidos: uma tag `<section>` não fechada corretamente, um botão
do modal sem funcionalidade associada, ausência de validação de formato de
e-mail, e a remoção de regras de CSS não utilizadas (referentes a uma seção de
equipe que não chegou a ser implementada).

## 4. Estrutura de arquivos

```
pet-amigo/
├── index.html
├── style.css
├── script.js
├── README.md
├── /img
│   ├── pet_hero.jpg
│   ├── pet-feliz.jpg
│   ├── banho.jpg
│   ├── vet.jpg
│   └── produtos.jpg
└── /Font
    └── Dynamo MN Bold.TTF
```

## 5. Guia rápido de execução local

Não é necessário nenhum servidor ou instalação de dependências — o projeto é
100% front-end estático.

1. Extraia o arquivo `.zip`/`.rar` mantendo a estrutura de pastas acima (o
   `index.html` precisa ficar no mesmo nível das pastas `img` e `Font`).
2. Dê duplo clique no arquivo **`index.html`** para abri-lo diretamente no
   navegador.
   - Alternativa (recomendada): clique com o botão direito no `index.html` no
     VS Code e selecione **"Open with Live Server"**, caso a extensão esteja
     instalada.
3. Navegue pela página usando os links do menu superior ou role a tela para
   testar o comportamento do cabeçalho.
4. Teste os pontos de interatividade:
   - Clique em **"Agendar"** no menu para abrir o modal de agendamento;
   - Preencha e envie o **formulário de contato** na última seção da página.

Nenhuma configuração adicional, chave de API ou variável de ambiente é
necessária para rodar o projeto.
