import Link from "next/link";
import { langs } from "../data/langs";

export default function Header() {
  return (
    <nav className="hidden md:flex w-full justify-center px-4 py-2 border-b-2 border-gray-100 container mx-auto">
      <ul className="w-full flex text-xl font-semibold text-gray-500 items-center justify-between ">
        <li>
          <Link href={"/main"}>Home</Link>
        </li>

        <li>
          <Link href={"/about"}>About Me</Link>
        </li>

        <li>
          <Link href={"/skills"}>Skills</Link>
        </li>

        <li>
          <Link href={"/portfolio"}>Portfolio</Link>
        </li>

        <li>
          <Link href={"/contact"}>Contacts</Link>
        </li>
      </ul>
    </nav>
  );
}
