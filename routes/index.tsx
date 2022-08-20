import { Head, Link } from 'aleph/react';

export default function Index() {
  return (
    <div>
      <Link to="/greeting/hello" className="text-red-500">
        say hello!!!
      </Link>
    </div>
  );
}
