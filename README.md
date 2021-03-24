# Animais vertebrados


## Tabela de conteúdos
  * [Sobre](#Sobre)
  * [Instalação](#instalação)
  * [Como usar](#como-usar)
  * [Tecnologias](#tecnologias)

## Sobre
Esse projeto mostra um carrossel com imagens de animais vertebrados. O usuário escolhe uma classe e os animais da classe escolhida são mostrados.

##### Tela de login:
![tela-de-login](https://github.com/anacapdeville/desafio-front-end/blob/master/images/login.png?raw=true)

##### Tela do carrossel para onde o cliente é redirecionado:
![pagina-cliente](https://github.com/anacapdeville/desafio-front-end/blob/master/images/cliente.png?raw=true)

##### Tela do administrador:
![pagina-admin](https://github.com/anacapdeville/desafio-front-end/blob/master/images/admin.png?raw=true)


##### Tela de registro de usuário:
![pagina-registrar]()

## Instalação
1. Acesse o terminal e clone o projeto:

```
git clone git@github.com:anacapdeville/desafio-front-end.git
```

2. Acesse o diretório:
```
cd desafio-front-end
```

3. Instale as dependências:
```
npm install
```

4. Inicializa o projeto:
```
npm start
```

## Como usar
A página inicial é uma página de login na qual um usuário comum e um administrador podem logar. Caso um administrador faça login ocorre um direcionamento para a página do administrador que possui um formulário para adicionar um novo animal com seus dados e foto e também mostra o carrossel com imagens e nome dos animais. Caso um cliente faça login ele é redirecionado para uma página que está o carrossel.

Na página de login se o usuário ainda não tiver uma conta na página é possível realizar um cadastro e informar se é administrador ou não.

Para que o projeto funcione corretamente é necessário que o back-end esteja funcionando corretamente. O back-end dessa aplicação pode ser encontrado em: https://github.com/anacapdeville/desafio-back-end

Os dados do login estão abaixo:

Administrador:
```
email: admin@admin.com
senha: 123456
```

Cliente:
```
email: client@client.com
senha: 123456
```

## Tecnologias
Esse projeto foi desenvolvido em React, React Router Dom para controle da navegação e Bootstrap para estilização.