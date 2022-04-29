import Head from "next/head";
import Link from "next/link";

const MainLayout = ({ children, title = "Assessments" }) => {
  return (
    <>
      <Head>
        <title> {title} | Middle FE </title>
        <meta name="keywords" content="JavaScript, NextJS, React"></meta>
        <meta name="description" content="that's app for skills upgrade"></meta>
        <meta charSet="utf-8" />
      </Head>
      <nav>
        <Link href={"/"}>
          <a>Home</a>
        </Link>
        <Link href={"/about"}>
          <a>About</a>
        </Link>
        <Link href={"/assessments"}>
          <a>Assessments</a>
        </Link>
      </nav>
      <main>{children}</main>
      <style jsx>{`
        nav {
          position: fixed;
          height: 60px;
          left: 0;
          top: 0;
          right: 0;
          background: #800080;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        nav a {
          color: #fff;
          text-decoration: none;
        }

        main {
          margin-top: 60px;
          padding: 1rem;
        }
      `}</style>
    </>
  );
};

export default MainLayout;
