const express = require("express");
const app = express();
const morgan = require("morgan");

//middleware
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.json())

//settings
app.set("port", process.env.PORT || 3000)
app.set("json spaces", 2);

//routes
app.use(require("./routes/index"));
app.use("/api/especies",require("./routes/especies"));
app.use("/api/users", require("./routes/users"));

//starting server
app.listen(app.get("port"), () =>{
    console.log(`Server on port ${app.get("port")}`)
})