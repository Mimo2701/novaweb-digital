"use client"

import { useState } from "react"

export default function AdminPage() {
  const [title, setTitle] = useState(
    "Gradimo premium web iskustva za moderne brendove"
  )

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-10">
        Admin Panel
      </h1>

      <div className="max-w-2xl flex flex-col gap-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-zinc-900 border border-zinc-700 p-4 rounded-xl"
        />

        <div className="bg-zinc-900 p-10 rounded-2xl mt-6">
          <h2 className="text-5xl font-black">
            {title}
          </h2>
        </div>
      </div>
    </main>
  )
}