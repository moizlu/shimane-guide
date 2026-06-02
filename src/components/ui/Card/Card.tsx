import { useEffect, type ReactNode } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaViewportRefType } from "embla-carousel-react";
import type { EmblaCarouselType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import clsx from 'clsx';

import type { ArticleFrontmatter } from '@/types';

import { useModalStore } from '../../../store/modal-window.store';
import Image from 'next/image';

import { useCategoryStore } from '@/store';

interface Props {
    children: ReactNode;
    metadata: ArticleFrontmatter;
}

const modal = (emblaRef: EmblaViewportRefType, emblaApi: EmblaCarouselType | undefined, children: ReactNode, metadata: ArticleFrontmatter) => {
    const Modal = () => {
        return (
            <div className="py-20 p-4 w-full h-full flex flex-col justify-start items-center gap-2 overflow-y-scroll">
                <div ref={emblaRef} className="w-[95%] h-[400px] shrink-0 max-w-150 overflow-x-hidden flex flex-col justify-center items-center overflow-clip">
                    <div className="flex">
                        {metadata.images.map((image, idx) => (
                            <Image key={`${image}-${idx}`} src={image} alt={`image-${idx}`} width={500} height={500} />
                        ))}
                    </div>
                </div>

                <div className="flex justify-center items-center gap-5">
                    {(metadata.place) && <a target="_blank" href={`https://www.google.com/maps/dir/?api=1&destination=${metadata.name}`}>Google Mapで見る ↗</a>}
                    {(metadata.url) && <a target="_blank" href={metadata.url}>公式サイト ↗</a>}
                </div>

                <div className="border-t-2 border-label/30 prose xl:prose-xl">
                    {children}
                </div>
            </div>
        )
    }
    return Modal;
}

const Card = ({ children, metadata }: Props) => {
    const { openModal } = useModalStore();
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const { category } = useCategoryStore();

    const onClick = () => {
        openModal({
            contents: modal(emblaRef, emblaApi, children, metadata),
            title: metadata.name
        })
    }

    // useEffect(() => {
    //     if (!emblaApi) { return; }
    //     emblaApi.plugins().autoplay?.play()
    // }, [emblaApi]);

    return (
        <button onClick={onClick} title={metadata.name} className={clsx("relative w-50 h-50 cursor-pointer overflow-clip shadow-black shadow-lg/50 flex flex-col justify-start items-center rounded-xl gap-4",
            (category !== "all" && !(metadata.categories?.includes(category))) && "hidden"
        )}>
            <Image src={metadata.images[0] ?? ""} alt={metadata.name} width={500} height={500} className="shadow-black shadow-md/25" />
            <p className="absolute bottom-0 left-0 w-full h-20 text-2xl bg-base flex justify-center items-center font-serif">{metadata.name}</p>
        </button>
    )
}

export default Card;
