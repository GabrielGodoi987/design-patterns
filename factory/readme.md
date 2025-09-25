
+ criar uma entity order(order deve ter cityType[recebe um enum que vai ter o tipo da city])
+ The product -> criar interface responsável por conter as assinaturas dos métodos necessários para o tipo de transporte
+ Concrect products -> as subclasses. Devem implementar o product e usar os seus métodos definidos
+ The creator -> a factory, que vai instanciar a classe com base na cidade, chamando o tipo de transporte


flow 
  + Criar order
  + order tem um tipo de cidade
  + com base nesse trigger nós mostramos o tipo de transporte