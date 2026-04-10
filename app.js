require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
connectDB();

const app = express();
const allowedOrigins = [
  "https://neon-gnome-901543.netlify.app",
  "http://localhost:3000"           
];

app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error("CORS bloqueado: " + origin), false);
  }
}));

app.use(express.json());
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/favorites", require("./routes/favoriteRoutes"));
app.use("/api/teams", require("./routes/teamRoutes"));

app.use((req, res) => {
  res.status(404).send("Ruta no encontrada");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});