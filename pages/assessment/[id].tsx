import { NextPageContext } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IAssessment } from "../../interfaces/assessment";
import MainLayout from "../../layouts/MainLayout";

interface AssessmentPageContext extends NextPageContext {
  query: {
    id: string;
  };
}

interface AssessmentPageProps {
  receivedAssessmentData: IAssessment;
}

const Assessment = ({ receivedAssessmentData }: AssessmentPageProps) => {
  const [assessment, setAssessment] = useState(receivedAssessmentData);
  const router = useRouter();

  useEffect(() => {
    async function loadUpdatedAssessments() {
      const loadedUpdatedAssessment = await fetch(
        `${process.env.API_URL}/assessments/${router.query.id}`
      );
      const receivedUpdatedAssessment = await loadedUpdatedAssessment.json();
      setAssessment(receivedUpdatedAssessment);
    }

    if (!receivedAssessmentData) {
      loadUpdatedAssessments();
    }
  }, []);
  if (!assessment) {
    return <div>Loader...</div>;
  }
  return (
    <MainLayout>
      <h1> Assessment {assessment.title} </h1>
      <hr />
      <div>
        <ul>
          {assessment.updated_knowledge?.map((criteria, i) => (
            <li key={i}>{criteria}</li>
          ))}
        </ul>
      </div>
    </MainLayout>
  );
};

// Assessment.getInitialProps = async (ctx) => {
//   const loadedAssessment = await fetch(
//     `http://localhost:4200/assessments/${ctx.query.id}`
//   );
//   const receivedAssessmentData = await loadedAssessment.json();

//   return { receivedAssessmentData };
// };

export async function getServerSideProps({
  query,
  req,
}: AssessmentPageContext) {
  if (!req) {
    return { receivedAssessmentData: null };
  }
  const loadedAssessment = await fetch(
    `${process.env.API_URL}/assessments/${query.id}`
  );
  const receivedAssessmentData: IAssessment = await loadedAssessment.json();

  return { props: { receivedAssessmentData } };
}

export default Assessment;
