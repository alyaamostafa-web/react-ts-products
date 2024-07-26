export interface IProduct {
  id?: string | undefined;
  title: string;
  description: string;
  imgURL: string;
  price: string;
  colors: string[];
  category: {
    name: string;
    imageUrl: string;
  };
}

export interface IFormInput {
  id: string;
  name: string;
  label: string;
  type: string;
}
