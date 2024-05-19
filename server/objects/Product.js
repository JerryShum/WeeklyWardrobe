const { StyleLevels, calculateMatchPercent } = require("./Style")


class Product {

    //constructor
    constructor(productId, price, name, brandName, styleObj, imageurl)
    {
        this.productId = productId;
        this.price = price;
        this.name = name;
        this.brandName = brandName;
        this.styleObj = styleObj;
        this.imageurl = imageurl;
    }
}

//assigning values to Product[]
let products = [
    new Product(0, 25.99, "Red T-Shirt", "Muji", new StyleLevels(1, 3, 2, 4, 0), 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'),
    new Product(1, 35.99, "Blue T-Shirt", "Muji", new StyleLevels(2, 2, 3, 2, 1), 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'),
    new Product(2, 45.99, "Green T-Shirt", "Muji", new StyleLevels(3, 1, 4, 1, 2), 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'),
    new Product(3, 45.99, "Nike Air XL", "Nike", new StyleLevels(3, 1, 4, 1, 2), 'https://images.pexels.com/photos/20066688/pexels-photo-20066688/free-photo-of-nike-air-flight-89-in-a-box.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'),
    new Product(4, 11.99, "Naruto White-T", "Uniqlo", new StyleLevels(5, 1, 5, 1, 2), 'https://images.pexels.com/photos/4066288/pexels-photo-4066288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'),
    new Product(5, 15.99, "White T-Shirt", "Muji", new StyleLevels(1, 3, 2, 4, 0), 'https://images.pexels.com/photos/4066288/pexels-photo-4066288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'),
    new Product(6, 12.99, "Nirvana", "Uniqlo", new StyleLevels(5, 1, 5, 1, 2), 'https://images.pexels.com/photos/1933589/pexels-photo-1933589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'),
    new Product(7, 25.99, "Blue Jacket", "Wal-Mart", new StyleLevels(1, 3, 2, 4, 0), 'https://images.pexels.com/photos/2767159/pexels-photo-2767159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'),
    new Product (8, 35.99, "Grey Wool Jacket", "Blue Notes", new StyleLevels(2, 2, 5, 2, 1), 'https://images.pexels.com/photos/447570/pexels-photo-447570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'),
    new Product (9, 78.99, "Premium Brown Dress Shoes", "Blue Notes", new StyleLevels(2, 2, 5, 2, 1), 'https://images.pexels.com/photos/175689/pexels-photo-175689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'),
    new Product(10, 19.99, 'Draw String Bag', 'Uniqlo', new StyleLevels(5, 1, 5, 1, 2), 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/466920/item/goods_09_466920.jpg?width=750'),
    new Product(11, 21.99, 'Extra Stretch AIRism Sleeveless Dress', 'Uniqlo', new StyleLevels(5, 1, 5, 1, 2), 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/464785/item/goods_69_464785.jpg?width=750'),
    new Product(12, 25.99, 'EPREMIUM LINEN LONG SLEEVE SHIRT', 'Uniqlo', new StyleLevels(5, 1, 5, 1, 2), 'https://image.uniqlo.com/UQ/ST3/ca/imagesgoods/464732/item/cagoods_00_464732.jpg?width=750'),
    new Product(13, 19.99, 'DRY PIQUE SHORT SLEEVE POLO SHIRT', 'Uniqlo', new StyleLevels(5, 1, 5, 1, 2), 'https://image.uniqlo.com/UQ/ST3/ca/imagesgoods/455388/item/cagoods_00_455388.jpg?width=750'),
    new Product(14, 12.45, 'DRY PIQUE SHORT SLEEVE POLO SHIRT', 'Uniqlo', new StyleLevels(5, 1, 5, 1, 2), 'https://image.uniqlo.com/UQ/ST3/ca/imagesgoods/469052/item/cagoods_69_469052.jpg?width=750'),
    new Product(15, 12.99, 'Shorts', 'Uniqlo', new StyleLevels(5, 1, 5, 1, 2), 'https://api.fastretailing.com/ugc/v1/uq/kr/SR_IMAGES/ugc_stylehint_uq_kr_photo_240504_1330936_c-600-800'),
    new Product(16, 14.99, 'EXTRA FINE COTTON BROADCLOTH SHIRT', 'Uniqlo', new StyleLevels(5, 1, 5, 1, 2), 'https://image.uniqlo.com/UQ/ST3/ca/imagesgoods/466939/item/cagoods_64_466939.jpg?width=750'),
]

//gets the top products
const getTopProducts = (styleObj, threshold) => {
    let topProducts = [];
    for (let product of products) {
        let matchPercent = calculateMatchPercent(product.styleObj, styleObj);
        if (matchPercent >= threshold) {
            topProducts.push({ product, matchPercent });
        }
    }
    return topProducts;
}

module.exports = {
    Product,
    products,
    getTopProducts
}
