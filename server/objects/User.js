const { StyleLevels } = require('./Style.js');

class User {
    constructor(username, styleObj, subscribed) {
        this.username = username;
        this.style = styleObj;
        this.subscribed = subscribed;
    }
}


users = [
    new User("Alice", new StyleLevels(1, 3, 2, 4, 5), true),
    new User("Bob", new StyleLevels(2, 4, 3, 5, 1), false),
    new User("Charlie", new StyleLevels(3, 5, 4, 1, 2), true),
    new User("Jeremy", new StyleLevels(4, 1, 5, 2, 3), true,),
];

module.exports = { User, users };
