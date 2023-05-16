# Desafios Docker FullCycle

## Desafio GO

Link da imagem no Docker-Hub: https://hub.docker.com/repository/docker/fsantaniello/desafio-go/general

## Como Executar a imagem ?

```bash
docker run  fsantaniello/desafio-go
```

## Desafio Node/Nginx

Para executar, basta apenas chamar no browser.

Subindo Docker compose:

```bash
docker-compose up -d --build
```


Chamando a aplicação:
```bash
http://localhost:8080/
```

***Atenção: Na primeira vez que for rodar, o container do mysql vai criar toda a estrutura do banco e isso leva algum tempo. Se você chamar a aplicação e o nginx apresentar alguma pagina de erro, basta apenas dar F5 que assim que o banco subir a aplicação vai responder !***