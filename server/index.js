require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const clientsRoutes = require("./routes/clients")
const cors = require('cors')
const path = require('path')

const PORT = process.env.PORT || 7000 

app = express()

app.use(cors())
app.use(express.json())
app.use('/api', clientsRoutes)

app.use(express.static(path.join(__dirname, 'build')))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

async function start() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/nordisClients', {
            useNewUrlParser: true
        })

        app.listen(PORT, () => {
            console.log(`Server has been started on ${PORT} port`);
        })    
    } catch (e) {
        console.log(e);
    }
}

start()