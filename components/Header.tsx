import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

function Header() {
  const router = useRouter();
  const { data } = useSession();
  const [showSignOut, setShowSignOut] = useState(false);

  const { pathname } = router;

  return (
    <div className="w-full flex flex-col items-center">
      <div
        className={`text-blue-700 text-2xl font-black h-20 max-w-3xl w-full flex justify-between items-center`}
      >
        <p className="ml-3 md:ml-0">Smart Lifter</p>
        <div
          className={`font-normal transition-all flex overflow-hidden flex-shrink-0 items-center h-full w-[150px] slide-wrapper`}
          onMouseEnter={() => setShowSignOut(true)}
          onMouseLeave={() => setShowSignOut(false)}
        >
          <div className="h-8 flex items-center min-w-[150px]">
            <p className="text-sm relative">Olá, </p>
            <p className="text-base font-semibold truncate">
              {data?.user?.name}
            </p>
          </div>
          <div
            className="text-red-600 text-base font-bold cursor-pointer ml-2"
            onClick={() => signOut()}
          >
            Sair
          </div>
        </div>
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
          <Link href={"/ingredient/"} passHref>
            <p
              className={` p-3 cursor-pointer ${
                pathname === "/ingredient" && "bg-blue-900"
              }`}
            >
              Igredientes
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
