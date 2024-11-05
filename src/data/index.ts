import { v4 as uuid } from 'uuid';
import { ICategory, IFormInput, IProduct } from "../interfaces";

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
            imageURL: "/src/assets/315651559_664154375170355_9186988138166142169_n.jpg"
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
            imageURL: "/src/assets/315677823_1362557837481932_6593174319359924998_n.jpg"
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
            imageURL: "/src/assets/315683025_171435502151238_5636215533578007924_n.jpg"
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
            imageURL: "https://via.placeholder.com/100"
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
            imageURL: "https://via.placeholder.com/100"
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
            imageURL: "https://via.placeholder.com/100"
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

export const colors: string[] = [
    "#a855f7",
    "#2563eb",
    "#84D2C5",
    "#13005A",
    "#A31ACB",
    "#FF6E31",
    "#3C2A21",
    "#6C4AB6",
    "#CB1C8D",
    "#000000",
    "#645CBB",
  ];


  export const categories: ICategory[] = [
    {
      id: uuid(),
      name: "Nike",
      imageURL:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: uuid(),
      name: "T-Shirt",
      imageURL:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    },
    {
      id: uuid(),
      name: "Clothes",
      imageURL:
        "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
    {
      id: uuid(),
      name: "PC Desktop",
      imageURL:
        "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1142&q=80",
    },
    {
      id: uuid(),
      name: "Furniture",
      imageURL:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: uuid(),
      name: "Cars",
      imageURL:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: uuid(),
      name: "Camera",
      imageURL:
        "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];
  