import Head from "next/head";
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
          <div className={styles.splash}>
            <h1 className={styles.rainbow_text_animated}>Radical Starts Here.</h1>
          </div>
          <Container style={{ padding: "0px" }} fluid>
            <Row gutterWidth={25}>
              <Col sm={12}>

              </Col>
            </Row>
            <Row gutterWidth={25}>
              <Col sm={12}>

              </Col>
            </Row>
            <Row gutterWidth={25}>
              <Col sm={6}>

              </Col>
              <Col sm={6}>

              </Col>
            </Row>
          </Container>
        </PageStarter>
      </div>
    </div>
  );
};

export default HomePage;
