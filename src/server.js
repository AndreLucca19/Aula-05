import express from "express"
import {config} from "dotenv"

config()

const port = process.env.PORT || 3000

const app = express()

app.use(express.json())

const guloseimas = [
    {
       id: 1,
       nome: "Trufa",
       preco: 8.50, 
    },
    {
        id: 2,
        nome: "Bolo de pote",
        preco: 10.0,
    },
    {
        id: 3,
        nome: "Pudim",
        preco: 12.0,
    },
]

const filmesMarcantes = [
    {
        id: 1001,
        titulo: "Velozes e Furiosos",
        genero: "Ação",
        emCartaz: false
    },
    {
        id: 1002,
        titulo: "Meu Malvado Favorito 4",
        genero: "Animação, Comédia",
        emCartaz: true
    },
    {
        id: 1003,
        titulo: "Dead Pool 3",
        genero: "Ação, Comédia",
        emCartaz: true
    },
    {
        id: 1004,
        titulo: "Jogos Vorazes",
        genero: "Ação, Suspense",
        emCartaz: false
    }
]

app.get("/", (req, res) => {
    return res.status(200).send({massage: "Hello, World!"})
}) 
app.get("/doces", (req, res) => {
    return res.status(200).send(guloseimas)
}) 
app.post("/doces", (req, res) => {
    const{nome, preco} = req.body
    const novoDoce = {
        id: guloseimas.length + 1,
        nome: nome,
        preco: preco,
    }
    guloseimas.push(novoDoce);
    
    return res.status(200).send(guloseimas)
}) 
app.get("/filmes", (req, res) => {
    return res.status(200).send(filmesMarcantes)
}) 

app.listen( port, () => {
    console.log(`👾 sever started to http://localhost:${port}`)
})