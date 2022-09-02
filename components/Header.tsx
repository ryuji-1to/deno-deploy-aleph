import { Link } from 'aleph/react';

export default function Header() {
  return (
    <header className="flex justify-between bg-gray-800 p-4 border-b-1 border-white">
      <Link to="/">
        <h1 className="font-bold text-white text-xl">Deno Deploy Demo</h1>
      </Link>
      <Link
        to="/blog"
        className="text-white font-bold border px-2 py-1 rounded-md"
      >
        blog
      </Link>
    </header>
  );
}
