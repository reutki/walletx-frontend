import Head from "next/head";
import styles from "@/styles/Home.module.css";
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
