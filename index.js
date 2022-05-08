const express = require('express')
const router = express.Router();
const path = require('path')
const url = require('url')
const cors = require('cors')

const port = 8088

const app = express();

app.use(express.static(path.join(__dirname, '/static/')))

app.listen(port, () => console.log(`Listening to port ${port}`))
