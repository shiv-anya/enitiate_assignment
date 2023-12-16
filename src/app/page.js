import Link from "next/link";

export default function Home() {
  return (
    <div className="h-[85vh] flex items-center flex-col">
      <h1 className="text-3xl text-center mt-32 mb-10">
        Welcome to our page,
        <br />
        start your journey by registering.
      </h1>
      <Link href="/signup" className="text-blue-600 text-bold text-2xl">
        Sign Up
      </Link>
    </div>
  );
}
