import { MainLayout } from "../../sharedComponents/layout";
import Content from "./component/Content";

const User = () => {
  return (
    <MainLayout>
      <div className="p-10">
        <Content />
      </div>
    </MainLayout>
  );
};

export default User;
