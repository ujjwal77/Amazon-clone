import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router"
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {
  const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems)
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 ml-5">
          <Image onClick={()=>router.push('/')} src="http://links.papareact.com/f90" width={150} height={40} className="cursor-pointer "/>
        </div>

        <div className=" sm:flex hidden items-center bg-yellow-400 h-10 rounded-md flex-grow cursor-pointer mx-4 ">
          <input
            className="p-2 rounded-l-md h-full w-6 flex-grow flex-shrink focus:outline-none px-4"
            type="text"
          />
          <SearchIcon className="h-12 p-4 " />
        </div>

        {/* right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap ">
          <div
            onClick={!session ? signIn : signOut}
            className="cursor-pointer link flex flex-col items-center"
          >
            <div className="flex items-center space-x-4">
                <p>{session ? `Hello, ${session.user.name}` : "Sign In"}</p>
                <p>{session ? <Image src={session.user.image} height={30} width={30} className="rounded-full" /> : <UserCircleIcon className="h-8 text-white "/>}</p>
            </div>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div onClick={()=>router.push('/checkout')} className="link relative flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm">Basket</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
