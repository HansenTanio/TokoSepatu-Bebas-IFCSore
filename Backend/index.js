import express from "express";
import cors from "cors";
import router from "./route/route.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'))
app.use(router)

let port = 3000
app.listen(port, () => { console.log("Server running on port %PORT%".replace("%PORT%", port)); })

