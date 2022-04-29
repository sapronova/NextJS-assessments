import Link from "next/link";
import MainLayout from "../layouts/MainLayout";

const Index = () => {
  return (
    <MainLayout>
      <h1>Goals for Midle FE</h1>{" "}
      <p>
        <Link href={"/about"}> About</Link>
      </p>
      <p>
        <Link href={"/assessments"}>Assessments</Link>
      </p>
    </MainLayout>
  );
};

export default Index;
