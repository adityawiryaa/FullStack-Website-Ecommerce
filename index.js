const express = require('express');
const router = require('./routers/routes')
let cors = require('cors');
const mongooseConnect = require('./config/server');
const bodyParser = require('body-parser');

mongooseConnect()
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use('/uploadsProduct', express.static('uploadsProduct'));
app.use(bodyParser.json())
app.use(router)
app.use(express.json());
app.listen(port, () => {
    console.log(`App Run on http://localhost:${port}`)
})