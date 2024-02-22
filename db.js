const mongoose = require('mongoose');
require('dotenv').config()
const db="mongodb+srv://snehallande2020:Snehallande2020@portfolio.cdudosb.mongodb.net/portfolio?retryWrites=true&w=majority"
try {
  mongoose.connect(db,{ useNewUrlParser: true }).then(()=>{
    console.log('connected successfully')
  })
} catch (error) {
  console.log(error)
}