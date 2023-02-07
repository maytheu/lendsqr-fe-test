import { Card } from ".";
import {Typography} from "..";
import { user } from "../../assets";

const Overview = () => {

  const overview = [
    { icon: user, name: "users", values: "2,453", bg:'bg-pink' },
    { icon: user, name: "users", values: "2,453",bg:'bg-blue' },
    { icon: user, name: "users", values: "2,453",bg:'bg-orange' },
    { icon: user, name: "users", values: "2,453", bg:'bg-red' },
  ];
  return (
    <>
      <Typography
        {...{
          capitalize: true,
          variant: "h4",
          fontVariant: "headline",
          color: "link",
          className: "text-3xl mb-10",
        }}
      >
        users
      </Typography>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {overview.map(({ name, icon, values, bg }, i) => {
          return <Card {...{ key: i, name, icon, value: values, bg }} />;
        })}
      </div>
    </>
  );
};

export default Overview;
