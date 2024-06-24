const products = [
  {
    id: "1",
    name: "Featured Product 1",
    subtitle: "Subtitle #1",
    image: "/src/images/categorycard.jpg",
    description:
      "Fits perfectly in KALLAX shelving unit and other units with shelves which are at least 38 cm deep. A good size for everything from games and media accessories to clothes and hobby things. Easy to pull out as the box has a handle. If you organise your things and give them a specific place in the drawer, they will be easier to find.",
    brand: "Apple",
    category: "Electronics",
    price: "$940.00",
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },

  {
    id: "2",
    name: "Featured Product 2",
    subtitle: "Subtitle #2",
    image: "/src/images/categorycard2.jpg",
    description:
      "Fits perfectly in whatever NAMED unit and other units with shelves which are at least 38 cm deep. A good size for everything from games and media accessories to clothes and hobby things. Easy to pull out as the box has a handle. If you organise your things and give them a specific place in the drawer, they will be easier to find.",
    brand: "Apple",
    category: "Electronics",
    price: "$190.00",
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },

  {
    id: "3",
    name: "Featured Product 3",
    subtitle: "Subtitle #3",
    image: "/src/images/categorycard3.jpg",
    description:
      "Fits perfectly in KALLAX shelving unit and other units with shelves which are at least 38 cm deep. A good size for everything from games and media accessories to clothes and hobby things. Easy to pull out as the box has a handle. If you organise your things and give them a specific place in the drawer, they will be easier to find.",
    brand: "Apple",
    category: "Electronics",
    price: "$80.00",
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },

  {
    id: "4",
    name: "Featured Product 4",
    subtitle: "Subtitle #4",
    image: "/src/images/categorycard4.jpg",
    description:
      "Fits perfectly in KALLAX shelving unit and other units with shelves which are at least 38 cm deep. A good size for everything from games and media accessories to clothes and hobby things. Easy to pull out as the box has a handle. If you organise your things and give them a specific place in the drawer, they will be easier to find.",
    brand: "Apple",
    category: "Electronics",
    price: "$90.00",
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },

  {
    id: "5",
    name: "Samsung Something",
    subtitle: "Subtitle #5",
    image: "/src/images/categorycard.jpg",
    description:
      "Fits perfectly in KALLAX shelving unit and other units with shelves which are at least 38 cm deep. A good size for everything from games and media accessories to clothes and hobby things. Easy to pull out as the box has a handle. If you organise your things and give them a specific place in the drawer, they will be easier to find.",
    brand: "Apple",
    category: "Electronics",
    price: "$200.00",
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },

  {
    id: "6",
    name: "Sony Name",
    subtitle: "Subtitle #6",
    image: "/src/images/categorycard2.jpg",
    description:
      "Fits perfectly in KALLAX shelving unit and other units with shelves which are at least 38 cm deep. A good size for everything from games and media accessories to clothes and hobby things. Easy to pull out as the box has a handle. If you organise your things and give them a specific place in the drawer, they will be easier to find.",
    brand: "Apple",
    category: "Electronics",
    price: "$190.00",
    countInStock: 20,
    rating: 4.0,
    numReviews: 20,
  },

  {
    id: "7",
    name: "Product #7",
    subtitle: "Subtitle #7",
    image: "/src/images/categorycard2.jpg",
    description:
      "Fits perfectly in KALLAX shelving unit and other units with shelves which are at least 38 cm deep. A good size for everything from games and media accessories to clothes and hobby things. Easy to pull out as the box has a handle. If you organise your things and give them a specific place in the drawer, they will be easier to find.",
    brand: "Apple",
    category: "Electronics",
    price: "$190.00",
    countInStock: 20,
    rating: 4.0,
    numReviews: 20,
  },

  {
    id: "8",
    name: "Product #8",
    subtitle: "Subtitle #8",
    image: "/src/images/categorycard2.jpg",
    description:
      "Fits perfectly in KALLAX shelving unit and other units with shelves which are at least 38 cm deep. A good size for everything from games and media accessories to clothes and hobby things. Easy to pull out as the box has a handle. If you organise your things and give them a specific place in the drawer, they will be easier to find.",
    brand: "Apple",
    category: "Electronics",
    price: "$190.00",
    countInStock: 20,
    rating: 4.0,
    numReviews: 20,
  },

  {
    id: "9",
    name: "Product #9",
    subtitle: "Subtitle #9",
    image: "/src/images/categorycard2.jpg",
    description:
      "Fits perfectly in KALLAX shelving unit and other units with shelves which are at least 38 cm deep. A good size for everything from games and media accessories to clothes and hobby things. Easy to pull out as the box has a handle. If you organise your things and give them a specific place in the drawer, they will be easier to find.",
    brand: "Apple",
    category: "Electronics",
    price: "$190.00",
    countInStock: 20,
    rating: 4.0,
    numReviews: 20,
  },

  {
    id: "10",
    name: "Product #10",
    subtitle: "Subtitle #10",
    image: "/src/images/categorycard2.jpg",
    description:
      "Fits perfectly in KALLAX shelving unit and other units with shelves which are at least 38 cm deep. A good size for everything from games and media accessories to clothes and hobby things. Easy to pull out as the box has a handle. If you organise your things and give them a specific place in the drawer, they will be easier to find.",
    brand: "Apple",
    category: "Electronics",
    price: "$190.00",
    countInStock: 20,
    rating: 4.0,
    numReviews: 20,
  },

  {
    id: "11",
    name: "Featured Product 11",
    subtitle: "Subtitle #11",
    image: "/src/images/categorycard.jpg",
    description:
      "Fits perfectly in whatever NAMED unit and other units with shelves which are at least 38 cm deep. A good size for everything from games and media accessories to clothes and hobby things. Easy to pull out as the box has a handle. If you organise your things and give them a specific place in the drawer, they will be easier to find.",
    brand: "Apple",
    category: "Electronics",
    price: "$190.00",
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },

  {
    id: "12",
    name: "Featured Product 12",
    subtitle: "Subtitle #12",
    image: "/src/images/categorycard3.jpg",
    description:
      "Fits perfectly in KALLAX shelving unit and other units with shelves which are at least 38 cm deep. A good size for everything from games and media accessories to clothes and hobby things. Easy to pull out as the box has a handle. If you organise your things and give them a specific place in the drawer, they will be easier to find.",
    brand: "Apple",
    category: "Electronics",
    price: "$80.00",
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
];

export default products;
