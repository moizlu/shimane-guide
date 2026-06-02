import type { SvgComponentProps } from "@/types";

export default function CloseIcon({ width, height, className, ...props }: SvgComponentProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 -960 960 960" className={className} {...props} >
      <path d="m480-555.69-184 184L267.69-400 480-612.31 692.31-400 664-371.69l-184-184Z"/>
    </svg>
  );
}