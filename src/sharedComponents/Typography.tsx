import cn from "classnames";
import PropTypes from "prop-types";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

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

const fontSizeVariantMapping = {
  h1: "h1 text-4xl font-bold",
  h2: "text-3xl font-bold",
  h3: "",
  h4: "text-2xl",
  h5: "text-xl",
  h6: "text-lg font-bold",
  subheader1: "text-base font-bold leading-4 tracking-wider",
  subheader2: "text-subheader2 font-semibold leading-4 tracking-wider",
  body1: "lg:text-base  leading-6 tracking-wider font-normal",
  body2: "lg:text-sm text-base leading-4 tracking-normal",
  small: "text-xs leading-4 tracking-wider font-medium",
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
  | "defaultHeader"
  | "defaultBody"
  | "white"
  | "red"
  | "black"
  | "link";

const colorVariantMapping = {
  defaultHeader: "text-primary-color",
  defaultBody: "text-primary-color",
  white: "text-white",
  red: "text-danger",
  black: "prose-black",
  link: "text-blue-200",
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
  color: "defaultHeader",
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
