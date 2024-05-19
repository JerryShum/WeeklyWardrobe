import { useEffect, useState } from "react";
import ShopGroup from "../components/recommended/ShopGroup";

function Recommendations() {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchTopProducts = async () => {
      let url = `http://jeremymark.ca:3000/get_top_products?username=Jeremy&threshold=50`;
      const response = await fetch(url);
      const data = await response.json();
      let x = data.data;
      return x;
    };

    const updateBrands = async (x) => {
      let brands = []; // [ { name: "Nike", products: [ { name: "Shoe", image: "url" }, { name: "Shirt", image: "url" } ] } ]
      for (let i = 0; i < x.length; i++) {
        let product = x[i].product;
        let brand = brands.find((b) => b.name === product.brandName);
        if (!brand) {
          brands.push({ name: product.brandName, products: [product], percentMatch: x[i].matchPercent});
        } else {
          // Check if product is already in the brand's products array
          if (!brand.products.find((p) => p.name === product.name)) {
            brand.products.push(product);
          }
        }
      }
      return brands;
    };

    const fetchAll = async () => {
      setProducts([]);
      setBrands([]);
      let products = await fetchTopProducts();
      let brands = await updateBrands(products);
      for (let brand of brands) {
        console.log('Brand: ' + brand.name);
        console.log(brand.products);
      }
      setProducts(products);
      setBrands(brands);
    };

    fetchAll();
  }, []);

  return (
    <div className="flex flex-col overflow-hidden h-full w-full">
      <h1
        className="flex items-center justify-center p-2 mb-2 font-bold text-5xl
      border-b-2 border-dashed border-black"
      >
        Shop
      </h1>

      <div className="mt-auto mb-auto h-auto overflow-scroll p-5 flex flex-col gap-12">
        {...brands.map((brand) => {
          return <ShopGroup key={brand.name} brandName={brand.name} products={brand.products} percentMatch={brand.percentMatch} />;
        })}
      </div>
    </div>
  );
}

export default Recommendations;
