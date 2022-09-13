# CWI-Reset04-Exercícios-Módulo-02

Projeto CWI Reset 4ª edição. 


# Exercícios Módulo 2 - Niveis e Casos de Teste.
## Aula 04 - Casos de Teste

### Exercício:
1. Elabore cenários simulando testes na funcionalidade de login do Google.

#### Acessar o sistema com um usuário invalido

| Ação                                             | Resultado                                 |
| ----------------------------------------------   | ----------------------------------------- |
| Acessar a aplicação                              | Devo ser direcionado para a tela de login |
| Preencher o campo de email com um email invalido | Não deve ocorrer erro                     |
| Clicar no botão que "Proxima"                    | Não deve seguir para proxima pagina       |



### Exemplo de cenário utilizando Gherkin:

```
Cenário: Acessar o sistema com um usuário inválido
Dado que acessei a aplicação
E fui direcionado para o login
Quando preencho meus dados de acesso incorretamente
Então retorna uma mensagem de erro 
```

---






