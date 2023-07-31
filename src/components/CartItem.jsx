import { useDispatch } from "react-redux";
import { cartActions } from "../store/ManageCartSlice";

const CartItem = ({ id, thumbnail, title, quantity, price }) => {
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(cartActions.removeItem(id));
  };


  return (
    <>
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={thumbnail}
          alt="product"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href="/">
                <h5 className=" text-sm">{title}</h5>
              </a>
            </h3>
            <p className="ml-4">{price}</p>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Qty {quantity}</p>

          <div className="flex">
            <button
              onClick={removeHandler}
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;