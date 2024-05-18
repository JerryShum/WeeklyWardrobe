

class ClothingPiece {
    constructor(id, owner, name, colour, style, size, material, imageurl) {
        this.id = id;
        this.owner = owner;
        this.name = name;
        this.colour = colour;
        this.style = style;
        this.size = size;
        this.material = material;
        this.imageurl = imageurl;
    }
}

clothings = [
    new ClothingPiece(1, "Alice", "Red Dress", "Red", "Party", "M", "Cotton", "https://assets.vogue.com/photos/657364efd68e5cac916773ac/3:4/w_748%2Cc_limit/slide_7.jpg"),
    new ClothingPiece(2, "Alice", "Black Trousers", "Black", "Formal", "L", "Polyester", "https://storage.googleapis.com/stateless-www-stylebee-ca/2023/03/8036b685-c22448d0-ba1b-4dfa-9b91-143594987a27.jpg"),
    new ClothingPiece(3, "Alice", "Blue Jeans", "Blue", "Smart Casual", "S", "Denim", "https://s7.landsend.com/is/image/LandsEnd/532582_LEPP_LF_5T1?$xl$&wid=1003&hei=1003"),
    new ClothingPiece(4, "Bob", "White Shirt", "White", "Formal", "M", "Cotton", "https://i.ebayimg.com/images/g/ejwAAOSw~q9izhSB/s-l1200.webp"),
    new ClothingPiece(5, "Bob", "Grey Suit", "Grey", "Formal", "L", "Wool", "https://classy.ca/wp-content/uploads/2022/02/GREY_suit_277-1-6.jpg"),
    new ClothingPiece(6, "Bob", "Blue Hoodie", "Blue", "Sporty", "M", "Cotton", "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc6%2F42%2Fc6423606bb37794c229fee0852b1e019a9ff765f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"),
    new ClothingPiece(7, "Charlie", "Black Dress", "Black", "Party", "S", "Polyester", "https://i5.walmartimages.com/asr/a932db43-827d-4283-802f-71e99b414470.57b3285b8d9807c4f544440139581863.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF"),
    new ClothingPiece(8, "Charlie", "Red Trousers", "Red", "Smart Casual", "M", "Cotton", "https://media1.popsugar-assets.com/files/thumbor/Zm7hS9axg1h5lP_T4f8TfAdnfzU/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/11/29/442/n/1922564/23fa80b19d18bf33_GettyImages-1066072128/i/Victoria-Beckham-Red-Trousers-November-2018.jpg"),
    new ClothingPiece(9, "Charlie", "White Shirt", "White", "Formal", "L", "Cotton", "https://handcmediastorage.blob.core.windows.net/productimages/FI/FIPMA002-N01-169812-1400px-1820px.jpg"),
    new ClothingPiece(10, "Jeremy", "Tech H&M Sweater", "Teal", "Smart Casual", "XL", "Cotton", "https://i.imgur.com/dbqhK29.jpeg"),
    new ClothingPiece(11, "Jeremy", "Nike Shoes", "Blue", "Smart Casual", "28", "Leather", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png"),
];

module.exports = { ClothingPiece, clothings };
