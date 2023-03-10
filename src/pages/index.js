import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Splash from "./splash";
import Form from "./form";
export default function Home() {
  return (
    <>
      <Head>
        <title>WalletX</title>
      </Head>
      <main className={styles.main}>
        <Form />
      </main>
    </>
  );
}
