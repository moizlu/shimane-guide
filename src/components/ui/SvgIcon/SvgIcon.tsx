import type { SvgComponent } from "@/types";

export interface Props {
    Svg: SvgComponent;
    size: number | { width: number; height: number };
    className?: string;
}

const SvgIcon = ({ Svg, size, className }: Props) => {
    const width = typeof size === "number" ? size : size.width;
    const height = typeof size === "number" ? size : size.height;

    return <Svg width={width} height={height} className={className} />;
}

export default SvgIcon;
