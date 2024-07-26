import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal ";
import { formInputList, productList } from "./data";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";

const App = () => {
  //State
  const [isOpen, setIsOpen] = useState(false);

  //Handler

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  //Render
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  const renderFormInputList = formInputList.map((input) => (
    <div className="flex flex-col">
      <label
        htmlFor={input.id}
        className="mb-[2px] text-sm font-medium text-gray-700"
      >
        {input.label}
      </label>
      <Input type={input.type} id={input.id} />
    </div>
  ));
  return (
    <main className="container">
      <Button
        className=" bg-indigo-600 hover:bg-indigo-800"
        onClick={openModal}
      >
        Add
      </Button>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="ADD A NEW PRODUCT">
        <div className="space-y-3">
          {renderFormInputList}

          <div className="flex items-center space-x-3">
            <Button className=" bg-indigo-600 hover:bg-indigo-800">
              Submit
            </Button>
            <Button
              className=" bg-gray-400 hover:bg-gray-500"
              onClick={closeModal}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </main>
  );
};
export default App;
