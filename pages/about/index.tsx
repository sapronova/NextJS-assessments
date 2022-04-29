import Router from "next/router";
import MainLayout from "../../layouts/MainLayout";

const About = ({ title }) => {
  const handleReturnClick = () => {};
  return (
    <MainLayout title="About Assessments">
      <h1>{title}</h1>
      <h2> about NextJS </h2>
      <button onClick={handleReturnClick}>Return to Home Page</button>
      <button onClick={() => Router.push("/assessments")}>
        Return to Assessments Page
      </button>
    </MainLayout>
  );
};

About.getInitialProps = async () => {
  const response = await fetch(`${process.env.API_URL}/about`);
  const data = await response.json();

  return { title: data.title };
};

export default About;
