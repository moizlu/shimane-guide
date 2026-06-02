// components/ModalWindow.tsx
'use client';

import CloseIcon from '@/assets/icons/close';

import React, { useEffect, useRef } from 'react';
import { useModalStore } from '@/store/modal-window.store';
import SvgIcon from '../SvgIcon';

const ModalWindow: React.FC = () => {
    const { isOpen, data, closeModal } = useModalStore();
    const containerRef = useRef<HTMLDivElement>(null);
    const windowRef = useRef<HTMLDivElement>(null);

    // 開閉時の Web Animations API の制御
    useEffect(() => {
        const container = containerRef.current;
        const windowElement = windowRef.current;
        if (!container || !windowElement) return;

        if (isOpen) {
        container.animate([{ opacity: 0 }, { opacity: 1 }], {
            duration: 300,
            fill: 'both',
            easing: 'ease',
        }).play();

        windowElement.animate([{ translate: '0 10rem', opacity: 0 }, { translate: '0 0', opacity: 1 }], {
            duration: 300,
            delay: 100,
            fill: 'both',
            easing: 'ease',
        }).play();
        } else {
        windowElement.animate([{ translate: '0 0', opacity: 1 }, { translate: '0 10rem', opacity: 0 }], {
            duration: 300,
            fill: 'both',
            easing: 'ease',
        }).play();

        container.animate([{ opacity: 1 }, { opacity: 0 }], {
            duration: 300,
            delay: 100,
            fill: 'both',
            easing: 'ease',
        }).play();
        }
    }, [isOpen]);

    // モーダルデータがない場合は非描画（アニメーションを考慮する場合は常時マウントし pointer-events で制御）
    if (!data) return null;

    // 背景エフェクトの計算
    const isBlur = data.backgroundEffects === true || (typeof data.backgroundEffects === 'object' && data.backgroundEffects?.blur);
    const isContrast = data.backgroundEffects === true || (typeof data.backgroundEffects === 'object' && data.backgroundEffects?.contrast);

    // ウィンドウ設定の計算
    const windowMode = data.window === true ? 'window' : (typeof data.window === 'object' ? data.window?.mode : 'window') || 'window';
    const hasControls = data.window === true || (typeof data.window === 'object' && data.window?.controls);
    const isSquare = typeof data.window === 'object' && data.window?.square;

    // スタイルの組み立て
    const containerClasses = [
        'z-[1002] fixed top-0 left-0 w-full h-dvh flex justify-center items-center transition-all',
        isOpen ? 'pointer-events-auto' : 'pointer-events-none',
        isBlur ? 'md:backdrop-blur-sm' : '',
        isContrast ? 'bg-black/20' : '', // "bg-base/20" から標準的な色へ調整
        data.className || ''
    ].join(' ');

    const windowClasses = [
        'transition-all duration-300 relative w-full h-full flex justify-center items-center',
        windowMode === 'window' ? `bg-white md:max-h-200 md:m-10 md:border-black/5 md:border-2 md:rounded-sm ${isSquare ? 'md:max-w-200' : 'md:max-w-300'}` : '',
        windowMode === 'fullscreen' ? 'bg-white' : '',
        windowMode === 'none' ? '' : ''
    ].join(' ');

    // キーボードおよびクリックハンドラー
    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' && !data.lock) {
            closeModal();
        }
    };

    const handleContainerClick = (event: React.MouseEvent) => {
        if (!data.lock && event.target === containerRef.current) {
            closeModal();
        }
    };

    // 動的コンポーネント/ノードのレンダリング用ヘルパー
    const renderDynamicContent = (nodeOrComponent: React.ReactNode | React.ComponentType) => {
        if (typeof nodeOrComponent === 'function') {
            const Component = nodeOrComponent as React.ComponentType;
            return <Component />;
        }
        return nodeOrComponent;
    };

    return (
        <div ref={containerRef} role="button" tabIndex={0} onKeyDown={handleKeyDown} onClick={handleContainerClick} className={containerClasses} >
            <div ref={windowRef} role="dialog" aria-modal="true" className={windowClasses}>
                {/* タイトルセクション */}
                {data.title && (
                <div className="z-10000 absolute top-0 left-0 w-full h-15 rounded-sm bg-white/50">
                    {typeof data.title === 'string' ? (
                    <p className="w-full h-full flex justify-center items-center text-xl md:text-2xl font-bold">
                        {data.title}
                    </p>
                    ) : (
                    renderDynamicContent(data.title)
                    )}
                </div>
                )}

                {/* 閉じるボタン */}
                {hasControls && (
                <button
                    title="Close" onClick={closeModal}
                        className="z-100 transition-all duration-300 absolute top-0 right-0 bg-white/50 m-1 rounded-sm cursor-pointer hover:scale-110 w-[50px] h-[50px] flex items-center justify-center">
                        <SvgIcon Svg={CloseIcon} size={50} />
                </button>
                )}

                    {/* メインコンテンツ */}
                    {renderDynamicContent(data.contents)}
            </div>
        </div>
    );
};

export default ModalWindow;
