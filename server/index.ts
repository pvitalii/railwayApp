import express from "express"
import cors from "cors"
import "dotenv/config"
import sequelize from "./db"
import "./models/models"
import router from "./routes/index"
import errorHandler from "./middleware/ErrorHandling"

const app = express()
const PORT = process.env.PORT || 5000


app.use(cors())
app.use(express.json())
app.use('/api', router)

app.use(errorHandler)


const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()