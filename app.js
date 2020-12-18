const app = require("express")()

app.get("/", (req, res) => {
        res.sendFile(`${__dirname}/index.html`)
        //nd("hello world from devops shihab")
})

app.get("/about", (req, res) => {
        res.statusCode = 202
        res.sendFile(`${__dirname}/about.html`)
        //nd("hello world from devops workshop")
})

app.get("/sum", (req, res) => {
        let a = Number(req.query.num1)
        let b = Number(req.query.num2)

        res.send(`Summation of ${a} and ${b} is ${a+b}`)
})

app.listen(5858, ()=> console.log("we are listening on port 5858"))
