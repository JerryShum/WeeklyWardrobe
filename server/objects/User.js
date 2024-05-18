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
    let styleObj = user.styleObj;
    let clothing = require('./Clothing').wornClothings.find(wornClothing => wornClothing.username === username && wornClothing.clothingId == clothingId);
    if(clothing === undefined) {
        console.log("Clothing not found");
        return 'Clothing piece (id=' + clothingId + ' was not worn by this user ' + username ;
    }
    styleObj.vintageLvl = (styleObj.vintageLvl + clothing.style.vintageLvl * rating) / 2;
    styleObj.smartCasualLvl = (styleObj.smartCasualLvl + clothing.style.smartCasualLvl * rating) / 2;
    styleObj.sportyLvl = (styleObj.sportyLvl + clothing.style.sportyLvl * rating) / 2;
    styleObj.formalLvl = (styleObj.formalLvl + clothing.style.formalLvl * rating) / 2;
    styleObj.partyLvl = (styleObj.partyLvl + clothing.style.partyLvl * rating) / 2;
    // update user style object
    user.style = styleObj;
    return styleObj;
}

module.exports = { User, users, updateStyleObject };
