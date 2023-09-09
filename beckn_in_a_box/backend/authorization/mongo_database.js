// // Written for reference
// const mongoose = require('mongoose');

// const mongoDBURI = 'mongodb://tvast:password@localhost:27017/?authMechanism=DEFAULT';

// const userSchema = new mongoose.Schema({
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     project: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     project_type: {
//         type: String,
//         required: true
//     },
//     project_api: {
//         type: String,
//         required: true,
//         unique: true
//     }
// });

// // Connection 
// mongoose
//     .connect(mongoDBURI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     .then(() => console.log("MongoDB Connected"))
//     .catch((err) => console.log("Mongo Error", err));

// const User = mongoose.model('authUser', userSchema);

// module.exports = {
//     User
// };
