import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { data } = useSession();
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div>
      <div className="text-green-500 text-8xl">hello world</div>
      <button onClick={() => signIn()}>sign</button>
      <button onClick={() => signOut()}>sign out</button>
    </div>
  );
};

export default Home;
