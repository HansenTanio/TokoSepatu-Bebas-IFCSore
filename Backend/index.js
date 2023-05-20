import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.static('public'))

let port = 3000
app.listen(port, () => { console.log("Server running on port %PORT%".replace("%PORT%", port)); })

