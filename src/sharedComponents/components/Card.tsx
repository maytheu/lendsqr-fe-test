import { Typography } from "../";
import { Avatar } from "./";

interface CardProps {
  icon: string;
  name: string;
  value: string;
  bg: string;
}
const Card: React.FC<CardProps> = ({ icon, name, value, bg }) => {
  return (
    <div className="flex justify-center">
      <div className="block p-8 rounded-lg shadow-md bg-white w-full">
        <Avatar
          {...{
            name: icon,
            avatarAlt: "user",
            className: `w-10 h-10 p-2 ${bg}`,
          }}
        />

        <Typography
          {...{
            uppercase: true,
            variant: "p",
            fontVariant: "body",
            color: "link",className:'my-3'
          }}
        >
          {name}
        </Typography>

        <Typography
          {...{
            variant: "p",
            fontVariant: "headline",
            color: "link",
          }}
        >
          {value}
        </Typography>
      </div>
    </div>
  );
};

export default Card;
