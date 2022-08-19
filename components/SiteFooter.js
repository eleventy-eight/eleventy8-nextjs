import Link from "next/link";
import SiteOffcanvas from "../components/SiteOffcanvas";
import ScriptBMCWidget from "../components/ScriptBMCWidget";

export default function SiteFooter() {
    return (
        <footer>
            <SiteOffcanvas />
            <ScriptBMCWidget />
        </footer>
    );
}
