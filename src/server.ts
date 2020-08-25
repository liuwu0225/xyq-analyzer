import express from "express"

const app = express();

app.get("/", (req, res) =>{
    res.status(200).send("Hello xyq-analyzer")
})

app.listen(3000, ()=>{
    console.log("xyq-analyzer started, listening at port 3000......")
})