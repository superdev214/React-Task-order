import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";

export default function SecondaryLayout() {
  return (
    <>
      <Outlet />
      <footer className="footer mt-auto">
        <div className="container">
          <NavigationBar />
        </div>
      </footer>
    </>
  );
}
