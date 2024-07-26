require("dotenv").config({ path: "backend/config/config.env" });
const app = require("./app");
const connectDatabase = require('./config/database')



//handle uncaught exception
process.on('uncaughtException', err => {
  console.log(`ERROR: ${err.stack}`)
  console.log('shutting down server due to uncaught exception');
  process.exit(1)
})
//connecting to db
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});

// handle unhandle promise rejection
process.on('unhandledRejection', err => {
  console.log(`ERROR: ${err.message}`);
  console.log('shutting down server due to unhundled rejections');
  server.close(() => {
    process.exit(1)
  })
})
