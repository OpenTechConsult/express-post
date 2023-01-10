// Express application
import express from 'express'

// configuration
const cfg = {
    port: process.env.PORT || 3000
}

// express initiation
const app = express()

// use EJS templates
app.set('view engine', 'ejs')
app.set('views', 'views')

// body parsing middleware
app.use(express.urlencoded({ extended: true }))

// render form
// use .all to handle initial GET and POST requests
app.all('/', (req, res, next) => {
    if (req.method === 'GET' || req.method === 'POST') {
        res.render('form', {
            title: 'Parse HTTP Post Data',
            data: req.body
        })
    } else {
        next()
    }
})

// start server
app.listen(cfg.port, () => {
    console.log(`Example app listening at http://localhost:${cfg.port}`)
})