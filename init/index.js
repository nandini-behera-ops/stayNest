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
    console.log(err);
  });

const initDB = async (req, res) => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: new mongoose.Types.ObjectId("69e4cd4d10943e7f0b570892"),
    // owner: "69e4cd4d10943e7f0b570892",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was intialized");
};

initDB();
