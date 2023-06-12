import HomeFooter from "./HomeFooter";
import Slogan from "./Slogan";
import TaskCategories from "./TaskCategories";
import "./Home.scss";

export default function Home() {
  return (
    <main>
      <Slogan />

      <TaskCategories />

      <HomeFooter />
    </main>
  );
}
