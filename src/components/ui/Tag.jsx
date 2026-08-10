const VARIANTS = {
  outline: "tag",
  solid: "tag tag-solid",
  signal: "tag tag-signal",
};

export default function Tag({ children, variant = "outline", className = "", ...props }) {
  return (
    <span className={`${VARIANTS[variant] ?? VARIANTS.outline} ${className}`} {...props}>
      {children}
    </span>
  );
}
