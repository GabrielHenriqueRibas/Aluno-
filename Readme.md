# Aluno+

## Sobre o app
O Aluno+ tem o objetivo de auxiliar estudantes no gerenciamento de prazos e inscrições para provas e vestibulares, além de oferecer cursos de preparação. 

Projeto desenvolvido para atividades da UTFPR - Guarapuava, Curso de Sistemas para internet.

## Funcionalidades
- [ ] Alertas sobre prazos de inscrição e datas de provas.
- [ ] Visualização de datas importantes em um calendário integrado.
- [ ] Acesso a cursos online para diversas provas e vestibulares.
- [ ] Artigos e vídeos sobre técnicas de estudo e orientações sobre o processo de escolha de faculdades.
- [ ] Local destinado a verificar informações cadastradas, e atualizar dados.
- [ ] Visualização de planos premium do app e pagamento do Curso de preparação. (Planos futuros).

## Protótipos de tela
[TELAS DO FIGMA](https://www.figma.com/design/9xXuQZIJ5Um3Wb0nO2et7r/DPM?node-id=0-1&t=F503ApqBIwMrZBhP-1)

## Modelagem do banco
Para o banco de dados será ultilizado o Firebase, com a seguinte modelagem:

![image](https://github.com/user-attachments/assets/bc3cbb82-05e9-4d4d-a53e-21cc8fc018d1)

Obs: Caso não seja possivel ou necessário conectar com um banco de dados, será utilizado uma integração via API com o Google sheet para armazenamento de dados(pensando em completar os requisitos da diciplina que será feito dessa forma, mas entendo que em projetos reais, fazer dessa maneira não é a forma correta).
## Planejamento de sprints

- [X] Checkpoint 1 : Planejamento do App;
- Entrega: 28/10/2024;
- Entregue: 28/10/2024;
- Descrição: Entrega do README.md;

- [ ] Checkpoint 2 : Roteamento e esqueleto de Telas;
  - [X] Preparação de Ambiente;
  - [ ] Criação de roteamento;
  - [ ] Criar Tela de Login;
  - [ ] Criar Tela de Registro;
  - [ ] Criar Tela da Home;
  - [ ] Criar Telas de Criação de Lembretes das Provas;
  - [ ] Criar tela de Usuario;
  - [ ] Criar tela de Configuração;
- Entrega: 25/11/2024;
- Entregue: 
- Descrição: Todas as telas estilizadas e navegação básica;

- [ ] Checkpoint 3 : Integração de Funcionalidades (Banco de Dados);
  - [ ] Integração do Banco de dados;
  - [ ] CRUD de Usuario;
  - [ ] CRUD de Lembretes;
  - [ ] Integração de Calendario Funcional;
  - [ ] Visualização de Video Aulas; 
  - [ ] Selecionar planos no app;
- Entrega: 23/12/2024;
- Entregue:
- Descrição: Todas as telas estilizadas e navegação básica;

- [ ] Checkpoint 4 : Entrega do Aplicativo (APK e funcionalidades completas);
  - [ ] Correções e implementações atrasadas;
  - [ ] Funcionamento do App;
  - [ ] Testes;
  - [ ] Funções adicionais;
- Entrega: 24/02/2024;
- Entregue:
- Descrição: Aplicativo finalizado com requisitos adicionais;


## Executando o projeto em ambiente de desenvolvimento

Verifique se tem instalado os seguintes:
```
$ yarn -v
```

Clone o projeto
```
$ git clone https://github.com/GabrielHenriqueRibas/Aluno-
```

Navegue até a pasta
```
$ cd Aluno-
```

Instalação de dependencias
```
$ yarn install
```

Por fim:
```
$ yarn start
```
