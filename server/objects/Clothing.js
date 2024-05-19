const { StyleLevels, calculateMatchPercent } = require('./Style.js');
const { User, users } = require('./User.js');

// Represents a piece of clothing
class ClothingPiece {
    constructor(id, owner, name, colour, size, material, imageurl, styleObj) {
        this.id = id;
        this.owner = owner;
        this.name = name;
        this.colour = colour;
        this.size = size;
        this.material = material;
        this.imageurl = imageurl;
        this.styleObj = styleObj;
    }
}

// A piece of clothing that has been previously worn
class WornClothing {
    constructor(username, clothingId, weekWorn, rating) {
        this.username = username;
        this.clothingId = clothingId;
        this.weekWorn = weekWorn; // "May Week 1"
        this.rating = rating; // 1-5
    }
}

// A piece of clothing that you may expect to receive this week or have already received it
class WeekClothing {
    constructor(username, clothingId, status) {
        this.username = username;
        this.clothingId = clothingId;
        this.status = status; // "Preparing", "In Transit", "Arrived"
    }
}

// A piece of clothing that you may expect to receive next week
class NextWeekClothing {
    constructor(username, clothingId, matchPercent) {
        this.username = username;
        this.clothingId = clothingId;
        this.matchPercent = matchPercent;
    }
}

