const { StyleLevels } = require('./Style.js');

class User {
    constructor(username, styleObj, subscribed) {
        this.username = username;
        this.styleObj = styleObj;
        this.subscribed = subscribed;
    }
}


users = [
    new User("Alice", new StyleLevels(1, 3, 2, 4, 5), true),
    new User("Bob", new StyleLevels(2, 4, 3, 5, 1), false),
    new User("Charlie", new StyleLevels(3, 5, 4, 1, 2), true),
    new User("Jeremy", new StyleLevels(4, 1, 5, 2, 3), true,),
];

const updateStyleObject = (username, clothingId, rating) => {
    let user = users.find(user => user.username === username);
    let wornClothing = require('./Clothing').wornClothings.find(wornClothing => wornClothing.username === username && wornClothing.clothingId == clothingId);
    if(wornClothing === undefined) {
        console.log("Clothing not found");
        return 'Clothing piece (id=' + clothingId + ' was not worn by this user ' + username ;
    }
    let clothing = require('./Clothing').clothings.find(clothing => clothing.id == clothingId);
    // console log styleObj and clothing.styleObj
    console.log(user.styleObj);
    console.log(clothing.styleObj);
    user.styleObj.vintageLvl = (user.styleObj.vintageLvl + clothing.styleObj.vintageLvl * rating) / 2;
    user.styleObj.smartCasualLvl = (user.styleObj.smartCasualLvl + clothing.styleObj.smartCasualLvl * rating) / 2;
    user.styleObj.sportyLvl = (user.styleObj.sportyLvl + clothing.styleObj.sportyLvl * rating) / 2;
    user.styleObj.formalLvl = (user.styleObj.formalLvl + clothing.styleObj.formalLvl * rating) / 2;
    user.styleObj.partyLvl = (user.styleObj.partyLvl + clothing.styleObj.partyLvl * rating) / 2;
    return styleObj;
}

module.exports = { User, users, updateStyleObject };
