import { IProduct } from "../interfaces";
import { numberWithCommas, txtslice } from "../utils/functions";
import Image from "./Image";
import Button from "./ui/Button";
import CircleColor from "./ui/CircleColor";

interface IProps {
  product: IProduct;
  setProductToEdit: (product: IProduct) => void;
  openEditModal: () => void;
  idx: number;
  setProductToEditIdx: (val: number) => void;
}
const ProductCard = ({
  product,
  setProductToEdit,
  openEditModal,
  idx,
  setProductToEditIdx,
}: IProps) => {
  const { title, imageURL, description, price, category, colors } = product;
  const renderProductColors = colors.map((color) => (
    <CircleColor key={color} color={color} />
  ));

  const onEdit = () => {
    openEditModal();
    setProductToEdit(product);
    setProductToEditIdx(idx);
  };

  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md flex flex-col space-y-3 p-2">
      <Image
        imageUrl={imageURL}
        alt="product name"
        className="rounded-md w-full h-52 lg:object-cover"
      />

      <h3 className="text-lg font-semibold">{txtslice(title, 15)}</h3>
      <p className="text-sm text-gray-600 break-words">
        {txtslice(description)}
      </p>

      <div className="flex items-center flex-wrap space-x-1 ">
        {colors.length ? (
          renderProductColors
        ) : (
          <p className="min-h-[20px]">No avaliable color</p>
        )}
      </div>

      <div className="flex items-center justify-between">
        <span className="text-indigo-700">${numberWithCommas(price)}</span>
        <div className="flex items-center font-medium text-xs">
          <span className="mr-1">{category.name}</span>
          <Image
            className="w-10 h-10 rounded-full "
            imageUrl={category.imageURL}
            alt={category.name}
          />
        </div>
      </div>

      <div className="flex items-center justify-between mt-5 space-x-2">
        {/* <button className="bg-indigo-700 flex-1 p-2">EDITE</button> */}
        <Button className="bg-indigo-700" onClick={onEdit}>
          EDITE
        </Button>
        <Button className="bg-red-700">DELETE</Button>
      </div>
    </div>
  );
};

export default ProductCard;
