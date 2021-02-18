#### São 23 padrões, foram catalogados e padronizados pelos autores Erich Gamma, RIchard Helm, Ralph Jonson e John Vlissides. 

####  — Lembrando que apenas sugestões, pois algumas linguagens não oferecem recursos como classes, classes abstratas ou interfaces. Podendo ser implementados em qualquer linguagem de programação.

#### Benefícios e problemas:

##### Benefícios:

###### Não precisamos reinventar a roda, precisamos saber apenas utilizar a roda, ou seja, apenas colocar a roda no carro.
###### Os padrões são universais, facilitando o entendimento.
###### Ajuda na reutilização do código. (DRY: link)
###### Nomeia partes do projetos. Por exemplo o padrão "personFactory" se você encontrar esse nome em alguma parte do projeto, certamente será um padrão que está sendo utilizado ali.
###### Ajuda na aplicação dos princípios do design orientado a objeto (SOLID). Facilitando na aplicação de testes unitários.

##### Problemas:

###### Alguns padrões de projetos são complexos.
###### Muito código para um objetivo simples.
###### Aplicar os padrões de primeira pode atrapalhar. Implementar de uma forma que funciona e depois refatorar o código utilizando os padrões, é bem melhor.
###### É preciso sentir a necessidade de aplicar os padrões de projeto, caso não, melhor não aplicar.

##### Foram divididos em três categorias:

##### Creational que visam abstrair a criação de objetos:

###### Abstract factory.
###### Factory Method
###### Builder
###### Prototype
###### Singleton: Garante que uma classe tenha apenas uma instância e que o acesso a ela globalmente. Geralmente usado para acessos compartilhados, como acesso à base de dados, sistemas de arquivo, servidores de impressão, entre outros.

##### Structural: Lidam com a composição de classes e objetos:

###### Adapter
###### Bridge
###### Composite
###### Deccorator
###### Façade
###### Flyweight
###### Proxy

##### Behavioural: Como as classes e objetos interagem e distribuem responsabilidades:

###### Interpreter
###### Template method
###### Chain of reponsibility
###### Iterator
###### Command
###### Mediator
###### Memento
###### Observer
###### State
###### Strategy
###### Visitor