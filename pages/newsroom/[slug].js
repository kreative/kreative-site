import React from "react";
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import { Container, Row, Col } from "react-grid-system";
import styles from "../../styles/index.module.css";

const NewsPost = ({ contents, data }) => {
  return (
    <div>
      <Head>
        <script
          type="text/javascript"
          src="https://kit.fontawesome.com/abadd7b058.js"
          crossOrigin="anonymous"
        />
        <meta content="width=device-width, initial-scale=1" name="viewport"/>
        <title>{data.title} | Blog | Kreative Dreamflow</title>
      </Head>

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
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync("posts");
  return {
    paths: files.map((filename) => ({
      params: {
        slug: filename.replace(".md", ""),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithData = fs
    .readFileSync(path.join("posts", slug + ".md"))
    .toString();

  const parsedMarkdown = matter(markdownWithData);
  const parsedHTML = marked(parsedMarkdown.content);

  return {
    props: {
      contents: parsedHTML,
      data: parsedMarkdown.data,
    },
  };
};

export default NewsPost;
