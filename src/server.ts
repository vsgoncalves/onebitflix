import express from "express"
import cors from "cors"
import { adminJs, adminJsRouter } from "./adminjs"
import { sequelize } from "./database"
import { router } from "./routers"


const app = express()

app.use(cors())

app.use(express.json())

app.use(express.static('public'))

app.use(adminJs.options.rootPath, adminJsRouter)

app.use(router)

const PORT = process.env.PORT || 3000

//app.listen(PORT, () => {
    //console.log(`Servidor funcionando na porta ${PORT}`)
    
//})


app.listen(PORT, async () => {
    sequelize.authenticate().then(() => {
      console.log('DB connection successfull.')
    })
  
    console.log(`Server started successfuly at port ${PORT}.`)
  })

  //
