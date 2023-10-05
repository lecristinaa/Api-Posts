const cors = require('cors') 
const express = require('express')
const app = express()
const PORT = 3000
require('./db') // chama conexão com o banco
const postsController = require('./controllers/PostsController') // referência ao arquivo das funções crud (posts controller)

app.use(cors()) // cors: traz mais segurança para a api, limita quem pode acessar
app.use(express.json())

// rotas para o crud
// .post = tipo post, cria eles
// /posts = chama todos os postsm não cria
// chama toda a referência e a função exportada
app.post('/posts', postsController.cadastrarPost)

app.listen(PORT, ()=>{
    console.log(`Servidor escutando na porta ${PORT}`)
})