class Categories{

    constructor() {
        this.db = require('./db_category.json');
    }

    getAll(){
        return this.db;
    }

    find(ID){
        return this.db.filter(x=>x.id===ID);
    }
}

module.exports = Categories;