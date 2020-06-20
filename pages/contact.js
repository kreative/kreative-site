import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Wrapper from "../components/Wrapper/Wrapper";
import { Container, Row, Col } from "react-grid-system";
import ContactForm from "../components/ContactForm/ContactForm";
import styles from "../styles/contact.module.css";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact Us | Kreative</title>
        <script
          type="text/javascript"
          src="https://kit.fontawesome.com/abadd7b058.js"
          crossOrigin="anonymous"
        ></script>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Navbar />
      <Wrapper bg="white" paddingTop="150px" paddingBottom="200px">
        <h1 style={{ paddingBottom: "35px" }}>Contact Us</h1>
        <div className={styles.contact_form_section}>
          <p>Leave us a message and we'll reach back out to you.</p>
          <ContactForm />
        </div>
      </Wrapper>
      <Footer />
    </div>
  );
}
