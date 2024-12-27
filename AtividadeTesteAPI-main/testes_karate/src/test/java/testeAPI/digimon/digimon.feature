@digimon
Feature: Executar Testes duncionais nas  APIs do Digimon

Scenario: Verificar o retorno com sucesso da API /digimon/name/Garurumon com dados válidos de requisição (request)
    Given url 'https://digimon-api.vercel.app/api/digimon/name/Garurumon'
    When method get 
    Then status 200

Scenario: Verificar o retorno com sucesso da API /digimon/name/Angemon com dados válidos de requisição (request)
    Given url 'https://digimon-api.vercel.app/api/digimon/name/Angemon'
    When method get 
    Then status 200

Scenario: Verificar o retorno com falha da API /digimon/name/Pikachu com dados válidos de requisição (request)
    Given url 'https://digimon-api.vercel.app/api/digimon/name/Pikachu'
    When method get 
    Then status 200

Scenario: Verificar o retorno com falha da API /digimon/name/Chicorita com dados válidos de requisição (request)
    Given url 'https://digimon-api.vercel.app/api/digimon/name/Chicorita'
    When method get 
    Then status 200

Scenario: Verificar o retorno com sucesso da API /digimon/name/Agumon com dados válidos de requisição (request)
    Given url 'https://digimon-api.vercel.app/api/digimon/name/Agumon'
    When method get 
    Then status 200   

Scenario: Verificar o retorno com sucesso da API /digimon/name/Patamon com dados válidos de requisição (request)
    Given url 'https://digimon-api.vercel.app/api/digimon/name/Patamon'
    When method get 
    Then status 200
    