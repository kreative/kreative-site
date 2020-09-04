import Head from "next/head";
import Link from "next/link";
import { Container, Row, Col } from "react-grid-system";
import EnterpriseCard from "../components/EnterpriseCard/EnterpriseCard";
import styles from "../styles/enterprises.module.css";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Our Enterprises | Kreative</title>
        <script
          type="text/javascript"
          src="https://kit.fontawesome.com/abadd7b058.js"
          crossOrigin="anonymous"
        />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="192x192"  href="/favicons/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
        <link rel="manifest" href="/favicons/manifest.json"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-TileImage" content="/favicons/ms-icon-144x144.png"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>
      <div>
        <Container style={{ padding: "0px" }} fluid>
          <Row nogutter>
            <Col sm={4} />
            <Col sm={4}>
              <div className={styles.splash}>
                <Link href={"/"}>
                  <a className={styles.link}>Go back to homepage</a>
                </Link>

                <img
                  src={"https://kreative-site.kaycdn.com/kreative-logo@4x.png"}
                  alt={"Kreative logo in Black"}
                  className={styles.logo}
                />
                <h1 className={styles.header}>Our Enterprises</h1>
                <p
                  style={{
                    color: "#949494",
                    lineHeight: "32px"
                  }}
                >
                  We're on a mission...
                </p>
                <div style={{ marginTop: "50px" }}>
                  <EnterpriseCard
                    logoSrc={"https://kmg-site-assets.kaycdn.com/kreative-dreamflow-black.png"}
                    logoAlt={"Kreative Dreamflow in Black"}
                    description={"Hello hello hello"}
                    buttonText={"Visit Kreative Dreamflow"}
                  />
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
              <Container style={{ padding: "0px" }} fluid>
                <Row nogutter>
                  <Col sm={6}>
                    <div className={styles.footer}>
                      <p>Copyright &#169;	Kreative, LLC. 2020</p>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className={styles.footer} style={{ textAlign: "right" }}>
                      <p>Radical starts here.</p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col sm={4} />
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
