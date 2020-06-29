import Head from "next/head";
import Wrapper from "../components/Wrapper/Wrapper";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import LineLabel from "../components/LineLabel/LineLabel";
import ProductCard from "../components/ProductCard/ProductCard";
import Button from "../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
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
        ></script>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Navbar scrollColor="rgba(255,255,255,0.2)" />
      <div className={styles.hero}>
        <Wrapper bg="rgba(0,0,0,0)">
          <h1
            className={`${styles.rainbow} ${styles.hero_text} ${styles.rainbow_text_animated}`}
          >
            Radical Starts Here.
          </h1>
          <p>
            Kreative is a group of enterprises working to build products and
            services that aid the human race, empower organizations, and make
            the universe a better place.
          </p>
          <div className={styles.hero_icon}>
            <FontAwesomeIcon icon={faArrowDown} size="1x" />
          </div>
        </Wrapper>
      </div>
      <Wrapper bg="#F6F6F4" paddingTop="200px" paddingBottom="200px">
        <div style={{ textAlign: "center" }}>
          <h2 style={{ paddingBottom: "50px" }}>Our Products and Services</h2>
        </div>
        <Container style={{ padding: "0px" }} fluid>
          <Row gutterWidth={25}>
            <Col sm={4} xxl={3}>
              <ProductCard
                bg="white"
                align="center"
                border="1.5px solid #E3E3E3"
                raised={true}
                logo="https://kmg-site-assets.kaycdn.com/toprank-color.webp"
                alt="Kreative TopRank logo in Green"
                description="Search engine optimization"
                text="With TopRank, we garuntee higher search rankings for your website or your money back."
                button={
                  <Button
                    naked={true}
                    aHref="https://dreamflow.kreative.im/toprank"
                    fill="#176A3A"
                    textColor="white"
                    hoverColor="#53AF7A"
                    radius="3px"
                    border="1px solid #176A3A"
                    hoverBorder="1px solid #53AF7A"
                    padding="15px 50px"
                    raised={false}
                    grow={false}
                    width="100%"
                  >
                    See TopRank
                  </Button>
                }
              />
            </Col>
            <Col sm={4} xxl={3}>
              <ProductCard
                bg="white"
                align="center"
                border="1.5px solid #E3E3E3"
                logo="https://kmg-site-assets.kaycdn.com/pageflow-color.webp"
                alt="Kreative Pageflow logo in Purple"
                description="Website design"
                text="Our sales focused approach turns a potential website cost into an investment that makes you money."
                button={
                  <Button
                    naked={true}
                    aHref="https://dreamflow.kreative.im/pageflow"
                    fill="#6135DE"
                    textColor="white"
                    hoverColor="#7651E0"
                    radius="3px"
                    border="1px solid #6135DE"
                    hoverBorder="1px solid #7651E0"
                    padding="15px 50px"
                    raised={false}
                    grow={false}
                    width="100%"
                  >
                    See Pageflow
                  </Button>
                }
              />
            </Col>
            <Col sm={4} xxl={3}>
              <ProductCard
                bg="white"
                align="center"
                border="1.5px solid #E3E3E3"
                logo="https://kmg-site-assets.kaycdn.com/kopy-color.webp"
                logoWidth="80%"
                alt="Kreative Kopy logo in Navy Blue"
                description="Copywriting"
                text="Affordable and attention grabbing copywriting for your blog posts or webpages."
                button={
                  <Button
                    naked={true}
                    aHref="https://dreamflow.kreative.im/kopy"
                    fill="#1C5592"
                    textColor="white"
                    hoverColor="#338EEE"
                    radius="3px"
                    border="1px solid #1C5592"
                    hoverBorder="1px solid #338EEE"
                    padding="15px 50px"
                    raised={false}
                    grow={false}
                    width="100%"
                  >
                    See Kopy
                  </Button>
                }
              />
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default HomePage;
