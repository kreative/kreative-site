import Head from "next/head";
import Wrapper from "../components/Wrapper/Wrapper";
import { Container, Row, Col } from "react-grid-system";
import PageStarter from "../components/PageStarter/PageStarter";
import styles from "../styles/index.module.css";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Kreative</title>
        <script
          type="text/javascript"
          src="https://kit.fontawesome.com/abadd7b058.js"
          crossOrigin="anonymous"
        />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <div>
        <PageStarter>
          <h1>something</h1>
        </PageStarter>
      </div>
    </div>
  );
};

export default HomePage;
