import { Link } from "react-router-dom";

const VARIANTS = {
  primary: "btn",
  ghost: "btn btn-ghost",
  onDark: "btn btn-on-dark",
};

/**
 * Button — renders as a react-router <Link> when `to` is passed,
 * otherwise as a native <button>. Keeps call sites simple:
 *   <Button to="/shop">Shop the Drop</Button>
 *   <Button onClick={...}>Join</Button>
 */
export default function Button({ to, href, variant = "primary", className = "", children, ...props }) {
  const classes = `${VARIANTS[variant] ?? VARIANTS.primary} focus-ring ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
