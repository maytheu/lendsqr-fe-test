import { ReactNode } from "react";
import { logo, signin } from "../../../assets";

interface LoginProps {
  children: ReactNode;
}

const LoginLayout: React.FC<LoginProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 h-screen md:grid-cols-2">
      <div className="hidden px-10 lg:px-20 bg-bg bg-opacity-10 md:grid">
        <img src={logo} alt="Logo" className="mt-12" />
        <img
          src={signin}
          alt="w"
          className="w-full h-44 lg:h-60 -mt-20 lg:-mt-32"
        />
      </div>

      <div>{children}</div>
    </div>
  );
};

export default LoginLayout;
