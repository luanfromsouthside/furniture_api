const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const url = process.env.DB_URL;
//const url = 'mongodb://localhost/testdb'
//const url = 'mongodb+srv://thuchanhandroid:thuchanhandroid@cluster0.8qmwl.mongodb.net/AppDB?retryWrites=true&w=majority'

mongoose.connect( url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(err=>{
    console.log("Error connect");
});

const FurnitureSchema = new Schema({
    _id: String,
    name: String,
    img: String,
    category: String,
    description: String
});

const FurnitureModel = mongoose.model('furnitures',FurnitureSchema);

module.exports = FurnitureModel;

// FurnitureModel.create({
//     _id: "pro01",
//     name: "Zinus Jocelyn Contemporary 65 inch",
//     img: "https://firebasestorage.googleapis.com/v0/b/thuchanhandroid-c3b7f.appspot.com/o/hinh_1.png?alt=media&token=243a21b7-2ad1-4e0b-8b34-54d80e71a3b7",
//     category: "living_room",
//     description: "Easily assembles with a friend, no tools needed, in under 20 minutes. Modern armless design with stress-free fabrics, durable and easy-to-clean"
// }).then(data=>{
//     console.log('add success \n',data);
// }).then(err=>{
//     console.log('add fail \n',err);
// })

