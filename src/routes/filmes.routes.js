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
app.get("/filmes", (req, res) => {
    return res.status(200).send(filmesMarcantes)
}) 