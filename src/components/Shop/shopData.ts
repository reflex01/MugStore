import { Product } from "@/types/product";

const shopData: Product[] = [
  {
    id: 1,
    name: "cambridge-mug",
    title: "Cambridge Mug",
    price: 1.99,
    discountedPrice: 1.66,
    reviews: 4.8,
    averageRating: 4.8,
    totalReviews: 127,
    category: "mugs",
    description: "Straight-sided office mug with generous print area. Capacity 330 ml; height 93 mm; diameter 80 mm; dishwasher safe; approx. unit weight 295 g; 36 units per carton; typical print area 185 × 70 mm.",
    customerReviews: [
      { reviewer: "Sarah M.", rating: 5, comment: "Perfect for my morning coffee! The midnight blue color is gorgeous and it holds the perfect amount. Very sturdy construction." },
      { reviewer: "Michael T.", rating: 5, comment: "Excellent quality mug. The print area is generous and the straight sides make it perfect for our company logo. Fast shipping too!" },
      { reviewer: "Emma K.", rating: 4, comment: "Really nice mug, good weight and feel. Only slight complaint is it gets quite hot to hold with very hot beverages, but that's minor." },
      { reviewer: "David L.", rating: 5, comment: "Great value for money. Dishwasher safe and the color hasn't faded after months of daily use. Highly recommend!" }
    ],
    imgs: {
      thumbnails: ["https://www.mugstore.co.uk/media/catalog/product/cache/1/image/305x305/9b8548dfcc6170cf14ba05473309d653/b/f/bff9b66227ca7b813a56389057645728a1c34c01_Cambridge_Midnight_Blue_midnight_blue.jpg"],
      previews: ["https://www.mugstore.co.uk/media/catalog/product/cache/1/image/305x305/9b8548dfcc6170cf14ba05473309d653/b/f/bff9b66227ca7b813a56389057645728a1c34c01_Cambridge_Midnight_Blue_midnight_blue.jpg"]
    }
  },
  {
    id: 2,
    name: "bell-mug",
    title: "Bell Mug",
    price: 1.64,
    discountedPrice: 1.37,
    reviews: 4.7,
    averageRating: 4.7,
    totalReviews: 89,
    category: "mugs",
    description: "Compact, bell-shaped ceramic mug suited to daily office use. Capacity 280 ml; height 93 mm; diameter 80 mm; dishwasher safe; approx. unit weight 240 g; 36 units per carton; print area about 185 × 40 mm.",
    customerReviews: [
      { reviewer: "Lisa R.", rating: 5, comment: "Love the compact size! Fits perfectly in my hands and the bell shape is so unique. Perfect for tea breaks at the office." },
      { reviewer: "James W.", rating: 4, comment: "Good quality mug, nice weight. The white finish is clean and professional looking. Slightly smaller than I expected but still great." },
      { reviewer: "Maria S.", rating: 5, comment: "Excellent for daily use. The shape is comfortable to hold and it cleans easily. Great price for the quality you get." }
    ],
    imgs: {
      thumbnails: ["https://www.mugstore.co.uk/media/catalog/product/cache/1/image/305x305/9b8548dfcc6170cf14ba05473309d653/0/f/0f43c9a877d5ea2f1d85af9a33f71bc8ce9943e0_Bell_White_white.jpg"],
      previews: ["https://www.mugstore.co.uk/media/catalog/product/cache/1/image/305x305/9b8548dfcc6170cf14ba05473309d653/0/f/0f43c9a877d5ea2f1d85af9a33f71bc8ce9943e0_Bell_White_white.jpg"]
    }
  },
  {
    id: 3,
    name: "corporate-mug",
    title: "Corporate Mug",
    price: 1.91,
    discountedPrice: 1.59,
    reviews: 4.6,
    averageRating: 4.6,
    totalReviews: 156,
    category: "mugs",
    description: "Tall profile with angular handle—great for bold branding. Capacity 330 ml; height 116 mm; diameter 70 mm; dishwasher safe; approx. unit weight 307 g; 36 per carton; print area about 185 × 55 mm.",
    customerReviews: [
      { reviewer: "Robert H.", rating: 5, comment: "Perfect for corporate branding! The angular handle gives it a modern look and the print area is excellent for logos. Very professional." },
      { reviewer: "Jennifer L.", rating: 4, comment: "Great mug for the office. The tall profile makes it feel substantial and the black color looks sleek. Handle is comfortable to grip." },
      { reviewer: "Tom B.", rating: 5, comment: "Ordered these for our company and everyone loves them. High quality ceramic and the branding turned out perfectly. Will order again!" }
    ],
    imgs: {
      thumbnails: ["https://www.mugstore.co.uk/media/catalog/product/cache/1/image/305x305/9b8548dfcc6170cf14ba05473309d653/2/f/2fe7507b8530e128119d53112ad06300ac28f1dc_Corporate_Black_black.jpg"],
      previews: ["https://www.mugstore.co.uk/media/catalog/product/cache/1/image/305x305/9b8548dfcc6170cf14ba05473309d653/2/f/2fe7507b8530e128119d53112ad06300ac28f1dc_Corporate_Black_black.jpg"]
    }
  },
  {
    id: 4,
    name: "atlantic-mug",
    title: "Atlantic Mug",
    price: 1.99,
    discountedPrice: 1.66,
    reviews: 4.5,
    averageRating: 4.5,
    totalReviews: 203,
    category: "mugs",
    description: "Earthenware mug with large print area and everyday durability. Capacity 370 ml; height 93 mm; diameter 81 mm; dishwasher safe; approx. unit weight 275 g; 36 per carton; print area about 185 × 70 mm.",
    customerReviews: [
      { reviewer: "Nancy P.", rating: 5, comment: "Love the large capacity! Perfect for my morning coffee routine. The earthenware construction feels durable and the white finish is beautiful." },
      { reviewer: "Chris D.", rating: 4, comment: "Good everyday mug. The large print area is great and it's very durable. Slightly heavier than expected but that adds to the quality feel." },
      { reviewer: "Kate M.", rating: 4, comment: "Nice mug with good capacity. The earthenware material keeps drinks warm longer. Great for both hot and cold beverages." }
    ],
    imgs: {
      thumbnails: ["https://www.mugstore.co.uk/media/catalog/product/cache/1/image/305x305/9b8548dfcc6170cf14ba05473309d653/e/5/e5f4e7d6967c6fe5965d5a1436227422159a798e_Atlantic_White_white.jpg"],
      previews: ["https://www.mugstore.co.uk/media/catalog/product/cache/1/image/305x305/9b8548dfcc6170cf14ba05473309d653/e/5/e5f4e7d6967c6fe5965d5a1436227422159a798e_Atlantic_White_white.jpg"]
    }
  },
  {
    id: 5,
    name: "sparta-mug",
    title: "Sparta Mug",
    price: 1.99,
    discountedPrice: 1.66,
    reviews: 4.4,
    averageRating: 4.4,
    totalReviews: 78,
    category: "mugs",
    description: "Value staple with classic shape and strong handle. Capacity 300 ml; height 93 mm; diameter 80 mm; dishwasher safe; approx. unit weight 295 g; 36 per carton; print area around 185 × 70 mm.",
    customerReviews: [
      { reviewer: "Paul R.", rating: 5, comment: "Classic mug design that never goes out of style. The reflex blue color is vibrant and the handle is very comfortable. Great value!" },
      { reviewer: "Sandra J.", rating: 4, comment: "Solid, dependable mug. Good weight and the classic shape feels familiar and comfortable. Color is exactly as pictured." },
      { reviewer: "Mike K.", rating: 4, comment: "Good basic mug for everyday use. The handle is strong and well-attached. Great for the price point." }
    ],
    imgs: {
      thumbnails: ["https://www.mugstore.co.uk/media/catalog/product/cache/1/image/305x305/9b8548dfcc6170cf14ba05473309d653/0/c/0c1f4bdedca113d125f2952c71ac7f5fd18c50df_Sparta_Reflex_Blue_reflex_blue.jpg"],
      previews: ["https://www.mugstore.co.uk/media/catalog/product/cache/1/image/305x305/9b8548dfcc6170cf14ba05473309d653/0/c/0c1f4bdedca113d125f2952c71ac7f5fd18c50df_Sparta_Reflex_Blue_reflex_blue.jpg"]
    }
  },
  {
    id: 6,
    name: "can-mug",
    title: "Can Mug",
    price: 1.81,
    discountedPrice: 1.51,
    reviews: 4.3,
    averageRating: 4.3,
    totalReviews: 94,
    category: "mugs",
    description: "Simple, straight-walled mug offering a large branding canvas. Capacity 350 ml; height 105 mm; diameter 80 mm; dishwasher safe; approx. unit weight 295 g; 36 per carton; print area about 185 × 70 mm.",
    customerReviews: [
      { reviewer: "Angela T.", rating: 4, comment: "Simple and functional design. The straight walls make it easy to clean and the large capacity is perfect for long coffee sessions." },
      { reviewer: "Steve W.", rating: 5, comment: "Great for custom printing! The large flat surface area is perfect for designs. Good quality ceramic and very affordable." },
      { reviewer: "Helen C.", rating: 4, comment: "Nice basic mug. Good size and weight. The simple design makes it versatile for any kitchen or office setting." }
    ],
    imgs: {
      thumbnails: ["https://www.mugstore.co.uk/media/catalog/product/cache/1/image/305x305/9b8548dfcc6170cf14ba05473309d653/4/8/4886b1b7367a757ace3b3ce1529faa78fee13e15_Can_White_white.jpg"],
      previews: ["https://www.mugstore.co.uk/media/catalog/product/cache/1/image/305x305/9b8548dfcc6170cf14ba05473309d653/4/8/4886b1b7367a757ace3b3ce1529faa78fee13e15_Can_White_white.jpg"]
    }
  },
  {
    id: 7,
    name: "balmoral-bone-china-mug",
    title: "Balmoral Bone China Mug",
    price: 2.95,
    discountedPrice: 2.46,
    reviews: 4.9,
    averageRating: 4.9,
    totalReviews: 145,
    category: "mugs",
    description: "Fine bone china—lightweight with bright white finish. Capacity 330 ml; height 85 mm; diameter 77 mm; dishwasher safe; approx. unit weight 176 g; 36 per carton; print area roughly 180 × 70 mm.",
    customerReviews: [
      { reviewer: "Caroline F.", rating: 5, comment: "Absolutely beautiful bone china mug! So lightweight yet feels premium. The bright white finish is elegant and perfect for special occasions." },
      { reviewer: "Richard M.", rating: 5, comment: "Exceptional quality! The bone china material is noticeably different from regular ceramic. Definitely worth the extra cost for the elegance." },
      { reviewer: "Julia B.", rating: 5, comment: "Stunning mug that makes every cup of tea feel special. The craftsmanship is excellent and it's surprisingly dishwasher safe for bone china." }
    ],
    imgs: {
      thumbnails: ["https://www.mugstore.co.uk/media/catalog/product/cache/1/image/305x305/9b8548dfcc6170cf14ba05473309d653/f/4/f45d5d8c29b9f547772d2adb56ebadac0ff98ac1_Balmoral_Bone_China_Mug_white.jpg"],
      previews: ["https://www.mugstore.co.uk/media/catalog/product/cache/1/image/305x305/9b8548dfcc6170cf14ba05473309d653/f/4/f45d5d8c29b9f547772d2adb56ebadac0ff98ac1_Balmoral_Bone_China_Mug_white.jpg"]
    }
  },
  {
    id: 8,
    name: "ash-bone-china-mug",
    title: "Ash Bone China Mug",
    price: 3.40,
    discountedPrice: 2.83,
    reviews: 4.8,
    averageRating: 4.8,
    totalReviews: 112,
    category: "mugs",
    description: "Classic bone china shape—tough yet refined. Capacity 390 ml; height 89 mm; diameter 85 mm; dishwasher safe; approx. unit weight 218 g; 48 per carton; print area about 220 × 80 mm.",
    customerReviews: [
      { reviewer: "Margaret W.", rating: 5, comment: "The most refined mug I own! Classic bone china with excellent capacity. The larger print area is perfect for detailed designs." },
      { reviewer: "Alexander P.", rating: 5, comment: "Top-tier quality bone china. The classic shape is timeless and the larger capacity makes it practical for daily use. Worth every penny!" },
      { reviewer: "Victoria S.", rating: 4, comment: "Beautiful mug with excellent craftsmanship. Slightly more expensive but the quality difference is noticeable. Very satisfied with the purchase." }
    ],
    imgs: {
      thumbnails: ["https://www.mugstore.co.uk/media/catalog/product/cache/1/image/305x305/9b8548dfcc6170cf14ba05473309d653/9/3/93a61eb01b702e6cccc7b394b2134566d8b0bebe_Ash_Bone_China_Mug_white.jpg"],
      previews: ["https://www.mugstore.co.uk/media/catalog/product/cache/1/image/305x305/9b8548dfcc6170cf14ba05473309d653/9/3/93a61eb01b702e6cccc7b394b2134566d8b0bebe_Ash_Bone_China_Mug_white.jpg"]
    }
  },
  {
    id: 9,
    name: "marrow-mug",
    title: "Marrow Mug",
    price: 2.11,
    discountedPrice: 1.76,
    reviews: 4.6,
    averageRating: 4.6,
    totalReviews: 167,
    category: "mugs",
    description: "Best-selling tall mug with curved profile and large capacity. Capacity 400 ml; height 107 mm; diameter 85 mm; dishwasher safe; approx. unit weight 293 g; 36 per carton; print area around 185 × 40 mm.",
    customerReviews: [
      { reviewer: "Oliver G.", rating: 5, comment: "My favorite mug! The curved profile feels perfect in your hands and the large capacity means fewer refills. The red color is striking." },
      { reviewer: "Sophie L.", rating: 4, comment: "Great tall mug with excellent capacity. The curved shape is comfortable to hold and it looks stylish on any desk or kitchen counter." },
      { reviewer: "Daniel K.", rating: 5, comment: "Best-selling for a reason! Perfect size, comfortable grip, and the duo red color is exactly as shown. Highly recommend this one." }
    ],
    imgs: {
      thumbnails: ["https://www.mugstore.co.uk/media/catalog/product/cache/1/image/305x305/9b8548dfcc6170cf14ba05473309d653/6/8/681be3bfc0fa203d7989314d4cd83032d585d39c_Marrow_Duo_Red_red_duo.jpg"],
      previews: ["https://www.mugstore.co.uk/media/catalog/product/cache/1/image/305x305/9b8548dfcc6170cf14ba05473309d653/6/8/681be3bfc0fa203d7989314d4cd83032d585d39c_Marrow_Duo_Red_red_duo.jpg"]
    }
  }
];

export default shopData;