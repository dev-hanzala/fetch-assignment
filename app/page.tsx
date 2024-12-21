import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl min-h-screen mx-auto px-4 py-8 content-center">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-12">
        Fetch Assignment
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/server-side"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Server Side
        </Link>
        <Link
          href="/client-side"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Client Side
        </Link>
      </div>
    </div>
  );
}
