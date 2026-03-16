import React from 'react'

const stats = [
  { num: '50+', label: 'Menu Tersedia' },
  { num: '200+', label: 'Pelanggan Puas' },
  { num: '3+', label: 'Tahun Pengalaman' },
]

export default function About() {
  return (
    <section id="about" className="bg-white py-20 px-[5%]">
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Images */}
        <div className="flex gap-4">
          <div className="flex-1 h-56 rounded-3xl bg-peach-50 flex items-center justify-center text-6xl mt-8">
            🍰
          </div>
          <div className="flex-1 h-44 rounded-3xl bg-peach-100 flex items-center justify-center text-6xl">
            🧁
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="section-label">Tentang Kami</p>
          <h2 className="section-title text-3xl md:text-4xl">
            Dibuat dengan Cinta, Disajikan dengan Hangat
          </h2>
          <p className="text-[15px] leading-relaxed text-brand-mid mb-4">
            Sweetly adalah usaha rumahan yang lahir dari passion kami terhadap
            kue dan snack berkualitas. Kami percaya bahwa makanan enak tidak
            harus mahal — cukup dibuat dengan bahan segar, resep terpercaya,
            dan penuh cinta.
          </p>
          <p className="text-[15px] leading-relaxed text-brand-mid">
            Melayani area sekitar dengan bangga sejak hari pertama, kami terus
            berinovasi untuk menghadirkan produk terbaik yang bisa kamu nikmati
            bersama keluarga.
          </p>

          {/* Stats */}
          <div className="flex gap-8 mt-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-3xl font-bold text-peach-300">
                  {s.num}
                </div>
                <div className="text-xs text-brand-mid mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}