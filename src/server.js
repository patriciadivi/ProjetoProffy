// Abrindo porta no servidor
// req: requisição  
// res: resposta
const express = require('express')
const server = express()

// Configurando da pasta public, 
// para funcionar os arquivos static " CSS " " Scripts " " Imagens "
server.use(express.static("public"))
.get("/", (req, res) => {
    return res.sendFile(__dirname + "/views/index.html")
})

.get("/study", (req, res) => {
    return res.sendFile(__dirname + "/views/study.html")
})

.get("/give-classes", (req, res) => {
    return res.sendFile(__dirname + "/views/give-classes.html")
})

.listen(5500)

