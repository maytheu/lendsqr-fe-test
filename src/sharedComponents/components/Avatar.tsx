import { Typography } from "../";

interface AvatarProps {
  name: string;
  className?: string;
  altContainerClass?: string;
  sizes?: string;
  avatarAlt: string;
}

const Avatar: React.FC<AvatarProps> = ({
  name,
  className,
  avatarAlt,
  altContainerClass,
  sizes = "12",
}) => {
  return !name && avatarAlt ? (
    <div
      className={`h-${sizes} w-${sizes} rounded-full grid place-items-center bg-on-primary/80 ${altContainerClass}`}
    >
      <Typography
        {...{ color: "white", variant: "span", fontVariant: "caption" }}
      >
        {avatarAlt}
      </Typography>
    </div>
  ) : (
    <img
      src={name}
      alt={`${name} avatar`}
      className={`w-full h-full object-cover rounded-full ${className}`}
    />
  );
};

export default Avatar;
