import { useCategoryStore } from "@/store";
import { type ArticleFrontmatter, CategoryNames } from "@/types";

import Card from "../Card";

import Izumoooyashiro, { frontmatter as izumoooyashiroFrontmatter } from "@/assets/docs/izumooyashiro.mdx";
import Inasanohama, { frontmatter as inasanohamaFrontmatter } from "@/assets/docs/inasanohama.mdx";
import Iwamiginzan, { frontmatter as iwamiginzanFrontmatter } from "@/assets/docs/iwamiginzan.mdx";
import Izumosoba, { frontmatter as izumosobaFrontmatter } from "@/assets/docs/izumosoba.mdx";
import Matsuejo, { frontmatter as matsuejoFrontmatter } from "@/assets/docs/matsuejo.mdx";
import Sinjikosicchin, { frontmatter as sinjikosicchinFrontmatter } from "@/assets/docs/sinjikosicchin.mdx";



const Articles = () => {
    const { category } = useCategoryStore();

    return (
        <div className="p-2 mx-auto w-full max-w-200 h-full">
            <h1 className="my-5 text-2xl md:text-5xl">{CategoryNames[category]}の記事</h1>
            <div className="flex justify-center items-center flex-wrap gap-5">
                <Card metadata={izumoooyashiroFrontmatter as ArticleFrontmatter}><Izumoooyashiro /></Card>
                <Card metadata={inasanohamaFrontmatter as ArticleFrontmatter}><Inasanohama /></Card>
                <Card metadata={iwamiginzanFrontmatter as ArticleFrontmatter}><Iwamiginzan /></Card>
                <Card metadata={izumosobaFrontmatter as ArticleFrontmatter}><Izumosoba /></Card>
                <Card metadata={sinjikosicchinFrontmatter as ArticleFrontmatter}><Sinjikosicchin /></Card>
                <Card metadata={matsuejoFrontmatter as ArticleFrontmatter}><Matsuejo /></Card>
            </div>
        </div>
    );
}

export default Articles;
