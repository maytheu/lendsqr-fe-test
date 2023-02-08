import { Card } from ".";
import {Typography} from "..";
import { coin, money, user, userOutline, usersOutline } from "../../assets";

const Overview = () => {

  const overview = [
    { icon: userOutline, name: "users", values: "2,453", bg:'bg-pink/20' },
    { icon: usersOutline, name: "active users", values: "2,453",bg:'bg-blue/20' },
    { icon: coin, name: "users with loans", values: "2,453",bg:'bg-orange/20' },
    { icon: money, name: "users with savings", values: "2,453", bg:'bg-red/20' },
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
