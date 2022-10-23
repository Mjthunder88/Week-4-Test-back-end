const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, emailSubmit, updateSubs, deletesub } = require('./controller')



app.delete("/api/delete/:email", deletesub)
app.put("/api/email/", updateSubs)
app.post("/api/email", emailSubmit)
app.get("/api/fortune", getFortune)
app.get("/api/compliment", getCompliment);

app.listen(4000, () => console.log("Server running on 4000"));
