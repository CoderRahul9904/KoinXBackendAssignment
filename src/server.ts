require('dotenv').config({ path: `${__dirname}/configure.env` });
import app from "./app"
const KoinXDB=require('./db')
import './utils/cronJob'


const PORT=process.env.PORT || 3000
app.listen(PORT,() => {
    console.log(`Server listening at http://localhost:${PORT}/`)}
)