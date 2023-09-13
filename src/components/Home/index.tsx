import TopBar from "../Topbar";
import { UploadFiles } from "../UploadFiles";
import styles from "./Home.module.scss";

export const HomeComponent = () => {
  return (
    <>
      <TopBar />

      <UploadFiles />

    </>
  )
}