const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// Config
dotenv.config({ path: "backend/config/config.env" });

// DB to connect
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`App successfully listening to port ${process.env.PORT}`);
});
