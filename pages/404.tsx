import Link from "next/link";
import MainLayout from "../layouts/MainLayout";
import styles from "../styles/error.module.css";

const ErrorPageNotFound = () => {
  return (
    <MainLayout>
      <h1 className={styles.error}>Error 404</h1>
      <p>
        Page not found, but you can return <Link href={"/"}>Home</Link>
      </p>
    </MainLayout>
  );
};

export default ErrorPageNotFound;
