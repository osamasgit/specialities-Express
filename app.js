const express = require('express');
const tamplateNavbar = require('./navbar.js')
const getUsersBySpecialty = require('./usersFilter.js')

const app = express();

app.get('/',(req, res) => {
    res.send(tamplateNavbar)
})

app.get('/marketing',(req, res) => {
    res.send(`${tamplateNavbar}
        ${getUsersBySpecialty('marketing')}`)
})

app.get('/developers',(req, res) => {
    res.send(`${tamplateNavbar}
        ${getUsersBySpecialty('developers')}`)
})

app.get('/qas',(req, res) => {
    res.send(`${tamplateNavbar}
        ${getUsersBySpecialty('QAs')}`)
})

app.get('/ventas',(req, res) => {
    res.send(`${tamplateNavbar}
        ${getUsersBySpecialty('ventas')}`)
})

app.use((req, res) => {
    res.status(404).send('ERROR 404 Página no encontrada')
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`)
})