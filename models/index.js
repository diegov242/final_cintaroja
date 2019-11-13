const mongoose = require("mongoose")
const bdUrl = "mongodb+srv://root:root@cluster0-07urh.mongodb.net/cinta-roja-b35?retryWrites=true&w=majority"
const User = require("./User")


mongoose.connect(bdUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    err ? console.log(err) : console.log("Conexión exitosa");
})


module.exports = {
    User
}