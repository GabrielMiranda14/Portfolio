Portfolio — Gabriel Miranda

Sobre o projeto
Portfólio pessoal desenvolvido para apresentar minha formação, conhecimentos, habilidades, tendências tecnológicas e projetos na área de Tecnologia da Informação.
O projeto conta com um formulário de contato, armazenamento de mensagens, automação de e-mails e painel administrativo para gerenciamento dos dados.

Tecnologias utilizadas
HTML5
CSS3
JavaScript
Bootstrap 5
LocalStorage
JSON
EmailJS
Git e GitHub

Automação de e-mails — EmailJS
A ferramenta escolhida para a automação foi o EmailJS, pois permite realizar o envio de e-mails diretamente pelo JavaScript, sem a necessidade de desenvolver um servidor próprio para essa funcionalidade.
Quando um visitante envia uma mensagem pelo formulário de contato:
O JavaScript valida os campos preenchidos.
A mensagem é armazenada no LocalStorage.
O EmailJS recebe os dados por meio do serviço e do modelo de e-mail configurados.
O serviço realiza o envio do e-mail.
O usuário recebe uma confirmação sobre o resultado do envio.
A integração utiliza a biblioteca EmailJS para JavaScript, com Service ID, Template ID e Public Key configurados no arquivo src/js/email.js.
Armazenamento de dados
As mensagens são armazenadas no LocalStorage do navegador e organizadas no formato JSON.
Na primeira inicialização, caso não existam mensagens armazenadas, o sistema cadastra automaticamente 20 mensagens de teste para facilitar a demonstração das funcionalidades administrativas.

Área administrativa — CRUD
O projeto possui uma área administrativa para visualizar e gerenciar as mensagens recebidas.
Caminho de acesso:
src/pages/admin.html
Para acessar o painel:
Execute o projeto utilizando o Live Server no Visual Studio Code.
Abra o endereço local do portfólio no navegador.
Acrescente /src/pages/admin.html ao endereço.
Exemplo:
http://127.0.0.1:5500/src/pages/admin.html
O endereço e a porta podem variar conforme a configuração do servidor local.

Funcionalidades disponíveis
Create: cadastrar mensagens pelo formulário de contato.
Read: visualizar as mensagens no painel administrativo.
Update: editar as informações de uma mensagem.
Delete: excluir mensagens armazenadas.

Para testar, envie uma mensagem pelo formulário de contato e acesse o painel administrativo. A mensagem deverá aparecer na listagem, permitindo testar as operações de edição e exclusão.

Observação: a página administrativa não aparece no menu principal e é acessada diretamente pelo endereço. O projeto não possui autenticação por senha. Os dados do LocalStorage ficam associados ao navegador e à origem local utilizada.

Responsividade

O portfólio foi desenvolvido para se adaptar a diferentes tamanhos de tela, incluindo computadores, tablets e celulares, utilizando Media Queries no CSS.

Como executar o projeto
Abra a pasta do projeto no Visual Studio Code.
Execute o arquivo index.html utilizando a extensão Live Server.
Acesse o endereço disponibilizado pelo servidor no navegador.
Para testar o envio de e-mails, é necessário que a integração com o EmailJS esteja configurada corretamente.

Desenvolvido por Gabriel Miranda.
