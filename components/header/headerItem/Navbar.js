import Link from "next/link";

const Nav = () => {
    return (
                <nav className="bg-[#0e0a0a] h-[6.45vh] w-full absolute left-0 top-[13vh]">
                    <ul className="flex justify-between">
                        <li>
                            <Link className="hover:bg-orange-600 py-5 px-10" href={"/"}>Branding for</Link>
                        </li>
                        <li>
                            <Link className="hover:bg-orange-600 py-5 px-10" href={"/SpaceBranding"}>Space Branding</Link>
                        </li>
                        <li>
                            <Link className="hover:bg-orange-600 py-5 px-10" href={"/CreativeSolutions"}>Creative Solutions</Link>
                        </li>
                        <li>
                            <Link className="hover:bg-orange-600 py-5 px-10" href={"/Consultancy"}>Consultancy</Link>
                        </li>
                        <li>
                            <Link className="hover:bg-orange-600 py-5 px-10" href={"/Philosophy"}>Philosophy</Link>
                        </li>
                        <li>
                            <Link className="hover:bg-orange-600 py-5 px-10" href={"/FOAL"}>FEELING OF A LOOK?</Link>
                        </li>
                        <li>
                            <Link className="hover:bg-orange-600 py-5 px-10" href={"/Contact"}>Contact</Link>
                        </li>
                    </ul>
                </nav>
    );
}

export default Nav;