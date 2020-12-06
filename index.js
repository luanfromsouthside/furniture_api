let express = require("express");
let app = express();
const PORT = process.env.PORT || 8000;

// let Furniture = require('./furniture');
// let Categories = require('./categories');
// let furniture = new Furniture();
// let categories = new Categories();
const FurnitureModel = require('./models/furniture');
const CategoryModel = require('./models/category');
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extend:false}));
app.use(bodyParser.json());

//Get all Furniture
app.get('/furniture',function (req, res) {
    // return res.send(furniture.getAll());
    console.log("User connect...");
    return FurnitureModel.find({}).then(data=>{
        res.send({furnitures : data})
    }).catch(err=>{
        res.send('Find error')
    })
});

//Get Furniture by Id
app.get('/furniture/:id',(req,res)=>{
    // let furniture_item =  furniture.find(req.params.id);
    // if(furniture_item < 1){
    //     res.statusCode = 404;
    //     return res.send({ message: 'not found'});
    // }
    // return res.send({
    //     message: "Success found",
    //     furniture: furniture_item.pop()
    // })
    return FurnitureModel.findOne({
        _id: req.params.id
    }).then(data=>{
        if(data===null){
            res.status(404).send("Couldn't found");
        }else {
            res.send(data);
        }
    }).catch(err=>{
        res.send('Find error')
    })
});

app.get('/',(req,res)=>{
    console.log("User connect api ...");
    return res.redirect('/furniture');
});

//Get all Categories
app.get('/category',(req, res) => {
    // return res.send(categories.getAll());
    return CategoryModel.find({}).then(data=>{
        if(data===null){
            res.status(404).send("Couldn't found");
        }else {
            res.send(data);
        }
    }).catch(err=>{
        res.send('Find error')
    })
});

//Get category by Id
app.get('/category/:id',(req,res)=>{
    // let cate_item = categories.find(req.params.Id);
    // if(cate_item < 1){
    //     res.statusCode=404;
    //     return res.send({message: 'not found'});
    // }
    // return res.send({
    //     message: 'Success found',
    //     category: cate_item.pop()
    // })
    return CategoryModel.findOne({
        _id: req.params.id
    }).then(data=>{
        if(data===null){
            res.status(404).send("Couldn't found");
        }else {
            res.send(data);
        }
    }).catch(err=>{
        res.send('Find error')
    })
})

app.post('/furniture', ((req, res, next) => {
    let id = req.body._id
    let name = req.body.name
    let img = req.body.img
    let id_cate = req.body.category
    let description = req.body.description

    FurnitureModel.create({
        _id: id,
        name: name,
        img: img,
        category: id_cate,
        description: description
    }).then(data=>{
        res.send({
            message: "Add furniture success",
            data: data
        })
    }).catch(err=>{
        res.status(500).send({
            message: 'Add furniture fail',
            error: err
        })
    })
}));

app.post('/category',(req, res, next) => {
    let id = req.body.id
    let name = req.body.name
    let img = req.body.img

    CategoryModel.create({
        _id:id,
        name: name,
        img: img
    }).then(data=>{
        return res.send({
            message: 'add success',
            data: data
        })
    }).catch(err=>{
        return res.status(500).send({
            message: 'add fail',
            error: err
        })
    })
});

app.listen(PORT, () => {
    console.log('server started');
});