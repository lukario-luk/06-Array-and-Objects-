// Crie um objeto que receba ao menos três propriedades sobre você.
let lucas = {
    firstName:"Lucas",
    nickName:"Lukario",
    age: 20,
}
// Adicione uma nova propriedade sem alterar seu objeto inicial.
lucas.cell= 24999883540
// Remova uma propriedade desse objeto.
delete lucas.age
//Mostre no console todas as propriedades desse objeto.
console.log(`my name is ${lucas.firstName}, but you can call me ${lucas.nickName}, my contact is ${lucas.cell}.`)


// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
const cadastro= [
    {
        nome:"Andre alvares Machado",
        idade:27,
        telefone:29983326403,
        amigos:["Samanta gomes Pedrosa","João da Costa","Maria Madrigal","Fabio Gilherme Costa","Antonio Pietro Pinto",],
    },{
        nome:"Samanta gomes Pedrosa",
        idade:40,
        telefone:29999002217,
        amigos:["João da Costa","Fabio Gilherme Costa","Maria Madrigal","Vick Fernandes de Aparecida","Lucas Mendes Martin",],
    },{
        nome:"Fabio Gilherme Costa",
        idade:21,
        telefone:33998772128,
        amigos:["Andre Alvares Machado","Wallyson Fernandes de Aparecida","Lucas Mendes Martin","Julho Costa Sila Braga","João da Costa",],
    },{
        nome:"João da Costa",
        idade:29,
        telefone:29999722121,
        amigos:["Wallyson Fernandes de Aparecida","Samanta gomes Pedrosa","Selina Medrades Santos silva de souza","Fabio Gilherme Costa","Andre Alvares Machado",],
    },{
        nome:"Maria Madrigal",
        idade:30,
        telefone:29997156653,
        amigos:["Lucas Mendes Martin","Wallyson Fernandes de Aparecida","Andre Alvares Machado","Samanta gomes Pedrosa","Vick Fernandes de Aparecida",],
    }
]
// Mostre no console o nome de um amigo de cada lista.
console.log(`${cadastro[0].amigos[0]} is a friend of ${cadastro[0].nome}`)
console.log(`${cadastro[1].amigos[0]} is a friend of ${cadastro[1].nome}`)
console.log(`${cadastro[2].amigos[0]} is a friend of ${cadastro[2].nome}`)
console.log(`${cadastro[3].amigos[0]} is a friend of ${cadastro[3].nome}`)
console.log(`${cadastro[4].amigos[0]} is a friend of ${cadastro[4].nome}`)
