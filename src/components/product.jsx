import React from "react";

const products = [
    {
        emoji: '🍔',
        bg: '#FDEDE#',
        tag: 'Best Seller',
        name: 'Aldis Burger',
        decs:'aldis burger cempaka putih rotinya lembut dagingnya juicy luicy maharani bisa pesen online,',
        price: 'Rp 80.000',
    },
    {
        emoji : '🍰',
        bg: '#FDE5F9',
        tag : 'Signature',
        name : 'Bolu Kukus Pelangi',
        decs : 'Lembut, warna-warni, cocok untuk semua usia. Tersedia dalam ukuran mini dan reguler.',
        price: 'Rp 15.000',
    },
    {
    emoji: '🧁',
    bg: '#FDE8F5',
    tag: 'Baru',
    name: 'Cupcake Coklat Premium',
    desc: 'Dilapisi buttercream lembut, rasa coklat yang intense dan tidak terlalu manis.',
    price: 'Rp 18.000',
    },
    {
    emoji: '🥧',
    bg: '#FFF3E0',
    tag: 'Spesial',
    name: 'Pie Susu Lembut',
    desc: 'Kulit pie yang gurih dengan isian susu yang creamy dan lembut di setiap gigitan.',
    price: 'Rp 12.000',
     },
]

export default function Products(){
    return (
        <section id="products" className="bg-cream py-20 px-[%5]">
            <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-12">
            <p className="section-label">Produk Kami</p>
            <h2 className="section-titlw text-3xl md:text-4xl">
                Pilian Kue & Snack Favorit
            </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((p) => (
                    <div
                    key={p.name}
                    className="bg-white rounded-3xl overflow-hidden hover:*:-translate-y-2 transition-transform duration-200 cursor-pointer"
                    style={{boxShadow : '0 4px 24px rgba(224,122,58,0.10)'}}
                    >
                        <div
                        className="h-44 flex items-center justify-center text-6xl"
                        style={{background: p.bg}}
                        >
                            {p.emoji}
                        </div>
                        <div className="p-4">
                            <span className="inline-block bg-peach-50 text-peach-300 text-[11px] font-medium px-3 py-0.5 rounded-full mb-2">
                                {p.tag}
                            </span>
                            <h3 className="font-medium text-brand-dark text-base mb-1.5">
                                {p.name}
                            </h3>
                            <p className="text-xs text-brand-mid leading-relaxed mb-3">
                                {p.decs}
                            </p>
                            <p className="font-display text-lg font-bold text-peach-300">
                                {p.price}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </section>
    )
}