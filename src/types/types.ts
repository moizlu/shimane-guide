import type { ComponentType, SVGProps } from "react";

export type Category = "all" | "sightseeing" | "foods" | "history";

export const CategoryList: Category[] = ["all", "sightseeing", "foods", "history"];

export const CategoryNames: Record<Category, string> = {
    all: "全て",
    sightseeing: "観光",
    foods: "食べ物",
    history: "歴史･史跡"
}

export interface SvgComponentProps extends SVGProps<SVGSVGElement> {
  width: number;
  height: number;
  className?: string;
}

export type SvgComponent = ComponentType<SvgComponentProps>;

export interface ArticleFrontmatter {
    name: string;
    categories: Category[];
    place: string;
    url: string;
    images: string[];
}
