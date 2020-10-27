const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

//Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/contacts", require("./routes/api/contacts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
