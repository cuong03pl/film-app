import RightBar from "../components/RightBar/RightBar";
import Header from "../components/Header/Header";
import AuthProvider from "~/context/AuthProvider";

function DefaultLayout({ children }) {
  return (
    <div className="flex  bg-bgPrimary h-full">
      <AuthProvider>
        <Header></Header>
        <div className="flex justify-between w-full">
          {children}
          <RightBar />
        </div>
      </AuthProvider>
    </div>
  );
}

export default DefaultLayout;
