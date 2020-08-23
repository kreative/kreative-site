import Head from "next/head";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import moment from "moment";
import { Container, Row, Col } from "react-grid-system";
import NewsCard from "../../components/NewsCard/NewsCard";
import styles from "../../styles/newsroom.module.css";

const NewsroomPage = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Newsroom | Kreative</title>
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
              <h1 className={styles.logo}>The Kreative Newsroom</h1>
              <div className={styles.posts}>
                {posts.map((post) => (
                  <NewsCard
                    key={post.slug}
                    title={post.title}
                    author={post.author}
                    date={post.easyPublishingDate}
                    description={post.description}
                    slug={post.slug}
                  />
                ))}
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
            <div className={styles.footer}>
              <p>Copyright &#169; Kreative, LLC. 2020</p>
            </div>
          </Col>
          <Col sm={4} />
        </Row>
      </Container>
    </div>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");
  let posts = [];

  for (let i = 0; i < files.length; i++) {
    const markdownWithData = fs
      .readFileSync(path.join("posts", files[i]))
      .toString();
    const parsedMarkdown = matter(markdownWithData);
    const metadata = parsedMarkdown.data;
    const pd = moment(metadata.publish_date, "MM-DD-YYYY");
    metadata.easyPublishingDate = pd.format("dddd, MMMM Do, YYYY");
    metadata.slug = files[i].replace(".md", "");

    posts.push(metadata);
  }

  const sortedPosts = posts.sort((a, b) => {
    const date1 = new Date(a.publish_date);
    const date2 = new Date(b.publish_date);

    return date2 - date1;
  });

  return {
    props: {
      posts: sortedPosts,
    },
  };
};

export default NewsroomPage;