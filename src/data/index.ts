import { v4 as uuid } from 'uuid';
import { IFormInput, IProduct } from "../interfaces";

export const productList: IProduct[] = [
    {
        id : uuid(),
        title: "Product 1",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim vel nunc consectetur consectetur. Sed vel enim vel nunc consectetur consectetur. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim vel nunc consectetur consectetur. Sed vel enim vel nunc consectetur consectetur. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim vel nunc consectetur consectetur. Sed vel enim vel nunc consectetur consectetur.",
        imageURL: "/src/assets/315651559_664154375170355_9186988138166142169_n.jpg",
        price: "19.99",
        colors: ["red", "blue", "green"],
        category: {
            name: "Category 1",
            imageUrl: "/src/assets/315651559_664154375170355_9186988138166142169_n.jpg"
        }

    },
    {
        id : uuid(),
        title: "Product 2",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim vel nunc consectetur consectetur. Sed vel enim vel nunc consectetur consectetur. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim vel nunc consectetur consectetur. Sed vel enim vel nunc consectetur consectetur. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim vel nunc consectetur consectetur. Sed vel enim vel nunc consectetur consectetur.",
        imageURL: "/src/assets/315677823_1362557837481932_6593174319359924998_n.jpg",
        price: "29.99",
        colors: ["yellow", "purple", "pink"],
        category: {
            name: "Category 2",
            imageUrl: "https://via.placeholder.com/100"
        }
    },
    {
        id : uuid(),
        title: "Product 3",
        description: "Product 3lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim vel nunc consectetur consectetur. Sed vel enim vel nun",
        imageURL: "/src/assets/315683025_171435502151238_5636215533578007924_n.jpg",
        price: "39.99",
        colors: ["orange", "brown", "black"],
        category: {
            name: "Category 3",
            imageUrl: "https://via.placeholder.com/100"
        }
    },
    {
        id : uuid(),
        title: "Product 4",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim vel nunc consectetur consectetur. Sed vel enim vel nunc consectetur consectetur. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim vel nunc consectetur consectetur. Sed vel enim vel nunc consectetur consectetur. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim vel nunc consectetur consectetur. Sed vel enim vel nunc consectetur consectetur.",
        imageURL: "/src/assets/315933407_520263473287747_8621597629894180495_n.jpg",
        price: "49.99",
        colors: ["purple", "pink", "gray"],
        category: {
            name: "Category 4",
            imageUrl: "https://via.placeholder.com/100"
        }
    },
    {
        id : uuid(),
        title: "Product 5",
        description: "Product 5 lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim vel nunc consectetur consectetur. Sed vel enim vel nun",
        imageURL: "/src/assets/319924333_1325160244886015_4841041216644686203_n.jpg",
        price: "59.99",
        colors: ["green", "blue", "yellow"],
        category: {
            name: "Category 5",
            imageUrl: "https://via.placeholder.com/100"
        }
    },
    {
        id : uuid(),
        title: "Product 6",
        description: "Product 6 lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim vel nunc consectetur consectetur. Sed vel enim vel nun",
        imageURL: "/src/assets/315933407_520263473287747_8621597629894180495_n.jpg",
        price: "69.99",
        colors: ["red", "pink", "gray"],
        category: {
            name: "Category 6",
            imageUrl: "https://via.placeholder.com/100"
        }
    }


]

export const formInputList:IFormInput[] = [
    {
        id:"title",
        name:"title",
        label:"Product Title",
        type:"text",
    },
    {
        id:"description",
        name:"description",
        label:"Product Description",
        type:"text",
    },
    {
        id:"image",
        name:"imageURL",
        label:"Product Image URL",
        type:"text",
    },
    {
        id:"price",
        name:"price",
        label:"Product Price",
        type:"text",
    }

]