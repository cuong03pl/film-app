import NavBar from "./NavBar/NavBar";
import Header from "../components/Header/Header";
import AuthProvider from "~/context/AuthProvider";

function DefaultLayout({ children }) {
  return (
    <div className="flex">
      <AuthProvider>
        <Header></Header>
        <div className="flex justify-between w-full">
          {children}
          <NavBar />
        </div>
      </AuthProvider>
    </div>
  );
}

export default DefaultLayout;
