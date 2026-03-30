const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listing");
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
async function main() {
  await mongoose.connect(MONGO_URL);
}
main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(er);
  });

const initDB = async (req, res) => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("data was intialized");
};

initDB();
