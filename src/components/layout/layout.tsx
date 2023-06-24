    import { PropsWithChildren } from "react";
    import Head from "next/head";
    import Navigation from "../navigation/navigation";
    import { Montserrat } from 'next/font/google';
    import css from "./layout.module.css";
    import Link from "next/link";
    import clsx from "clsx";
    import { useRouter } from "next/router";

    const font = Montserrat({
        weight: ["400"],
        subsets: ["latin", "cyrillic"],
    })
    

    export default function Layout ({ children }: PropsWithChildren){
        const router = useRouter()
        return(
            <div className={font.className}>
            <Head>
                <title>Bookstore</title>
                <meta name="description" content="SkillFactory Next.js project" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="author" content="MArina" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={css.container}>
                <header className={css.header}>
                    <Link className={clsx(css.logo,{ [css.disabled]: router.asPath === "./" })} href="./">Bookshop</Link>
                    <Navigation/>
                </header>
                <main className={css.main}>{ children }</main>
         
            </div>
            </div>
        )
    } 