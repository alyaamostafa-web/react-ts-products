import { IProduct } from '../interfaces';
import { txtslice } from '../utils/functions';
import Image from './Image';
import Button from './ui/Button';

interface IProps {
  product:IProduct
}
const ProductCard = ({product}: IProps) => {
 const  {title,imgURL,description,price,category} = product
  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md flex flex-col p-2">
      <Image imageUrl={imgURL} alt='product name' className='rounded-md'/>

      <h2>{title}</h2>
      <p>
        {txtslice(description)}
      </p>

      <div className="flex items-center space-x-2">
        <span className="block w-5 h-5 bg-indigo-600 rounded-full cursor-pointer" />
        <span className="block w-5 h-5 bg-red-600 rounded-full  cursor-pointer" />
        <span className="block w-5 h-5 bg-green-600 rounded-full  cursor-pointer" />
      </div>

      <div className="flex items-center justify-between">
        <span>{price}</span>
        <Image imageUrl={category.imageUrl}  alt={category.name} className="w-10 h-10 rounded-full object-bottom" />
      </div>

      <div className="flex items-center justify-between mt-5 space-x-2">
        {/* <button className="bg-indigo-700 flex-1 p-2">EDITE</button> */}
        <Button className="bg-indigo-700" onClick={()=>alert("hello")}>EDITE</Button>
        <Button className="bg-red-700">DELETE</Button>
      </div>
    </div>
  );
};

export default ProductCard;
