require("dotenv").config();

const PORT = process.env.PORT || 5000;
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
app.use(cors()); 
app.use(express.json()); 

connectDB();

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/favorites", require("./routes/favoriteRoutes"));
app.use("/api/teams", require("./routes/teamRoutes"));

app.use((req, res) => {
  res.status(404).send("Ruta no encontrada");
});

app.listen(PORT, () => {console.log("Servidor corriendo 🔥"); 
});