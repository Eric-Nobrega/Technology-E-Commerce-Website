interface IcartItem {
  title: string;
  price: number;
}

export const CartItem = (props: IcartItem) => {
  return (
    <div className="w-100">
      <div>{props.title}</div>
      <div>{props.price}</div>
    </div>
  );
};
