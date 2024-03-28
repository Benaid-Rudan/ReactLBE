import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
export default function HomeLayout() {
  return (
    <div>
      <Header></Header>
      <div style={{ height: "1000px", overflow: "auto", paddingTop: "50px" }}>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}
