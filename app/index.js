const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.json([
    {
	name: 'Bob',
	email: 'Bob@gmail.com'
    },
    {
	name: 'Alice',
       email: 'Alice@hotmail.com'
    },
    {
        name: 'Avi',
       email: 'Avi@yahoo.com'
    }
]))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
