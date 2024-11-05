import { IProduct } from '../interfaces';
import { txtslice } from '../utils/functions';
import Image from './Image';
import Button from './ui/Button';
import CircleColor from './ui/CircleColor';

interface IProps {
  product:IProduct 
}
const ProductCard = ({product}: IProps) => {

 const  {title,imageURL,description,price,category,colors} = product
 const renderProductColors = colors.map((color) => (
  <CircleColor
    key={color}
    color={color}

  />
));

  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md flex flex-col p-2">
      <Image imageUrl={imageURL} alt='product name' className='rounded-md'/>

      <h2>{title}</h2>
      <p>
        {txtslice(description)}
      </p>
      <div className="flex items-center flex-wrap space-x-1">
            {renderProductColors}
          </div>

      <div className="flex items-center justify-between">
        <span>{price}</span>
        <Image imageUrl={category.imageURL}  alt={category.name} className="w-10 h-10 rounded-full object-bottom" />
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
