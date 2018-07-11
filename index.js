const express = require('express')

const app = express()

const PORT = process.env.PORT || 6000
console.log(process.env.PORT)
const ASSETS_URL = process.env.NODE_ENV == 'dev' ? 'http://localhost:8080/build' : '' 
const assets = { css: `${ASSETS_URL}/bundle.css`, js: `${ASSETS_URL}/bundle.js` } 


app.use(express.static('assets'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
	res.render('index', {title: 'Hello World', assets})
})

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`))
