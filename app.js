const express = require("express")
const app = express()
const PORT = process.env.PORT || 4000
const { User } = require("./models/index")
const cors = require("cors")

// CRUD ( CREATE, READ, UPDATE, DELETE)

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.post("/api/v1/create/user", (request, response) => {
    const data = request.body
    const newUser = new User(data)
    newUser.save((err, user) => {
        if (err) {
            response.status(409).send(err)
        } else {
            response.status(201).send(user)
        }
    })
})

app.get("/api/v1/get/user/:userid", (request, response) => {
    const id = request.params.userid
    User.findById(id, (err, user) => {
        if (err) {
            response.status(404).send(err)
        } else {
            response.status(200).send(user)
        }
    })
})

app.get("/api/v1/get/users", (request, response) => {
    User.find({ is_active: true }, (err, users) => {
        if (err) {
            response.status(404).send(err)
        } else {
            response.status(200).send(users)
        }
    })
})

app.put("/api/v1/update/user/:userid", (request, response) => {
    const id = request.params.userid
    const newUser = request.body
    User.findByIdAndUpdate(id, { $set: newUser }, { new: true }, (err, user) => {
        if (err) {
            response.status(404).send(err)
        } else {
            response.status(200).send(user)
        }
    })
})

app.delete("/api/v1/delete/user/:userid", (request, response) => {
    const id = request.params.userid
    User.findByIdAndUpdate(id, { $set: { is_active: false } }, { new: true }, (err, user) => {
        if (err) {
            response.status(404).send(err)
        } else {
            response.status(200).send("El usuario ha sido exterminado")
        }
    })
})

app.listen(PORT, (err) => {
    console.log(`Server in port  ${PORT}`);
})