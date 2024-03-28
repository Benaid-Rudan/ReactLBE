import logo from "./logo.svg";
import "./App.css";
import HomePage2 from "./components/Home2";
import HomePage3 from "./components/Home3";
import HomePage4 from "./components/Home4";
import HomePage5 from "./components/Home5";
import HomeLayout from "./components/HomeLayout";
import HomePage1 from "./components/Home1";
import { useRoutes } from "react-router-dom";
import LoginPageTest from "./test_comp/LoginPageTest";
import "./components/I18n/I18n";
import SignUpForm from "./components/SignUpForm";
import SignInPage from "./components/SignInPage";
import AdminTest from "./components/AdminTest";
function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        { index: true, element: <HomePage1 /> },
        { element: <HomePage2 />, path: "home2" },
        { element: <HomePage3 />, path: "home3" },
        { element: <HomePage4 />, path: "home4" },
        { element: <HomePage5 />, path: "home5" },
      ],
    },
    {
      path: "/sign-in",
      element: <LoginPageTest />,
    },
    {
      path: "/sign-up",
      element: <SignInPage />,
    },
    {
      path: "/admin",
      element: <AdminTest />,
    },
  ]);

  return element;
}

export default App;

// <Routes>
//   <Route path='/' element={<HomePage></HomePage>}></Route>
//   <Route path='/home2' element={<HomePage2/>}></Route>
//   <Route path='/home3' element={<HomePage3/>}></Route>
//   <Route path='/home4' element={<HomePage4/>}></Route>
//   <Route path='/home5' element={<HomePage5/>}></Route>

// </Routes>
