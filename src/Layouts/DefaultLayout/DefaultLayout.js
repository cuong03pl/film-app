import NavBar from "./NavBar/NavBar";
import Header from "../components/Header/Header";
import AuthProvider from "~/context/AuthProvider";

function DefaultLayout({ children }) {
  return (
    <div>
      <AuthProvider>
        <Header></Header>
      </AuthProvider>

      <div className="flex">
        <NavBar />
        {children}
      </div>
    </div>
  );
}

export default DefaultLayout;
