import {
  Input,
  InputRightAddon,
  InputGroup,
  Switch,
  Icon,
} from "@chakra-ui/react";
import { BsCart2, BsSearch } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMoon } from "react-icons/bi";
import Logo from "../Assets/logo.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const cart = useSelector((state: any) => state.cart.value);

  return (
    <div className="pt-3 pb-4 px-20 mb-2">
      <div className="flex justify-between">
        <div className="flex">
          <img src={Logo} className="mr-1 mt-2 h-6" alt="Flowbite Logo" />
          <Link to={"/"} className="font-[600] pt-2">
            XcelerateTech
          </Link>
        </div>
        <div className=" w-3/5 pt-1">
          <InputGroup size="sm">
            <Input
              placeholder="Search For Products, Brands & Categories"
              fontFamily="Karla"
            />
            <InputRightAddon children={<BsSearch />} />
          </InputGroup>
        </div>
        <div className="">
          <ul className="flex pt-1 text-md">
            <li className="mx-3">
              <Icon as={BiMoon} />
            </li>
            <li className="mx-3 ">
              <Icon as={AiOutlineHeart} />
            </li>
            <li className="mx-3">
              <a href="/cart">
                <Icon as={BsCart2} />
              </a>
            </li>
            <li className="mx-3 pt-0.5">
              <p className="">${cart.cartTotal}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
