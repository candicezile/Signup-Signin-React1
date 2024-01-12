const mongoose = require('mongoose');


const mongoDBUrl = 'mongodb://localhost:27017';
mongoose.connect(mongoDBUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({

  name: String,
  surname: String,
  email: String,
 
  
 
});


const UserModel = mongoose.model('User', userSchema);

const getUsers = async () => {
  try {
    
    const users = await UserModel.find();
    console.log(users);
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error; 
  }
};

module.exports = { getUsers };

