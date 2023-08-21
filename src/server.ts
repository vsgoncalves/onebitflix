import express from "express"
import { adminJs, adminJsRouter } from "./adminjs"
import { database } from "./database"

const app = express()

app.use(adminJs.options.rootPath, adminJsRouter)

const PORT = process.env.PORT || 3000

//app.listen(PORT, () => {
    //console.log(`Servidor funcionando na porta ${PORT}`)
    
//})


app.listen(PORT, () => {
    database.authenticate().then(() => {
      console.log('DB connection successfull.')
    })
  
    console.log(`Server started successfuly at port ${PORT}.`)
  })
