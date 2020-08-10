// Abrindo porta no servidor
// req: requisição  
// res: resposta
const express = require('express')
const server = express()

// exportanto as função da página ' pages.js '
const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

// Configurando o nunjucks (template Engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,

})

  
// Iniciando e configuração do serviço
server
// receber os dados do req.body
.use(express.urlencoded({ extended: true }))
// para funcionar os arquivos static " CSS " " Scripts " " Imagens " , Configurando da pasta public
.use(express.static("public"))
//rotas de aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
// Número da porta
.listen(5500)

