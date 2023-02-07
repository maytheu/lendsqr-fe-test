import { Typography } from "../";
import { Avatar } from "./";

interface CardProps {
  icon: string;
  name: string;
  value: string;
}
const Card: React.FC<CardProps> = ({ icon, name, value }) => {
  return (
    <div className="flex justify-center">
      <div className="block p-8 rounded-lg shadow-md bg-white max-w-sm">
        <Avatar
          {...{ name: icon, avatarAlt: "user", className: "w-10 h-10" }}
        />

        <Typography
          {...{
            uppercase: true,
            variant: "p",
            fontVariant: "display",
            color: "link",
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
