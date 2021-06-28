import bcrypt from "bcryptjs";
const data = {
    users: [
        {
       name:'Rajnath',
       email:'rmazeal1@gmail.com',
       password: bcrypt.hashSync('1234',8),
       isAdmin: true,
        },

        {
            name:'Priya',
            email:'priya@gmail.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin: false,
             },
    ],
    products:[
        {
            
            name:"Nike Slim shirt",
            category:"Shirt",
            image:"/images/p1.jpg",
            price:120,
            countInStock:10,
            brand:"Nike",
            rating:4.5,
            numReviews: 10,
            description:"High Quality Product",
        },
        {
            
            name:"Adidas Slim shirt",
            category:"Shirt",
            image:"/images/p2.jpg",
            price:100,
            countInStock:10,
            brand:"Adidas",
            rating:4.0,
            numReviews: 10,
            description:"High Quality Product",
        },

        {
            
            name:"Lacoste Free shirt",
            category:"Shirt",
            image:"/images/p3.jpg",
            price:220,
            countInStock:10,
            brand:"Lacoste",
            rating:4.8,
            numReviews: 17,
            description:"High Quality Product",
        },

        {
            
            name:"Nike Slim Pant",
            category:"Pants",
            image:"/images/p4.jpg",
            price:720,
            countInStock:10,
            brand:"Nike",
            rating:4.5,
            numReviews: 18,
            description:"High Quality Product",
        },

        {
            
            name:"Puma Slim shirt",
            category:"Pants",
            image:"/images/p5.jpg",
            price:120,
            countInStock:10,
            brand:"Puma",
            rating:4.5,
            numReviews: 7,
            description:"High Quality Product",
        },

        {
            
            name:"Adidas fit Pants",
            category:"Shirt",
            image:"/images/p6.jpg",
            price:1200,
            countInStock:10,
            brand:"Adidas",
            rating:4.5,
            numReviews: 10,
            description:"High Quality Product",
        },

    ],
};

export default data;