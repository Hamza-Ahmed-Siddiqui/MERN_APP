const connectToMongo = require('./db')

connectToMongo();




const express = require('express')
const app = express()
const port = 3000


app.use(express.json())
// Available Routes 


app.use('/api/auth',require('./Routes/auth'))
app.use('/api/notes',require('./Routes/notes'))



// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})