class Furniture{
    constructor() {
        this.db = require('./db_furniture.json');
        this.Furniture = require('models/furniture');
    }

    getAll(){
        return this.db;
    }

    find(Id){
        return this.db.filter(x => x.id === Id);
    }
}

module.exports = Furniture