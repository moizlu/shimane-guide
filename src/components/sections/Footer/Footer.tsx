import GitHubLight from "@/assets/icons/light/github.svg";
import GitHubDark from "@/assets/icons/dark/github.svg";

import Icon from "@/components/ui/Icon";

const Footer = () => {
    return (
        <footer className="w-full fixed z-1000 px-4 max-md:top-5 md:bottom-1 left-0 text-xs text-right font-bold pointer-events-none flex justify-between items-center max-md:flex-row-reverse">
            <a target="_blank" title="github" href="https://moiz.lu/gh/shimane-guide" className="max-md:absolute -bottom-15 left-1 pointer-events-auto">
                <Icon lightSrc={GitHubLight} darkSrc={GitHubDark} alt="github logo" size={30} />
            </a>

            <a target="_blank" href="https://moiz.lu/contact" className="pointer-events-auto">
                お問い合わせはこちら(別サイトに飛びます) ↗
            </a>
        </footer>
    );
};

export default Footer;
