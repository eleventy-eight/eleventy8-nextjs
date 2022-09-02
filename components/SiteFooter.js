import Link from "next/link";
import ScriptBMCWidget from "../components/ScriptBMCWidget";

export default function SiteFooter() {
    return (
        <footer>
            <p>
                &copy; 2022 Eleventy8 | Built by Paul of Eleventy8 with{" "}
                <Link href='https://nextjs.org/'>
                    <a rel='noopener noreferrer' target='_blank'>
                        NextJS
                    </a>
                </Link>
            </p>
            <ScriptBMCWidget />
        </footer>
    );
}
