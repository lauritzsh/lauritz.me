import Layout from "../components/Layout";
import { css } from "../utils/css";

function IndexPage() {
  return (
    <Layout title="Lauriz Hilsøe">
      <div className={css({ maxWidth: "48rem" })}>
        <p className={css({ fontSize: "2rem" })}>Hi,</p>
        <p>
          My name is Lauritz. I am a software developer based in Copenhagen,
          Denmark. Most of my work has been web development (React, Node,
          Kotlin) but now I am studying machine learning at{" "}
          <a href="https://studier.ku.dk/bachelor/machine-learning-og-datavidenskab/">
            University of Copenhagen
          </a>
          .
        </p>
        <p>
          Some of my projects are available at{" "}
          <a href="https://github.com/lauritzsh">GitHub</a>. I am also on{" "}
          <a href="https://www.linkedin.com/in/lauritzhilsoe/">LinkedIn</a>.
        </p>
        <p>
          My CV can be found <a href="/cv-da.pdf">here</a> (in Danish).
        </p>
      </div>
    </Layout>
  );
}

export default IndexPage;
