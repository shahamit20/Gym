import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import main from "./api.js"
import session from "express-session";
import flash from "connect-flash";
const app = express()
const port = 3000
dotenv.config();

app.use(cors())
app.use(express.json())
app.use(
  session({
    secret: "secret-key", // Use a strong secret in production
    resave: false,
    saveUninitialized: true,
  })
);
app.use(flash())

app.get('/', async (req, res) => {
  const aiResponse = await main();
  req.flash("response", aiResponse)
  console.log("💡 Sending to client:", aiResponse);
  if (aiResponse) {
    res.send(aiResponse);
  } else {
    res.status(500).send("Failed to fetch AI response");
  }
})
app.get("/check", (req,res)=>{
  const db = req.flash("response")
  console.log("dvb",db);
  res.send("check")
})

app.post('/', async(req, res) => {
  const name = req.body
  console.log(name)
  const c = await req.flash("response")
  console.log("clskkbsdladk ",c)
  res.send("held")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})