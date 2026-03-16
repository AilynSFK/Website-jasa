import React from "react";

const testimonials = [
    {
        start : 5,
        text : 'Burger nya enak banget! Rotinya lembut dagingnya juicy luicy mahalini',
        avatar : '👩',
        name : 'teh elaina',
        role : 'pelanggan setiap'
    },

    {
        start : 5,
        text : 'Burger nya enak banget! Rotinya lembut dagingnya juicy luicy mahalini',
        avatar : '👩',
        name : 'teh elaina',
        role : 'pelanggan setiap'
    },

    {
        start : 5,
        text : 'Burger nya enak banget! Rotinya lembut dagingnya juicy luicy mahalini',
        avatar : '👩',
        name : 'teh elaina',
        role : 'pelanggan setiap'
    }

]

export default function Testimonial () {
    return (
        <section id="testimonial" className="bg-peach-50 py-20 px-[5%]">
            <div className="max-w-[1100px] mx-auto">
                <div className="text-center mb-12">
                    <p className="section-label">Ulasan Pelanggan</p>
                    <h2 className="section-title text-3xl md:text-4xl">
                        Apa Kata Mereka?
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t)=> {
                        <div
                        key={t.name}
                        className="bg-white rounded-2xl p-6"
                        style={{boxShadow:  '0 4px 24px rgba(224,122,58,0.10)'}}
                        >
                            <div className="text-peach-200 text-base mb-3">
                                {'★'.repeat(t.stars)}{'☆'.repeat(5 - t.stars)}
                            </div>
                            <p className="text-sm text-brand-mid leading-relaxed italic mb-5">
                            "{t.text}"
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-peach-100 flex items-center justify-center text-lg">
                                    {t.avatar}
                                </div>
                            </div>
                            <p className="font-medium text-sm text-brand-dark"> {t.name}</p>
                            <p className="text-xs text-brand-mid"> {t.role}</p>
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}