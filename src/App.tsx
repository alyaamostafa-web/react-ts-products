import { ChangeEvent, FormEvent, useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal ";
import { categories, colors, formInputList, productList } from "./data";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import { IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMessage from "./components/ErrorMessage";
import CircleColor from "./components/ui/CircleColor";
import { v4 as uuid } from "uuid";
import Select from "./components/ui/Select";
import { TProductNames } from "./types";

const App = () => {
  const defaultProductObj = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };
  //State
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [productToEdit, setProductToEdit] =
    useState<IProduct>(defaultProductObj);
  const [productToEditIdx, setProductToEditIdx] = useState<number>(0);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: "",
  });
  const [tempColors, setTempColors] = useState<string[]>([]);
  const [selectCategory, setSelectCategory] = useState(categories[0]);
  //Handler

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  const closeEditModal = () => {
    setIsOpenEditModal(false);
  };

  const openEditModal = () => {
    setIsOpenEditModal(true);
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setProduct({ ...product, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };
  const onChangeEditHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setProductToEdit({ ...productToEdit, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const onCancel = () => {
    setProduct(defaultProductObj);
    setTempColors([]);
    closeModal();
  };
  const onCancelEditModal = () => {
    closeEditModal();
    setTempColors([]);
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const { title, description, imageURL, price } = product;
    const errors = productValidation({
      title,
      description,
      imageURL,
      price,
      colors: tempColors,
    });

    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");

    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }
    setProducts((prev) => [
      { ...product, id: uuid(), colors: tempColors, category: selectCategory },
      ...prev,
    ]);
    // setProductsList([...productList,{ ...product, id: uuid(), colors: tempColors,category:selectCategory }])

    setProduct(defaultProductObj);
    setTempColors([]);
    closeModal();
  };
  const submitEditHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const { title, description, imageURL, price } = productToEdit;
    const errors = productValidation({
      title,
      description,
      imageURL,
      price,
      colors: tempColors.concat(productToEdit.colors),
    });

    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");

    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }

    const updatedProducts = [...products];
    updatedProducts[productToEditIdx] = {...productToEdit,colors:tempColors.concat(productToEdit.colors)}

console.log(products);


    setProductToEdit(defaultProductObj);
    setTempColors([]);
    closeEditModal();
  };

  //Render
  const renderProductList = products.map((product,idx) => (
    <ProductCard
      idx ={idx}
      setProductToEditIdx={setProductToEditIdx}
      key={product.id}
      product={product}
      setProductToEdit={setProductToEdit}
      openEditModal={openEditModal}
    />
  ));

  const renderFormInputList = formInputList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label
        htmlFor={input.id}
        className="mb-[2px] text-sm font-medium text-gray-700"
      >
        {input.label}
      </label>
      <Input
        type={input.type}
        id={input.id}
        name={input.name}
        value={product[input.name]}
        onChange={onChangeHandler}
      />
      <ErrorMessage msg={errors[input.name]} />
    </div>
  ));

  const renderProductColors = colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
        if (tempColors.includes(color)) {
          setTempColors((prev) => prev.filter((item) => item !== color));
          return;
        }
        if (productToEdit.colors?.includes(color)) {
          setTempColors(prev => prev.filter(item => item !== color))
          return;
        }
        setTempColors((prev) => [...prev, color]);
      }}
    />
  ));

  const renderProductEditWithErrorMsg = (
    id: string,
    label: string,
    name: TProductNames
  ) => {
    return (
      <div className="flex flex-col">
        <label
          htmlFor={id}
          className="mb-[2px] text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        <Input
          type="text"
          id={id}
          name={name}
          value={productToEdit[name]}
          onChange={onChangeEditHandler}
        />
        <ErrorMessage msg={errors[name]} />
      </div>
    );
  };

  return (
    <main className="container">
      <div className="mx-auto  w-fit">
      <Button
        className="mt-5 bg-indigo-700  hover:bg-indigo-800 "
        width="w-fit"
        onClick={openModal}
      >
        Build a product
      </Button>
      </div>

      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductList}
      </div>

      {/*Add Product Modal */}
      <Modal isOpen={isOpen} closeModal={closeModal} title="ADD A NEW PRODUCT">
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderFormInputList}
          <Select selected={selectCategory} setSelected={setSelectCategory} />
          <div className="flex items-center flex-wrap space-x-1">
            {renderProductColors}
          </div>
          <ErrorMessage msg={errors["colors"]} />
          <div className="flex items-center flex-wrap space-x-1 ">
            {tempColors.map((color) => (
              <span
                key={color}
                style={{ backgroundColor: color }}
                className="text-white p-1 text-xs mr-1 mb-1 rounded-md"
              >
                {color}
              </span>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <Button className=" bg-indigo-600 hover:bg-indigo-800">
              Submit
            </Button>
            <Button
              className=" bg-gray-400 hover:bg-gray-500"
              onClick={onCancel}
              type="button"
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>

      {/*Edit Product Modal */}
      <Modal
        isOpen={isOpenEditModal}
        closeModal={closeEditModal}
        title="ADD THIS PRODUCT"
      >
        <form className="space-y-3" onSubmit={submitEditHandler}>
          {renderProductEditWithErrorMsg("title", "Product Title", "title")}
          {renderProductEditWithErrorMsg(
            "description",
            "Product Description",
            "description"
          )}
          {renderProductEditWithErrorMsg(
            "imageURL",
            "Product Image URL",
            "imageURL"
          )}
          {renderProductEditWithErrorMsg("price", "Product Price", "price")}

           <Select selected={productToEdit.category} setSelected={(value)=>setProductToEdit({...productToEdit,category:value})}/>
          <div className="flex items-center flex-wrap space-x-1">
            {renderProductColors}
          </div>
          <ErrorMessage msg={errors["colors"]}/>
          <div className="flex items-center flex-wrap space-x-1 ">
            {tempColors.concat(productToEdit.colors).map((color) => (
              <span
                key={color}
                style={{ backgroundColor: color }}
                className="text-white p-1 text-xs mr-1 mb-1 rounded-md"
              >
                {color}
              </span>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <Button className=" bg-indigo-600 hover:bg-indigo-800">
              Submit
            </Button>
            <Button
              className=" bg-[#f5f5fa] hover:bg-gray-300 text-black"
              onClick={onCancelEditModal}
              type="button"
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </main>
  );
};
export default App;
