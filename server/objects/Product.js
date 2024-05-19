const { StyleLevels, calculateMatchPercent } = require("./Style")


class Product {

    constructor(productId, price, name, brandName, styleObj, imageurl) {
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
    new Product(0, 25.99, "Yellow Dress", "Muji", new StyleLevels(1, 3, 2, 4, 0), 'https://muji.ca/cdn/shop/files/4550583818920_org_700x.jpg?v=1711558561'),
    new Product(1, 35.99, "Linen Blouse", "Muji", new StyleLevels(2, 2, 3, 2, 1), 'https://muji.ca/cdn/shop/files/4550583835088_org_700x.jpg?v=1713986178'),
    new Product(2, 45.99, "Long Sleeve Striped Shirt", "Muji", new StyleLevels(3, 1, 4, 1, 2), 'https://muji.ca/cdn/shop/files/4550583564308_org_700x.jpg?v=1703119848'),
    new Product(3, 45.99, "Nike Air Max", "Nike", new StyleLevels(3, 1, 4, 1, 2), 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5bc5bc81-9e76-444f-93ce-c7e1446f17af/air-max-dn-shoes-q51Wwn.png'),
    new Product(4, 11.99, "Black Collared Shirt", "Uniqlo", new StyleLevels(5, 1, 5, 1, 2), 'https://image.uniqlo.com/UQ/ST3/ca/imagesgoods/464938/item/cagoods_09_464938.jpg?width=750'),
    new Product(5, 15.99, "White Pajama Shirt", "Muji", new StyleLevels(1, 3, 2, 4, 0), 'https://muji.ca/cdn/shop/products/4550583609207_org_9f8b6540-148a-429d-8d80-01e04a5fceab_700x.jpg?v=1704908122'),
    new Product(6, 12.99, "AirSenese Shorts", "Uniqlo", new StyleLevels(5, 1, 5, 1, 2), 'https://image.uniqlo.com/UQ/ST3/ca/imagesgoods/470441/item/cagoods_00_470441.jpg?width=750'),
    new Product(7, 12.99, "LightWeight Parka", "Uniqlo", new StyleLevels(5, 1, 5, 1, 2), 'https://image.uniqlo.com/UQ/ST3/ca/imagesgoods/458325/item/cagoods_69_458325.jpg?width=750'),
    new Product(8, 35.99, "Grey Resort Short", "Blue Notes", new StyleLevels(2, 2, 5, 2, 1), 'https://blnts.com/cdn/shop/files/060239662400-04-0_1024x1024@2x.jpg?v=1713210401'),
    new Product(9, 38.99, "Ripped Jean Shorts", "Blue Notes", new StyleLevels(2, 2, 5, 2, 1), 'https://images-ext-1.discordapp.net/external/yQB6-HUvZvmiDTAZqk_JfiCIHXWbUlT2gGaDMNApRds/%3Fv%3D1712328216/https/blnts.com/cdn/shop/files/061539662409-01-0_1024x1024%402x.jpg?format=webp&width=926&height=1388'),
    new Product(10, 49.99, "Tapered Linen Pants", "Muji", new StyleLevels(3, 4, 5, 2, 2), 'https://images-ext-1.discordapp.net/external/EinLcpW-NpgusO5LjANIyfzJb7ztch0aT4eY0qtrte0/%3Fv%3D1707330805/https/muji.ca/cdn/shop/files/4550583762599_01_org_700x.jpg?format=webp&width=1390&height=1390'),
    new Product(11, 39.99, "Water Repellent Wind Pants", "Muji", new StyleLevels(5, 3, 3, 2, 1), 'https://muji.ca/cdn/shop/files/4550583230739_01_org_700x.jpg?v=1701279765'),
    new Product(12, 99.99, "Air Force 1s", "Nike", new StyleLevels(3, 2, 5, 2, 1), 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bb031375-73f7-4521-9a8d-d46b83332188/air-force-1-07-next-nature-shoes-lkVhs6.png'),
    new Product(13, 99.99, "Air Force 1s", "Nike", new StyleLevels(3, 2, 5, 2, 1), 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c3e76e1a-901f-42a4-b42f-e74db52f322d/air-force-1-older-shoes-bm0wQG.png'),
    new Product(14, 99.99, "Air Force 1s", "Nike", new StyleLevels(3, 2, 5, 2, 1), 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/67151472-8bd0-46cd-9f87-c6bda52a89ad/air-force-1-07-shoes-SqKG2H.png'),
    new Product(15, 29.99, "Tropical Print Shirt", "Blue Notes", new StyleLevels(3, 2, 5, 2, 1), 'https://images-ext-1.discordapp.net/external/S6D-ABfjbOtlP742zNefHgpoKz3L73AMxc3OUuSaebA/%3Fv%3D1711663205/https/blnts.com/cdn/shop/files/060239662405-66-0_1080x.jpg?format=webp&width=926&height=1390'),
    new Product(16, 29.99, "Aero Shirt", "Blue Notes", new StyleLevels(3, 2, 5, 2, 1), 'https://blnts.com/cdn/shop/files/630239662404-41-0_1024x1024@2x.jpg?v=1715779948'),
    new Product(17, 29.99, "Linen Collar Shirt", "Uniqlo", new StyleLevels(3, 2, 5, 2, 1), 'https://image.uniqlo.com/UQ/ST3/ca/imagesgoods/467121/item/cagoods_31_467121.jpg?width=750'),
    new Product(18, 29.99, "Linen Blend Pants", "Uniqlo", new StyleLevels(3, 2, 5, 2, 1), 'https://image.uniqlo.com/UQ/ST3/ca/imagesgoods/463857/item/cagoods_30_463857.jpg?width=750'),
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
