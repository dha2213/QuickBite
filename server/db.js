const mongoose = require("mongoose");
const URL = 'mongodb+srv://dhananjayyadav221303:dhananjay@cluster0.6abhcmr.mongodb.net/users?retryWrites=true&w=majority';
 //const URL = process.env.DB_URL|| `mongodb+srv://${username}:${password}@cluster0.ffcfpwh.mongodb.net/Blogging-site?retryWrites=true&w=majority`;
    // const URL = 'mongodb://127.0.0.1:27017/quickbiteuser';  
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("Could not connect", err);
  });