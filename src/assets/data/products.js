import pants from "../images/pants.webp";
import shirt from "../images/shirts.webp";
import blazer from "../images/blazer.webp";
import shoes from "../images/shoes.webp";
const products = [
    {
        id: "01",
        productName: "Pants 1",
        imgUrl: pants,
        category: "pants",
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
        productName: "Pants 2",
        imgUrl: pants,
        category: "pants",
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
        productName: "Pants 3",
        imgUrl: pants,
        category: "pants",
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
        productName: "Shirt 1",
        imgUrl: shirt,
        category: "shirt",
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
        productName: "Pants 4",
        imgUrl: pants,
        category: "pants",
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
        productName: "Pants 5",
        imgUrl: pants,
        category: "pants",
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
        productName: "Pants 6",
        imgUrl: pants,
        category: "pants",
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
        productName: "Pants 7",
        imgUrl: pants,
        category: "pants",
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
        productName: "Pants 8",
        imgUrl: pants,
        category: "pants",
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
        productName: "Shirt 2",
        imgUrl: shirt,
        category: "shirt",
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
        productName: "Shirt 3",
        imgUrl: shirt,
        category: "shirt",
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
        productName: "Blazer 1",
        imgUrl: blazer,
        category: "blazer",
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
        productName: "Shirt 4",
        imgUrl: shirt,
        category: "shirt",
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
        productName: "Blazer 2",
        imgUrl: blazer,
        category: "blazer",
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
        productName: "Blazer 3",
        imgUrl: blazer,
        category: "blazer",
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
        productName: "Blazer 4",
        imgUrl: blazer,
        category: "blazer",
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
        productName: "Blazer 5",
        imgUrl: blazer,
        category: "blazer",
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
        productName: "Blazer 6",
        imgUrl: blazer,
        category: "blazer",
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
        productName: "Blazer 7",
        imgUrl: blazer,
        category: "blazer",
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
        productName: "Blazer 8",
        imgUrl: blazer,
        category: "blazer",
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
