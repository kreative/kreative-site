import Head from "next/head";
import Link from "next/link";
import { Container, Row, Col } from "react-grid-system";
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
        <Container style={{ padding: "0px" }} fluid>
          <Row nogutter>
            <Col sm={4} />
            <Col sm={4}>
              <div className={styles.splash}>
                <img
                  src={"https://kreative-site.kaycdn.com/kreative-logo@4x.png"}
                  alt={"Kreative logo in Black"}
                  className={styles.logo}
                />
                <h1 className={styles.rainbow_text_animated}>Radical Starts Here.</h1>
                <p
                  style={{
                    color: "#949494",
                    lineHeight: "32px"
                  }}
                >
                  We're on a mission to build products and services that improve the human condition, empower organizations, and make the universe a better place.
                </p>
                <div className={styles.links}>
                  <Link href={"/about-us"}>
                    <a className={styles.link}>Learn more about us</a>
                  </Link>
                  <Link href={"/enterprises"}>
                    <a className={styles.link}>View our enterprises</a>
                  </Link>
                  <Link href={"/newsroom"}>
                    <a className={styles.link}>Checkout our newsroom</a>
                  </Link>
                  <Link href={"/contact-us"}>
                    <a className={styles.link}>Contact us</a>
                  </Link>
                </div>
              </div>
            </Col>
            <col sm={4} />
          </Row>
        </Container>
        <Container style={{ padding: "0px" }} fluid>
          <Row nogutter>
            <Col sm={4} />
            <Col sm={4}>
              <div className={styles.footer}>
                <p>Copyright &#169;	Kreative, LLC. 2020</p>
              </div>
            </Col>
            <Col sm={4} />
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
