const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const env = require('dotenv')
const mongoose = require('mongoose') 
const cors = require('cors')
const clientRoutes = require('./routes/clientRoutes') 
const adminRoutes = require('./routes/adminRoutes') 

const app = express()

env.config()

//connection to database
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('DB connected');
}).catch((err)=>{
  console.log(err);
});

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(`${__dirname}/puplic`)));
app.use(express.static(path.join(`${__dirname}/client-side`)));

//main routes
app.use('/api', clientRoutes)
app.use('/api/admin', adminRoutes)

app.use(express.static('client-side/build'))
app.get('*', (req, res)=>{
  res.sendFile(`${__dirname}/client-side/build/index.html`)
})

app.listen(process.env.PORT || 5000 , () => {
  console.log(`Server running on port ${process.env.PORT}`);
})