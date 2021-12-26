const express = require("express")
const categoryTypeRouter = require("./routes/category_type.routes")

const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use('/api',categoryTypeRouter)

app.listen(PORT, ()=>{
    console.log(`server start on port=${PORT}`)
})