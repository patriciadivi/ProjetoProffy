// Configurando as informações dos Proffy com o nu // give-classes.html
const proffys = [
    {   
        name: "Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: "89987654534", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost: "20", 
        weekday: [0], 
        time_from: [720], 
        time_to: [1220]
     },
     {   
         name: "Daniele Evagelista", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: "89987654534", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost: "20", 
        weekday: [1], 
        time_from: [720], 
        time_to: [1220]
     },
     {   
        name: "Mayk Brito", 
       avatar: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4", 
       whatsapp: "89987654534", 
       bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
       subject: "Química", 
       cost: "20", 
       weekday: [1], 
       time_from: [720], 
       time_to: [1220]
    }

     

]
// Arry de dados das Matérias
const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

// Arry de dados dos Dias semana
const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

//Função de motivicação de matérias
function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]

}


// Função de Direcionamento de rotas das págimas " html "
function pageLanding(req, res) {
    return res.render("index.html")

}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
    
}

function pageGiveClasses(req, res) {
    const data = req.query

    const isNotEmpty = Object.keys(data).length > 0
    // se tiver dado (data)
    if (isNotEmpty) {

        data.subject = getSubject(data.subject)

    // adicionar dados a lista proffy
        proffys.push(data)
        
        return res.redirect("/study")
    }

    // se não, mostar a página
    return res.render("give-classes.html", { subjects, weekdays })

}



// Abrindo porta no servidor
// req: requisição  
// res: resposta
const express = require('express')
const server = express()


// Configurando o nunjucks (template Engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,

})


// Configurando da pasta public, 
// para funcionar os arquivos static " CSS " " Scripts " " Imagens "
server.use(express.static("public"))
//rotas de aplicação
.get("/", pageLanding)

.get("/study", pageStudy)

.get("/give-classes", pageGiveClasses)
// Número da porta
.listen(5500)

