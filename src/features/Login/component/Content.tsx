import { Typography } from "../../../sharedComponents";

const Content = () => {
  return (
    <div className="px-10 md:px-14 lg:px-20">
      <Typography variant="h3" capitalize fontVariant="headline" color="black">Welcome</Typography>
      <Typography variant="h3" capitalize fontVariant="headline" color="black">Enter details to login</Typography>
    </div>
  );
};

export default Content;
