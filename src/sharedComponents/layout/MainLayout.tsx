import { ReactNode } from "react";
import { Header, SideNav } from "../components";

interface MainLaoutProps {
  children: ReactNode;
}
const MainLayout: React.FC<MainLaoutProps> = ({children}) => {
  return (
    <div>
      <Header />
      <div className="h-full flex">
        <div className="bg-white hidden md:block w-64"><SideNav/></div>
        <div className="bg-container/5 w-full">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
