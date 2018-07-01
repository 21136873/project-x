const express = require('express')

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.static('assets'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
	res.render('index', {title: 'Hello World'})
})

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`))
