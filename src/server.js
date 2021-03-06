const express = require("express");
const app = express();
const env = require("dotenv");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");

// -----------------------Routes----------------------------
const userAuthRoutes = require("./routes/authUser");
const adminAuthRoutes = require("./routes/authAdmin");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");

env.config();

// Mongodb connection
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ecommerce.nan67.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log("Database connected");
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", userAuthRoutes);
app.use("/api", adminAuthRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);

// Server calling
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
