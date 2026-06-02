import { create } from 'zustand'

import { Category } from '@/types';

interface SplashStore {
    splashAppeared: boolean
    setSplashAppeared: (value: boolean) => void
}

interface CategoryStore {
    category: Category;
    setCategory: (value: Category) => void;
}

export const useSplashStore = create<SplashStore>()((set) => ({
    splashAppeared: true,
    setSplashAppeared: (value) => set(() => ({ splashAppeared: value }))
}));

export const useCategoryStore = create<CategoryStore>()((set) => ({
    category: "all",
    setCategory: (value) => set(() => ({ category: value }))
}));
