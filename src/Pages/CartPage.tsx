import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  TableContainer,
} from "@chakra-ui/react";
import { CartItem } from "../UI Components/CartItem";
import { useSelector } from "react-redux";

export const CartPage = () => {
  const cart = useSelector((state: any) => state.cart.value);
  return (
    <div className="h-screen">
      <div className="flexjustify-between px-48 pt-12">
        <div className="p-4  w-full">
          <h1 className="font-bold underline">Shopping Cart</h1>
          <TableContainer className="mt-5 border rounded-md">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Product</Th>
                  <Th>Qty</Th>
                  <Th isNumeric>Price</Th>
                </Tr>
              </Thead>
              <Tbody>
                {cart.cartList.map((item: any) => {
                  return (
                    <Tr>
                      <Td>
                        <CartItem title={item.productName} />
                      </Td>
                      <Td>1</Td>
                      <Td>{item.productPrice}</Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
          <div className="flex justify-end w-full py-8">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
