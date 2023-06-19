import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Hello, Next.js 13 App Directory!</h1>
      <p>
        <Link href="/hidration">Prefetching Using Hydration</Link>
      </p>
    </>
  );
}
