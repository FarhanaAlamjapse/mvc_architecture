const express = require("express");
const app = express();
const PORT = 3001;
const userRouter = require("./routes/users.route.js");
const productRouter = require("./routes/products.route.js");

app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.use(productRouter);

app.use((req, res, next) => {
  res.status(404).json({
    message: "resource not found",
  });
});
app.listen(PORT, () => {
  console.log(`server is running http://localhost:${PORT}`);
});
