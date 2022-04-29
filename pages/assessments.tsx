import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import MainLayout from "../layouts/MainLayout";
import { IAssessment } from "../interfaces/assessment";

interface AssesmentsPageProps {
  receivedAssessmentsData: IAssessment[];
}

const Assessments = ({ receivedAssessmentsData }: AssesmentsPageProps) => {
  const [assessments, setAssessments] = useState(receivedAssessmentsData);

  useEffect(() => {
    async function loadAssessmentsList() {
      const loadedAssessments = await fetch(
        `${process.env.API_URL}/assessments`
      );
      const receivedData = await loadedAssessments.json();
      setAssessments(receivedData);
    }

    if (!receivedAssessmentsData) {
      loadAssessmentsList();
    }
  }, []);

  if (!assessments) {
    return <div>Loader ...</div>;
  }

  return (
    <MainLayout>
      <Head>
        <title> Assesments Page | Observe</title>
      </Head>
      <h1>Assesments Page</h1>
      <ul>
        {assessments.map((assessment) => (
          <li key={assessment.id}>
            <Link
              href={`/assessment/[id]?id=1}`}
              as={`/assessment/${assessment.id}`}
            >
              <a>{assessment.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
};

Assessments.getInitialProps = async () => {
  const loadedAssessments = await fetch(`${process.env.API_URL}/assessments`);
  const receivedAssessmentsData: IAssessment[] = await loadedAssessments.json();

  return { receivedAssessmentsData };
};

export default Assessments;
