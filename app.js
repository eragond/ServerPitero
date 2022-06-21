const express = require('express')
const path = require('path');
const fs = require('fs')

const app = express()
const port = 3000
const testFolder = './tests/'
const folderImg = 'ImagesLocas'

var dir = path.join(__dirname, 'ImagesLocas');
console.log(dir)

app.get('/', (req, res) => {
    res.json(escanea('Top'))
})

app.get('/Top', (req, res) => {
    res.json(escanea('Top'))
})

app.get('/Lunes', (req, res) => {
    res.json(escanea('Lunes'))
})

app.get('/Martes', (req, res) => {
    res.json(escanea('Martes'))
})

app.get('/Miercoles', (req, res) => {
    res.json(escanea('Miercoles'))
})

app.get('/Jueves', (req, res) => {
    res.json(escanea('Jueves'))
})

app.get('/Viernes', (req, res) => {
    res.json(escanea('Viernes'))
})

app.get('/Sabado', (req, res) => {
    res.json(escanea('Sabado'))
})

app.get('/Domingo', (req, res) => {
    res.json(escanea('Domingo'))
})

app.get('/Dios', (req, res) => {
    res.json(escanea('Dios'))
})

app.get('/Flores', (req, res) => {
    res.json(escanea('Flores'))
})

app.get('/Humor', (req, res) => {
    res.json(escanea('Humor'))
})

app.get('/Piolin', (req, res) => {
    res.json(escanea('Piolin'))
})

app.get('/Noches', (req, res) => {
    res.json(escanea('Noches'))
})

function escanea(directorio) {
    let nombres = {'imagenes':[]}
    let testFolder = path.join(folderImg, directorio) 
    fs.readdirSync(testFolder).forEach(file => {
        let nom = {}
        nom['nombre'] = file
        nom['ruta'] = path.join(directorio, file)
        nombres['imagenes'].push(nom)
    });
    return nombres
}

app.use(express.static(dir))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

