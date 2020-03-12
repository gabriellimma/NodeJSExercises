//criando um servidor

var funcoes = require("../Js/funcoes")

const server = 8000;

var http = require("http"); //carregando o módulo http node

http.createServer(function(requisicao, resposta)
{
    resposta.end(
        `<body style="background-color:powderblue;"> 
            <h1 style='color: blue; text-align: center;'>Bem vindo</h1> 
            <h2 style= 'text-align: center;'>${funcoes.soma(5,5)} 
            <br> 
            ${funcoes.divide(10,2)} 
            <br>
            ${funcoes.multiplica(5,5)}
            <br> 
            ${funcoes.subtrai(5,7)} 
            </h2>
            </div>
                <img src="https://img.freepik.com/fotos-gratis/imagem-macro-de-laranja-madura-na-mesa-de-madeira_1150-20092.jpg?size=626&ext=jpg" alt="Smiley face" height="50%" width="50%" style='padding-left: 25%;'>
            </div>
        </body>`
    )

}).listen(server);



//com isso eu crio um servidor

console.log("O pai ta on")
console.log(`O pai ta rodando no servidor ${server}`)

//usando o express
// como instalar = npm install express

