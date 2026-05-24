"use client"

import { useState } from "react"
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://wcvdcmivnamfxvwaulfe.supabase.co"

const supabaseKey =
  "OVDE_STAVI_SAMO_ANON_PUBLIC_KEY"

const supabase = createClient(
  supabaseUrl,
  supabaseKey
)

export default function Home() {
  const [email, setEmail] = useState("")

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault()

    if (!email) {
      alert("Unesi email")
      return
    }

    const { error } = await supabase
      .from("contacts")
      .insert([{ email }])

    if (error) {
      console.log(error)
      alert(error.message)
    } else {
      alert("Uspešno poslato!")
      setEmail("")
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e1b4b] text-white overflow-hidden">

      {/* GLOW BACKGROUND */}

      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full"></div>

      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[140px] rounded-full"></div>

      {/* HEADER */}

      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <h1 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            NovaWeb Digital
          </h1>

          <nav className="hidden md:flex gap-8 text-zinc-300">

            <a
              href="#services"
              className="hover:text-white transition"
            >
              Servisi
            </a>

            <a
              href="#portfolio"
              className="hover:text-white transition"
            >
              Portfolio
            </a>

            <a
              href="#contact"
              className="hover:text-white transition"
            >
              Kontakt
            </a>

          </nav>

          <button className="bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 rounded-2xl font-bold hover:scale-105 transition">
            Započni
          </button>

        </div>

      </header>

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-6 py-40 text-center relative z-10">

        <div className="inline-block px-4 py-2 rounded-full border border-zinc-700 bg-zinc-900 text-sm mb-6">
          Premium Digital Agency
        </div>

        <h2 className="text-6xl md:text-7xl font-black leading-tight max-w-5xl mx-auto">
          Gradimo premium web iskustva za moderne brendove
        </h2>

        <p className="text-zinc-400 text-xl mt-8 max-w-2xl mx-auto">
          Futuristički dizajn, brzi performansi i profesionalna izrada za firme i startup projekte.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mt-10">

          <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">
            Pokreni Projekat
          </button>

          <button className="border border-zinc-700 px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition">
            Portfolio
          </button>

        </div>

      </section>

      {/* SERVICES */}

      <section
        id="services"
        className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8 relative z-10"
      >

        <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl hover:-translate-y-2 transition">

          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            className="h-56 w-full object-cover"
          />

          <div className="p-6">

            <h3 className="text-2xl font-bold mb-4">
              Web Development
            </h3>

            <p className="text-zinc-400">
              Moderni i brzi web sajtovi za firme i biznise.
            </p>

          </div>

        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl hover:-translate-y-2 transition">

          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
            className="h-56 w-full object-cover"
          />

          <div className="p-6">

            <h3 className="text-2xl font-bold mb-4">
              AI Solutions
            </h3>

            <p className="text-zinc-400">
              AI chatbotovi, automatizacija i pametne aplikacije.
            </p>

          </div>

        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl hover:-translate-y-2 transition">

          <img
            src="https://images.unsplash.com/photo-1559028012-481c04fa702d"
            className="h-56 w-full object-cover"
          />

          <div className="p-6">

            <h3 className="text-2xl font-bold mb-4">
              UI/UX Dizajn
            </h3>

            <p className="text-zinc-400">
              Premium dizajn i futuristički izgled aplikacija.
            </p>

          </div>

        </div>

      </section>

      {/* PORTFOLIO */}

      <section
        id="portfolio"
        className="max-w-7xl mx-auto px-6 py-28 relative z-10"
      >

        <div className="text-center mb-20">

          <h2 className="text-6xl font-black">
            Our Portfolio
          </h2>

          <p className="text-zinc-400 text-xl mt-6">
            Premium websites and digital experiences.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl">

            <div className="overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop"
                className="h-80 w-full object-cover group-hover:scale-110 duration-700"
              />

            </div>

            <div className="p-8">

              <h3 className="text-3xl font-bold">
                Luxury Restaurant
              </h3>

              <p className="text-zinc-400 mt-4">
                Modern premium web experience.
              </p>

            </div>

          </div>

          <div className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl">

            <div className="overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1400&auto=format&fit=crop"
                className="h-80 w-full object-cover group-hover:scale-110 duration-700"
              />

            </div>

            <div className="p-8">

              <h3 className="text-3xl font-bold">
                Modern Fitness
              </h3>

              <p className="text-zinc-400 mt-4">
                Premium fitness platform and branding.
              </p>

            </div>

          </div>

          <div className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl">

            <div className="overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1400&auto=format&fit=crop"
                className="h-80 w-full object-cover group-hover:scale-110 duration-700"
              />

            </div>

            <div className="p-8">

              <h3 className="text-3xl font-bold">
                Real Estate Agency
              </h3>

              <p className="text-zinc-400 mt-4">
                Luxury real estate website design.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="max-w-3xl mx-auto px-6 py-24 relative z-10"
      >

        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">

          <h2 className="text-4xl font-black text-center">
            Kontaktiraj Nas
          </h2>

          <p className="text-zinc-400 text-center mt-4">
            Ostavi email i kontaktiraćemo te.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 mt-10"
          >

            <input
              type="email"
              placeholder="Unesi email..."
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-4 outline-none"
              required
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 py-4 rounded-2xl font-bold hover:scale-[1.02] transition"
            >
              Contact Us
            </button>

          </form>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-white/10 py-10 text-center text-zinc-500 relative z-10">

        <p>
          © 2026 NovaWeb Digital. All rights reserved.
        </p>

        <div className="flex justify-center gap-6 mt-4 text-zinc-400">

          <a href="#">
            Instagram
          </a>

          <a href="#">
            LinkedIn
          </a>

          <a href="#">
            Behance
          </a>

        </div>

      </footer>

    </main>
  )
}