clothings = [
    new ClothingPiece(1, "Alice", "Red Dress", "Red",  "M", "Cotton", "https://assets.vogue.com/photos/657364efd68e5cac916773ac/3:4/w_748%2Cc_limit/slide_7.jpg", new StyleLevels(1, 3, 2, 4, 5)),
    new ClothingPiece(2, "Alice", "Black Trousers", "Black", "L", "Polyester", "https://storage.googleapis.com/stateless-www-stylebee-ca/2023/03/8036b685-c22448d0-ba1b-4dfa-9b91-143594987a27.jpg", new StyleLevels(5, 5, 1, 1, 1)),
    new ClothingPiece(3, "Alice", "Blue Jeans", "Blue",  "S", "Denim", "https://s7.landsend.com/is/image/LandsEnd/532582_LEPP_LF_5T1?$xl$&wid=1003&hei=1003", new StyleLevels(3, 3, 3, 3, 3)),
    new ClothingPiece(4, "Bob", "White Shirt", "White",  "M", "Cotton", "https://i.ebayimg.com/images/g/ejwAAOSw~q9izhSB/s-l1200.webp", new StyleLevels(4, 4, 4, 4, 4)),
    new ClothingPiece(5, "Bob", "Grey Suit", "Grey",  "L", "Wool", "https://classy.ca/wp-content/uploads/2022/02/GREY_suit_277-1-6.jpg", new StyleLevels(2, 2, 1, 3, 2)),
    new ClothingPiece(6, "Bob", "Blue Hoodie", "Blue", "M", "Cotton", "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc6%2F42%2Fc6423606bb37794c229fee0852b1e019a9ff765f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", new StyleLevels(1, 1, 5, 2, 3)),
    new ClothingPiece(7, "Charlie", "Black Dress", "Black", "S", "Polyester", "https://i5.walmartimages.com/asr/a932db43-827d-4283-802f-71e99b414470.57b3285b8d9807c4f544440139581863.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF", new StyleLevels(5, 5, 1, 1, 1)),
    new ClothingPiece(8, "Charlie", "Red Trousers", "Red",  "M", "Cotton", "https://media1.popsugar-assets.com/files/thumbor/Zm7hS9axg1h5lP_T4f8TfAdnfzU/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/11/29/442/n/1922564/23fa80b19d18bf33_GettyImages-1066072128/i/Victoria-Beckham-Red-Trousers-November-2018.jpg", new StyleLevels(3, 3, 3, 3, 3)),
    new ClothingPiece(9, "Charlie", "White Shirt", "White", "L", "Cotton", "https://handcmediastorage.blob.core.windows.net/productimages/FI/FIPMA002-N01-169812-1400px-1820px.jpg"),
    new ClothingPiece(10, "Jeremy", "Tech H&M Sweater", "Teal", "XL", "Cotton", "https://i.imgur.com/dbqhK29.jpeg", new StyleLevels(1, 3, 2, 4, 5)),
    new ClothingPiece(11, "Jeremy", "Nike Shoes", "Blue", "28", "Leather", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png", new StyleLevels(1, 3, 2, 4, 5)),
];

wornClothings = [
    new WornClothing("Alice", 1, "May Week 1", 5),
    new WornClothing("Alice", 2, "May Week 2", 4),
    new WornClothing("Alice", 3, "May Week 2", 3),
    new WornClothing("Bob", 1, "May Week 2", 5),
    new WornClothing("Bob", 2, "May Week 2", 4),
    new WornClothing("Charlie", 9, "May Week 1", 4),
    new WornClothing("Charlie", 10, "May Week 1", 4),
    new WornClothing("Jeremy", 2, "May Week 1", 4),
    new WornClothing("Jeremy", 4, "May Week 1", 3),
    new WornClothing("Jeremy", 6, "May Week 1", 4),
    new WornClothing("Jeremy", 7, "May Week 2", 1),
    new WornClothing("Jeremy", 8, "May Week 2", 1),
];

weekClothings = [
    new WeekClothing("Alice", 1, "Preparing"),
    new WeekClothing("Alice", 2, "In Transit"),
    new WeekClothing("Alice", 3, "Arrived"),
    new WeekClothing("Bob", 1, "Preparing"),
    new WeekClothing("Bob", 2, "In Transit"),
    new WeekClothing("Charlie", 9, "Preparing"),
    new WeekClothing("Charlie", 10, "Arrived"),
    new WeekClothing("Jeremy", 4, "Preparing"),
    new WeekClothing("Jeremy", 6, "Preparing"),
    new WeekClothing("Jeremy", 7, "Preparing"),
];

nextWeekClothings = [
    new NextWeekClothing("Alice", 4, 90),
    new NextWeekClothing("Alice", 5, 80),
    new NextWeekClothing("Alice", 6, 70),
    new NextWeekClothing("Bob", 3, 90),
    new NextWeekClothing("Bob", 4, 80),
    new NextWeekClothing("Bob", 5, 70),
    new NextWeekClothing("Charlie", 7, 90),
    new NextWeekClothing("Charlie", 8, 80),
    new NextWeekClothing("Charlie", 9, 70),
    new NextWeekClothing("Jeremy", 10, 90),
    new NextWeekClothing("Jeremy", 11, 80),
];

const getWornClothes = (username) => {
    const worthClothes = wornClothings.filter(wornClothing => wornClothing.username === username);
    return worthClothes;
}

const getCurrentWeekClothes = (username) => {
    const currentWeekClothes = weekClothings.filter(weekClothing => weekClothing.username === username);
    return currentWeekClothes;
}

const reevaluateNextWeekClothes = (username, threshold) => {
    let userStyleObj = users.find(user => user.username === username).styleObj;
    let clothingsToCheck = clothings.filter(clothing => clothing.owner !== username && !wornClothings.some(wornClothing => wornClothing.clothingId === clothing.id));
    // remove all of username in nextWeekClothings
    nextWeekClothings = nextWeekClothings.filter(nextWeekClothing => nextWeekClothing.username !== username);
    // reevaluate next week clothes by looking in clothings that are not worn by username and that are not in weekClothings and have a >= 70% match with styleObj
    // log clothingsToCheck
    console.log(clothingsToCheck);
    let usersNextWeekClothings = [];
    for (let clothing of clothingsToCheck) {
        const clothingStyleObj = clothing.styleObj;

        let matchPercent = calculateMatchPercent(userStyleObj, clothingStyleObj);
        if (matchPercent >= threshold) {
            usersNextWeekClothings.push(new NextWeekClothing(username, clothing.id, matchPercent));
        }
    }
    nextWeekClothings.push(...usersNextWeekClothings);
    return usersNextWeekClothings;
}

const getNextWeekClothes = (username) => {
    const nextWeekClothes = nextWeekClothings.filter(nextWeekClothing => nextWeekClothing.username === username);
    return nextWeekClothes;
}

module.exports = { ClothingPiece, WornClothing, WeekClothing, NextWeekClothing, clothings, wornClothings, weekClothings, nextWeekClothings, getWornClothes, getCurrentWeekClothes, reevaluateNextWeekClothes, getNextWeekClothes };
