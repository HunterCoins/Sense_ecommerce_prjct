import jeans from "../images/jeans.png";
import longsleeve from "../images/longsleeve.png";
import hoodie from "../images/hoodie.png";
import shoes from "../images/shoes.png";
const products = [
    {
        id: "01",
        productName: "Jeans 1",
        imgUrl: jeans,
        category: "jeans",
        price: 193,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.7,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.5,
        popularity: 3,
    },

    {
        id: "02",
        productName: "Jeans 2",
        imgUrl: jeans,
        category: "jeans",
        price: 253,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.8,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
                rating: 4.8,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.7,
        popularity: 6,
    },

    {
        id: "03",
        productName: "Jeans 3",
        imgUrl: jeans,
        category: "jeans",
        price: 173,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.6,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
                rating: 4.9,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.7,
        popularity: 9,
    },
    {
        id: "26",
        productName: "Longsleeve 1",
        imgUrl: longsleeve,
        category: "longsleeve",
        price: 253,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.8,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
                rating: 4.8,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.7,
        popularity: 10,
    },
    {
        id: "04",
        productName: "Jeans 4",
        imgUrl: jeans,
        category: "jeans",
        price: 163,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.6,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
                rating: 4.9,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.7,
        popularity: 2,
    },

    {
        id: "05",
        productName: "Jeans 5",
        imgUrl: jeans,
        category: "jeans",
        price: 163,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.6,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
                rating: 4.9,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.7,
        popularity: 1,
    },

    {
        id: "06",
        productName: "Jeans 6",
        imgUrl: jeans,
        category: "jeans",
        price: 163,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.6,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
                rating: 4.9,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.7,
        popularity: 6,
    },
    {
        id: "07",
        productName: "Jeans 7",
        imgUrl: jeans,
        category: "jeans",
        price: 99,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.6,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
                rating: 4.9,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.7,
        popularity: 1,
    },

    {
        id: "27",
        productName: "Jeans 8",
        imgUrl: jeans,
        category: "jeans",
        price: 173,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.6,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
                rating: 4.9,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.7,
        popularity: 10,
    },

    {
        id: "08",
        productName: "Longsleeve 2",
        imgUrl: longsleeve,
        category: "longsleeve",
        price: 89,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.6,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
                rating: 4.9,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.7,
        popularity: 8,
    },

    {
        id: "09",
        productName: "Longsleeve 3",
        imgUrl: longsleeve,
        category: "longsleeve",
        price: 112,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.6,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
                rating: 4.9,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.7,
        popularity: 2,
    },

    {
        id: "10",
        productName: "Hoodie 1",
        imgUrl: hoodie,
        category: "hoodie",
        price: 799,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.8,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
                rating: 4.9,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.8,
        popularity: 5,
    },
    {
        id: "25",
        productName: "Longsleeve 4",
        imgUrl: longsleeve,
        category: "longsleeve",
        price: 99,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.6,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
                rating: 4.9,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.7,
        popularity: 8,
    },
    {
        id: "11",
        productName: "Hoodie 2",
        imgUrl: hoodie,
        category: "hoodie",
        price: 799,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.8,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
                rating: 4.9,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.8,
        popularity: 4,
    },

    {
        id: "12",
        productName: "Hoodie 3",
        imgUrl: hoodie,
        category: "hoodie",
        price: 599,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.8,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
                rating: 4.9,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.8,
        popularity: 9,
    },

    {
        id: "13",
        productName: "Hoodie 4",
        imgUrl: hoodie,
        category: "hoodie",
        price: 799,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.8,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
                rating: 4.9,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.8,
        popularity: 3,
    },

    {
        id: "14",
        productName: "Hoodie 5",
        imgUrl: hoodie,
        category: "hoodie",
        price: 899,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.8,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
                rating: 4.9,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.8,
        popularity: 7,
    },

    {
        id: "15",
        productName: "Hoodie 6",
        imgUrl: hoodie,
        category: "hoodie",
        price: 699,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.8,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
                rating: 4.9,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.8,
        popularity: 1,
    },

    {
        id: "16",
        productName: "Hoodie 7",
        imgUrl: hoodie,
        category: "hoodie",
        price: 299,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.8,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
                rating: 4.9,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.8,
        popularity: 10,
    },

    {
        id: "17",
        productName: "Hoodie 8",
        imgUrl: hoodie,
        category: "hoodie",
        price: 299,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.8,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
                rating: 4.9,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.8,
        popularity: 4,
    },

    {
        id: "18",
        productName: "Shoes 1",
        imgUrl: shoes,
        category: "shoes",
        price: 299,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.8,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
                rating: 4.9,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.8,
        popularity: 7,
    },

    {
        id: "19",
        productName: "Shoes 2",
        imgUrl: shoes,
        category: "shoes",
        price: 399,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.8,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
                rating: 4.9,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.8,
        popularity: 9,
    },

    {
        id: "20",
        productName: "Shoes 3",
        imgUrl: shoes,
        category: "shoes",
        price: 199,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.8,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
                rating: 4.9,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.8,
        popularity: 2,
    },

    {
        id: "22",
        productName: "Shoes 4",
        imgUrl: shoes,
        category: "shoes",
        price: 199,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.8,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
                rating: 4.9,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.8,
        popularity: 10,
    },
];

export default products;
