const express = require('express')
const nunjucks = require('nunjucks')


const server = express()
const videos = require("./data")

server.set("view engine", "njk")

server.use(express.static('public'))

nunjucks.configure("views", {
    express: server,
    autoescape:false,
    noCache: true
})

server.get ("/", function(req, res){
    const about = {
        avatar_url: "https://avatars3.githubusercontent.com/u/66693954?s=460&u=bb8c13585688fefe5e91ec71aa56eef1b6d2da4b&v=4",
        name: "Allyne Romanosque",
        role:"Aluna da Rocketseat",
        description:'Desenvolvedora web em formação, na categoria front-end, cursando o nível Lauchbase pela empresa <a href="https://rocketseat.com.br" target="_blanck">Rocketseat</a>',
        links: [
            {name:"Github", url:"https://github.com/allyneromanosque" },
            {name:"Twitter", url:"https://twitter.com/a_romanosque" },
            {name:"LinkedIn", url:"https://www.linkedin.com/in/allyneromanosque/" },

        ]
    }
    
    return res.render("about", {about: about })
})
server.get ("/portfolio", function(req, res){
    return res.render("portfolio", { items: videos })
})
server.get ("/video", function(req, res){
    const id = req.query.id

    const video = videos.find(function(video) {
        return video.id == id   
    })

    if (!video){
        return res.send ("Video not found!")
    }

    return res.render("video", {item: video})

})


server.listen(5000, function(){
    console.log("server is running")
})