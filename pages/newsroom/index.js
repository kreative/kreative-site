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