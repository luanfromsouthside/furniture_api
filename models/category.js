const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const url = 'mongodb://localhost/testdb'


mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const CategorySchema = new Schema({
    _id: String,
    name: String,
    img: String
});

const CategoryModel = mongoose.model('categories',CategorySchema);

module.exports = CategoryModel;

// CategoryModel.create({
//     _id: "accessories",
//     name: "Accessories",
//     img: "https://firebasestorage.googleapis.com/v0/b/thuchanhandroid-c3b7f.appspot.com/o/accessories.png?alt=media&token=458ae950-9435-48e8-948f-4d9e6f2f144b"
// }).then(data=>{
//     console.log({
//         message:'add success',
//         data: data
//     })
// }).then(err=>{
//     console.log('add error', err)
// })