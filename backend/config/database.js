const mongoose = require("mongoose");

const connectDatabase = async () => {
  await mongoose
    .connect(process.env.DB_URI)
    .then((data) => {
      console.log(`DB Connected to host: ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDatabase;
