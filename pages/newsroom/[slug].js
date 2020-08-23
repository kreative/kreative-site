import React from "react";
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import { Container, Row, Col } from "react-grid-system";

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
            <div>
              <h1>{data.title}</h1>
              <p>{data.author + " | " + data.easyPublishingDate}</p>
              <div dangerouslySetInnerHTML={{ __html: contents }} />
            </div>
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
