import Link from "next/link";
import ScriptBMCWidget from "../components/ScriptBMCWidget";

export default function SiteFooter() {
    return (
        <footer>
            <p>
                &copy; 2022 Eleventy8 | Built by{" "}
                <Link href='https://www.linkedin.com/in/paul-g-4611521a2/'>
                    <a rel='noopener noreferrer' target='_blank'>
                        Paul
                    </a>
                </Link>{" "}
                of Eleventy8 with{" "}
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
