const mongoose = require('mongoose')
const app = require('./app')

const {PORT, DB_HOST} = process.env

mongoose.connect(DB_HOST).then(() =>{
    console.log('DB connect successfuly');
    app.listen(PORT)
}).catch(error => {
    console.log(error.message)
    process.exit(1)
})