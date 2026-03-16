import React, { useState } from 'react'

const WA_NUMBER = '6282240176390'

const contactDetails = [
  { icon: '📍', text: 'Jl. Mawar No. 12, Desa Harum, Kec. Segar' },
  { icon: '📞', text: '+62 812-3456-7890' },
  { icon: '🕘', text: 'Senin – Sabtu, 08.00 – 18.00 WIB' },
  { icon: '📸', text: '@sweetly.snack' },
]

export default function Contact() {
  const [form, setForm] = useState({ nama: '', produk: '', pesan: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleWA = () => {
    const nama = form.nama.trim() || 'Pelanggan'
    const produk = form.produk.trim()
    const pesan = form.pesan.trim()

    let msg = `Halo Sweetly! 👋\n\nSaya *${nama}*`
    if (produk) msg += ` tertarik dengan *${produk}*`
    if (pesan) msg += `.\n\n${pesan}`
    else msg += ` dan ingin mengetahui lebih lanjut tentang produk kalian.`
    msg += `\n\nTerima kasih! 🍪`

    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const inputClass =
    'w-full bg-cream border border-peach-100 rounded-xl px-4 py-2.5 text-sm text-brand-dark outline-none focus:border-peach-300 transition-colors placeholder:text-brand-mid/50'

  return (
    <section id="contact" className="bg-cream py-20 px-[5%]">
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* Info */}
        <div>
          <p className="section-label">Hubungi Kami</p>
          <h2 className="section-title text-3xl md:text-4xl">
            Yuk, Pesan Sekarang! 🍪
          </h2>
          <p className="text-[15px] text-brand-mid leading-relaxed mb-8">
            Tertarik dengan produk kami atau ingin custom order? Isi form di
            samping dan pesan langsung via WhatsApp. Kami siap melayanimu!
          </p>
          <div className="space-y-4">
            {contactDetails.map((d) => (
              <div key={d.text} className="flex items-center gap-3 text-sm text-brand-mid">
                <span className="text-xl">{d.icon}</span>
                <span>{d.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div
          className="bg-white rounded-3xl p-8"
          style={{ boxShadow: '0 4px 24px rgba(224,122,58,0.10)' }}
        >
          <div className="mb-5">
            <label className="block text-sm font-medium text-brand-mid mb-2">
              Nama Kamu
            </label>
            <input
              type="text"
              name="nama"
              value={form.nama}
              onChange={handleChange}
              placeholder="Contoh: Budi Santoso"
              className={inputClass}
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-brand-mid mb-2">
              Produk yang Diminati
            </label>
            <input
              type="text"
              name="produk"
              value={form.produk}
              onChange={handleChange}
              placeholder="Contoh: Bolu Kukus Pelangi"
              className={inputClass}
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-brand-mid mb-2">
              Pesan Kamu
            </label>
            <textarea
              name="pesan"
              value={form.pesan}
              onChange={handleChange}
              rows={4}
              placeholder="Halo Sweetly, saya tertarik dengan produk kalian dan ingin memesan..."
              className={`${inputClass} resize-y`}
            />
          </div>

          <button
            onClick={handleWA}
            className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1DA851] text-white font-medium py-3.5 rounded-full text-sm transition-colors cursor-pointer border-0"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat via WhatsApp
          </button>
        </div>

      </div>
    </section>
  )
}