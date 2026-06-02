import { usePathname, useSearchParams, useRouter } from "next/navigation";

import { Category } from "@/types";
import { useCategoryStore } from "@/store";

export const useCategoryNavigator = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
    const { setCategory } = useCategoryStore();

    const handleCategoryChange = (cat: Category) => () => {
        const params = new URLSearchParams(searchParams.toString());

        params.set("category", cat);
        setCategory(cat);
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    }

    return handleCategoryChange;
}