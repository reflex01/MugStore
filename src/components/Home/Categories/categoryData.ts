import products from "@/contents/products.json";

// Automatically generate categories from products
const generateCategoryData = () => {
  const categoryMap = new Map();
  
  products.data.forEach((product: any) => {
    const category = product.category;
    if (!categoryMap.has(category)) {
      categoryMap.set(category, true);
    }
  });

  return Array.from(categoryMap.keys()).map((category, index) => ({
    title: category,
    id: index + 1,
    img: `/images/categories/categories-${String(index + 1).padStart(2, '0')}.png`,
  }));
};

const data = generateCategoryData();

export default data;
