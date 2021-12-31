import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { containerWidth } from "../libs/containers";

function Header() {
  const router = useRouter();
  const { pathname } = router;
  console.log(pathname);

  return (
    <div className="w-full flex flex-col items-center">
      <div
        className={`text-blue-700 text-2xl font-black my-5 max-w-3xl w-full`}
      >
        Smart Lifter
      </div>
      <div className="w-full flex justify-center bg-blue-700">
        <div
          className={`bg-blue-700 text-white font-semibold flex max-w-3xl w-full`}
        >
          <Link href={"/home"} passHref>
            <p
              className={` p-3 cursor-pointer ${
                pathname === "/home" && "bg-blue-900"
              }`}
            >
              Diário
            </p>
          </Link>
          <Link href={"/data"} passHref>
            <p
              className={` p-3 cursor-pointer ${
                pathname === "/data" && "bg-blue-900"
              }`}
            >
              Usuário
            </p>
          </Link>
          <Link href={"/data"} passHref>
            <p
              className={` p-3 cursor-pointer ${
                pathname === "/data" && "bg-blue-900"
              }`}
            >
              Data
            </p>
          </Link>
          <Link href={"/ingredient/add"} passHref>
            <p
              className={` p-3 cursor-pointer ${
                pathname === "/ingredient/add" && "bg-blue-900"
              }`}
            >
              Igredient
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
