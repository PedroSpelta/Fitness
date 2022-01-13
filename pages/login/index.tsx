import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import Header from "../../components/Header";
import Facebook from "../../svg/Facebook";
import Google from "../../svg/Google";
import Twitter from "../../svg/Twitter";

function Index() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <div className="bg-blue-900 w-screen flex justify-center">
        <p className="text-white text-lg font-semibold py-3 max-w-3xl w-full ml-3 md:ml-6">
          Faça login abaixo
        </p>
      </div>
      <div className="flex flex-col gap-3 mt-10">

      <button
        className="border border-[#acacac] text-gray-600 w-60 h-10 rounded-full text-base shadow-md relative "
        onClick={() => {
          signIn();
        }}
      >
        Login com Google
        <div className="w-6 h-6 absolute left-2 top-2">
          <Google />
        </div>
      </button>
      <button
        className="border border-[#acacac] text-gray-600 w-60 h-10 rounded-full text-base shadow-md relative cursor-default "
        onClick={() => {
          window.alert('Não implementado')
        }}
      >
        Login com Facebook
        <div className="w-2.5 h-1 absolute left-3.5 top-2.5">
          <Facebook />
        </div>
      </button>
      <button
        className="border border-[#acacac] text-gray-600 w-60 h-10 rounded-full text-base shadow-md relative cursor-default "
        onClick={() => {
          window.alert('Não implementado')
        }}
      >
        Login com Twitter
        <div className="w-4 h-4 absolute left-3 top-3">
          <Twitter />
        </div>
      </button>
      </div>
    </div>
  );
}

export default Index;
