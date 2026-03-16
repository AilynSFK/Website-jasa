import React from "react";


const reasons = [
  {
    icon: '🌿',
    title: 'Bahan Segar & Alami',
    desc: 'Kami hanya menggunakan bahan-bahan segar tanpa pengawet berbahaya untuk menjaga kualitas dan keamanan produk.',
  },
  {
    icon: '💰',
    title: 'Harga Terjangkau',
    desc: 'Kualitas premium tidak harus mahal. Kami hadir dengan harga yang ramah di kantong untuk semua kalangan.',
  },
  {
    icon: '🚚',
    title: 'Antar ke Rumah',
    desc: 'Layanan pengiriman tersedia di area sekitar kami. Pesan pagi, terima sore — fresh langsung ke tanganmu!',
  },
  {
    icon: '🎁',
    title: 'Bisa Custom Order',
    desc: 'Ingin tampilan atau rasa tertentu? Kami menerima pesanan custom untuk acara ulang tahun, pernikahan, dan lainnya.',
  },
]

export default function WhyUs() {
    return(
        <section id="why" className="bg-white py-20 px-[5%]">
            <div className="max-w-[1100px] mx-auto">
                <div className="text-center mb-12">
                    <p className="section-label">Keunggulan Kami</p>
                    <h2 className="section-title text-3xl md:text-4xl">
                        Kenapa Pilih Sweetly?
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((r) => (
                        <div
                        key={r.title}
                        className="bg-cream rounded-2xl p-7 hover:translate-y-1 transition-transform duration-200"
                        >
                            <div className="text-4xl mb-4">
                                {r.icon}
                            </div>
                            <h3 className="font-medium text-brand-dark text-base mb-2"> 
                                {r.title}
                            </h3>
                            <p className="text-xs text-brand-dark leading-relaxed">{r.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}