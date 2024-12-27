# AtividadeTesteAPI
Repositório para atividade de Teste de API - S206

📜 Sobre o projeto:

Projeto criado para a disciplina de Qualidade de Software - S206 - Instituto Nacional de Telecomunicações - INATEL

📚 Sobre o teste de API:

Utilizando o framework Karate, apliquei alguns testes manuais e unitários em uma API de digimon onde procurei alguns personagens referentes ao anime. Criei uma Suíte de teste com um total de seis casos de testes e desses seis casos temos: quatro passam com sucesso e dois são rejeitados, como planejado antes de criar os casos de testes. Após submeter todos casos de testes o programa cria uma espécie de relatório mostrando tudo o que ocorreu em cada caso de teste, esse relatório é um arquivo .HTML que está localizado na pasta target, dentro desta pasta temos outra pasta chamada karate-reports e dentro dessa pasta temos nosso relatório chamado karate-summary.

## 💻 Como executar

1. Abrir o terminal do GIT Bash na pasta `testes_karate` para que o Maven possa encontrar o aquivo `pom.xml`

2. É possível executar a suíte de testes através Runner ou através do seguinte comando: 
```
mvn test –Dtest=digimonTestRunner
```

3. Para executar através da tag, execute o comando:
```
mvn test -Dkarate.options="--tags @digimon”
```

## 📑 Como gerar o relatório

O relatório é gerado automaticamente ao rodar o código. Ele se encontra em um link no fim do relatório com o caminho do arquivo ou basta seguir as pastas abaixo no seu repositório:
```
testes_karate/target/karate-reports
```

Por fim, basta abrir o arquivo `karate-summary.html`