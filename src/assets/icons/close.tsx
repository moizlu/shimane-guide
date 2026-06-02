import type { SvgComponentProps } from "@/types";

export default function CloseIcon({ width, height, className, ...props }: SvgComponentProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 -960 960 960" className={className} {...props} >
      <path d="M256-227.69 227.69-256l224-224-224-224L256-732.31l224 224 224-224L732.31-704l-224 224 224 224L704-227.69l-224-224-224 224Z"/>
    </svg>
  );
}