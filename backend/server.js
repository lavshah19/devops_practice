require("dotenv").config();
const express = require("express");
const cors = require("cors");
const conntectTOMongoDB = require("./database/db");
const taskRoute = require("./routes/task.route");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

conntectTOMongoDB();

app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use("/api/tasks", taskRoute);
// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});


// 404 route handler
app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
