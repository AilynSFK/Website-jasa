import React from 'react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="px-[5%] pt-32 pb-20 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #FDEDE3 0%, #FFF8F2 60%)' }}
    >
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* Text */}
        <div>
          <span className="inline-block bg-peach-100 text-brand-mid text-xs font-medium px-4 py-1.5 rounded-full mb-5 tracking-wide">
            🍡 Snack & Kue Homemade
          </span>
          <h1 className="font-display text-5xl md:text-6xl leading-tight text-brand-dark mb-5">
            Manisnya{' '}
            <em className="not-italic text-peach-300">Buatan Rumah,</em>{' '}
            Citarasa Juara
          </h1>
          <p className="text-base leading-relaxed text-brand-mid mb-8 max-w-md">
            Sweetly hadir dengan aneka kue dan snack lezat, dibuat dari bahan
            pilihan, cocok untuk camilan sehari-hari maupun momen spesialmu.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="#products">
              <button className="btn-primary">Lihat Produk</button>
            </a>
            <a href="#contact">
              <button className="btn-outline">Hubungi Kami</button>
            </a>
          </div>
        </div>

        {/* Ilustrasi */}
        <div className="relative hidden md:flex justify-center">
          <div
            className="absolute -top-10 -right-10 w-48 h-48 rounded-full opacity-20"
            style={{ background: '#F4A46A' }}
          />
          <div
            className="w-80 h-80 flex items-center justify-center text-8xl animate-float"
            style={{
              borderRadius: '40% 60% 60% 40% / 50% 50% 60% 40%',
              background: '#F9C9A8',
            }}
          >
            🎂
          </div>
        </div>

      </div>
    </section>
  )
}