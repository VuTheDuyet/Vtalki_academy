import React from 'react'

export default function Learningroadmap() {
    const steps = [
        {
            title: 'Tiếng Việt Giao tiếp cơ bản',
            time: 'Tháng 1–2',
            number: 1,
            color: 'bg-yellow-400',
        },
        {
            title: 'Sinh hoạt hàng ngày',
            time: 'Tháng 3–4',
            number: 2,
            color: 'bg-pink-400',
        },
        {
            title: 'Kết nối xã hội',
            time: 'Tháng 5–6',
            number: 3,
            color: 'bg-orange-400',
        },
        {
            title: 'Tình huống nâng cao',
            time: 'Tháng 7',
            number: 4,
            color: 'bg-purple-500',
        },
        {
            title: 'Ôn tập & thực tế',
            time: 'Tháng 8',
            number: 5,
            color: 'bg-blue-500',
        },
    ]

    return (
        <section className="bg-gray-100 py-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">
                📚 Lộ Trình Học Tiếng Việt
            </h2>
            <div className="flex flex-col-reverse items-start max-w-4xl mx-auto">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`w-full ${step.color} text-white px-6 py-4 mb-2 rounded-md shadow-md flex items-center justify-between`}
                    >
                        <div>
                            <div className="text-lg font-semibold">{step.title}</div>
                            <div className="text-sm opacity-90">{step.time}</div>
                        </div>
                        <div className="text-2xl font-bold opacity-60">{step.number}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}