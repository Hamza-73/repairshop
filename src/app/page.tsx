import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <div className=" bg-home-img bg-cover bg-center">
        <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
          <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
            <h1 className="text-3xl font-bold">
              Hamza&apos;s Computer <br />
              Repair Shop
            </h1>
            <address>Gulberg |||, Lahore , Pakistan</address>
            <p>Open Daily: 9am to 5pm</p>
            <Link href="tel:5555555555" className="hover:underline">
              555-5555-5555
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
