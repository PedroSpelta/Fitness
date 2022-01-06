import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import Header from "../../components/Header";

function Index() {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <Header />
      <button
        className="bg-blue-500 text-white w-32 h-10 rounded-md text-xl "
        onClick={() => {
          signIn();
        }}
      >
        Logar
      </button>
    </div>
  );
}

export default Index;
