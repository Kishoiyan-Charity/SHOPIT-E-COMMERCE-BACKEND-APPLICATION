require("dotenv").config({ path: "backend/config/config.env" });
const app = require("./app");
const connectDatabase = require('./config/database')

//SETTING UP CONFIG FILE
//connecting to db
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(
    `Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});
