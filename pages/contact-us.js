import Head from "next/head";
import Link from "next/link";
import { Container, Row, Col } from "react-grid-system";
import ContactForm from "../components/ContactForm/ContactForm";
import styles from "../styles/contact.module.css";

export default function ContactUs() {
  return (
    <div>
      <Head>
        <title>Contact Us | Kreative</title>
        <script
          type="text/javascript"
          src="https://kit.fontawesome.com/abadd7b058.js"
          crossOrigin="anonymous"
        />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Container style={{ padding: "0px" }} fluid>
        <Row nogutter>
          <Col sm={4} />
          <Col sm={4}>
            <div className={styles.splash}>
              <Link href={"/"}>
                <a className={styles.link}>Go back to homepage</a>
              </Link>

              <h1 style={{ paddingBottom: "15px" }}>Contact Us</h1>
              <div className={styles.contact_form_section}>
                <p style={{ paddingBottom: "50px" }}>Leave us a message and we'll reach back out to you.</p>
                <ContactForm />
              </div>
            </div>
          </Col>
          <Col sm={4} />
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
  );
}
