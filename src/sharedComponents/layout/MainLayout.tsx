import { ReactNode } from "react";
import { Header } from "../components";

interface MainLaoutProps {
  children: ReactNode;
}
const MainLayout: React.FC<MainLaoutProps> = ({children}) => {
  return (
    <div>
      <Header />
      <div className="">
        <div>sidenav</div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
