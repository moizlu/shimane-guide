// stores/useModalStore.ts
import { create } from 'zustand';
import type { ComponentType, ReactNode } from 'react';

export interface ModalData {
    contents: ReactNode | ComponentType;
    lock?: boolean;
    backgroundEffects?: boolean | {
        blur?: boolean;
        contrast?: boolean;
    };
    window?: boolean | {
        mode?: 'fullscreen' | 'window' | 'none';
        controls?: boolean;
        square?: boolean;
    };
    title?: string | ReactNode | ComponentType;
    className?: string;
    priority?: number;
}

interface ModalState {
    isOpen: boolean;
    data: ModalData | null;
    openModal: (data: ModalData) => boolean;
    closeModal: () => void;
}

export const useModalStore = create<ModalState>((set, get) => ({
    isOpen: false,
    data: null,

    openModal: (newData) => {
        // サーバーサイドレンダリング時は処理しない
        if (typeof window === 'undefined') return false;

        const currentData = get().data;
        const currentPriority = currentData?.priority ?? 0;
        const newPriority = newData.priority ?? 0;

        // 既存のモーダルより優先度が低い場合は開かない
        if (get().isOpen && currentPriority >= newPriority) {
            return false;
        }

        // デフォルト値の設定
        const formattedData: ModalData = {
            ...newData,
            backgroundEffects: newData.backgroundEffects ?? true,
            window: newData.window ?? true,
        };

        document.body.classList.add('overflow-hidden');
        set({ isOpen: true, data: formattedData });
        return true;
    },

    closeModal: () => {
        if (typeof window === 'undefined') return;

        document.body.classList.remove('overflow-hidden');
        set({ isOpen: false });
    },
}));