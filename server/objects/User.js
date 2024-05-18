class User {
    constructor(name, styleObj, subscribed, likedClothingIds)
    {
        this.name = name;
        this.style = styleObj;
        this.subscribed = subscribed;
        this.likedClothingIds = likedClothingIds;
    }
}


// Styles
// "Vintage", "Smart Casual", "Sporty", "Formal", "Party"
class StyleLevels {
    constructor(vintageLvl, smartCasualLvl, sportyLvl, formalLvl, partyLvl) {
        this.vintageLvl = vintageLvl;
        this.smartCasualLvl = smartCasualLvl;
        this.sportyLvl = sportyLvl;
        this.formalLvl = formalLvl;
        this.partyLvl = partyLvl;
    }
}

users = [
    new User("Alice", new StyleLevels(1, 3, 2, 4, 5), true, [1, 2, 3]),
    new User("Bob", new StyleLevels(2, 4, 3, 5, 1), false, [4, 5, 6]),
    new User("Charlie", new StyleLevels(3, 5, 4, 1, 2), true, [7, 8, 9]),
    new User("Jeremy", new StyleLevels(4, 1, 5, 2, 3), true, []),
];

module.exports = { User, StyleLevels, users };