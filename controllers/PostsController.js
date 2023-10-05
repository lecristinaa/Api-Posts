const express = require('express')
const app = express()
const Posts = require('../models/posts') // importa o arquivo "posts"

// primeira rota - cadastrar um post
exports.cadastrarPost = async (req, res) => {
    try{
        const post = await Posts.create(reqb.body)
        res.status(201).json(post) // realiza o cadastro
    } catch (error){
        res.status(500).json({error: 'Erro ao cadastrar post'})
    }
}