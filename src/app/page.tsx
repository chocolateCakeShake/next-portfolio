import {Button} from "@/components/ui/button";
import {Heading} from "lucide-react";
import React from "react";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Heading className="text-2xl">Welcome to My Portfolio</Heading>
        <p className="mt-2 text-center">This is a simple one-page portfolio built with Next.js, Shadcn, and Tailwind CSS.</p>
        <Button className="mt-4" variant="default">Contact Me</Button>
      </div>
    </main>
  )
}
