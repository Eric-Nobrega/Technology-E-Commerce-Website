import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToCart } from "../Features/cartSlice";

interface IProductCard {
  title: string;
  description: string;
  price: number;
  img: string;
}

export const ProductCard = (props: IProductCard) => {
  const cart = useSelector((state: any) => state.cart.value);

  const dispatch = useDispatch();
  return (
    <div className="border-2 shadow-md rounded-xl max-h-100">
      <div className="flex justify-center">
        <img
          src={props.img}
          alt=""
          className="rounded-lg max-h-72 min-w-full"
        />
      </div>
      <div className="flex flex-wrap justify-center mt-3">
        <div className="w-full ">
          <p className="lead text-center font-bold">{props.title}</p>
        </div>
        <div className="flex gap-x-4 pb-2 mt-4">
          <p className="lead text-center font-bold pt-2">${props.price}</p>
          <button
            className="p-2 rounded-2xl border"
            onClick={() => {
              dispatch(
                addToCart({
                  name: "cart",
                  cartList: [
                    ...cart.cartList,
                    {
                      productName: props.title,
                      productPrice: Number(props.price),
                    },
                  ],
                  cartTotal: cart.cartTotal + Number(props.price),
                })
              );
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
