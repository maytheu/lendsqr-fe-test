import cn from "classnames";
import { ReactNode } from "react";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  // | "link"
  | "span"
  | "small"
  | "p";

type VariantFont =
  | "body"
  | "body2"
  | "display"
  | "headline"
  | "headlineS"
  | "caption"
  | "captionS";

const variantsMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  small: "small",
  // link: Link,
  span: "span",
  p: "p",
};

const fontSizeVariantMapping2 = {
  display: "text-display-sm lg:text-display-lg tracking-normal font-bold ",
  headline: "text-headline-sm lg:text-headline-lg font-bold",
  headlineS: "text-headline-small-sm lg:text-headline-small-lg font-bold",
  body: "text-body-lg font-normal",
  body2: "text-body-small-lg font-normal",
  caption: "text-caption-lg font-medium",
  captionS: "text-caption-small-lg font-medium",
};

type Color =
  | "defaultBody"
  | "white"
  | "red"
  | "black"
  | "link";

const colorVariantMapping = {
  defaultBody: "text-primary",
  white: "text-white",
  red: "text-danger",
  black: "prose-black",
  link: "text-link",
};

interface TypographyProps {
  variant?: Variant;
  fontVariant: VariantFont;
  className?: string;
  color: Color;
  children: ReactNode;
  capitalize?: boolean;
  uppercase?: boolean;
  lowercase?: boolean;
}

const Typography: React.FC<TypographyProps> = ({
  variant,
  fontVariant,
  className,
  color,
  children,
  capitalize,
  uppercase,
  lowercase,
  ...props
}): JSX.Element => {
  const Component = variant
    ? variantsMapping[variant]
    : ("p" as React.ElementType);
  return (
    <Component
      className={`${cn({
        [fontSizeVariantMapping2[fontVariant]]: fontVariant,
        [colorVariantMapping[color]]: color,
        capitalize: capitalize,
        uppercase: uppercase,
        lowercase: lowercase,
      })} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

Typography.defaultProps = {
  variant: "p",
  color: "defaultBody",
};

// Typography.propTypes = {
//   variant: PropTypes.oneOf([
//     "display",
//     "headline",
//     "headlineS",
//     "body",
//     "body2",
//     "caption",
//     "captionS",
//   ]),
//   className: PropTypes.string,
//   color: PropTypes.oneOf([
//     "defaultHeader",
//     "defaultBody",
//     "white",
//     "red",
//     "black",
//   ]),
//   children: PropTypes.node,
// };

export default Typography;
