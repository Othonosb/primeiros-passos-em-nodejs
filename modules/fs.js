const { error } = require("console");
const fs = require("fs");
const path = require("path");

//Criar uma pasta
fs.mkdir(path.join(__dirname,"/test"), (error) => {
        if(error){
            console.log("Erro:", error)
        }
        console.log("Pasta criada com sucesso!");
    });
    
    //Criar uma arquivo
    fs.writeFile(path.join(__dirname, "/test", "test.txt"), "Hello Node!", (error) => {
        if(error){
            return console.log("Erro:", error);
        }
        console.log("Arquivo criado com suceeso!");
    });
    
    // Adicionar arquivos
    fs.appendFile(path.join(__dirname, "/test", "test.txt"), "Hello World", (error) => {
        if(error){
            return console.log("Erro:", error);
        }
        console.log("Arquivo modificado com sucesso!");
    });
    
    // Ler arquivo
    
    fs.readFile(
        path.join(__dirname, "/test", 'text.txt'),"utf8",(error, data) => {
            if(error){
                return console.log("Error:", error);
            
            }
            console.log(data);
        })
    
    
    


