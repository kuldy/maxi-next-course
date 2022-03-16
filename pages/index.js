import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1 className="text-3xl text-red-400 font-bold underline">
        The Home Page
      </h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/client">Client</Link>
        </li>
      </ul>
    </div>
  );
}
