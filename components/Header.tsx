import { Link } from 'aleph/react';

export default function Header() {
  return (
    <header className="flex justify-between bg-red-200 p-4">
      <h1 className="bg-blue-200">Deno Deploy Demo</h1>
      <Link to="/greeting/hello">sya hello!!!</Link>
    </header>
  );
}
