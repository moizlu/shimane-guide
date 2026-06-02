import Image, { ImageProps } from "next/image";
import clsx from "clsx"; // クラス名の結合用。必要に応じてインストール、またはテンプレートに合わせて変更してください

interface Props extends Omit<ImageProps, "src" | "width" | "height" | "alt"> {
  lightSrc: string;
  darkSrc: string;
  size?: number;
  alt: string;
  className?: string;
  imgClassName?: string;
  lightImgClassName?: string;
  darkImgClassName?: string;
}

const Icon = ({
    lightSrc, darkSrc, size, alt, className, imgClassName, lightImgClassName, darkImgClassName, ...props
}: Props) => {
  const transition = "transition-opacity duration-300";

  return (
    <div className={clsx(className, "relative pointer-events-none")}>
      <Image src={lightSrc} width={size} height={size} alt={alt}
        className={clsx(imgClassName, lightImgClassName, transition, "absolute opacity-100 dark:opacity-0")}
        {...props}
      />
      <Image src={darkSrc} width={size} height={size} alt={alt}
             className={clsx(imgClassName, darkImgClassName, transition, "opacity-0 dark:opacity-100")}
        {...props}
      />
    </div>
  );
}

export default Icon;
