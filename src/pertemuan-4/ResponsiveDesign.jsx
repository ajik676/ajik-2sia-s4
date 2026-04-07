import React from 'react';

// 1. Child Component: ResponsiveText
function ResponsiveText() {
    return (
        <div className="mb-8">
            <h2 className="text-xl font-bold mb-2">1. Responsive Text Size</h2>
            <p className="text-sm md:text-lg lg:text-xl xl:text-2xl mb-4 p-4 bg-white rounded-lg shadow-sm">
                Coba lakukan zoom in atau zoom out. Perhatikan bahwa ukuran teks akan berubah 
                sesuai lebar layar. Teks ini menggunakan prefix breakpoint (md:, lg:, xl:).
            </p>
        </div>
    );
}

// 2. Child Component: ResponsiveWidth
function ResponsiveWidth() {
    return (
        <div className="mb-8">
            <h2 className="text-xl font-bold mb-2">2. Responsive Width & Flex</h2>
            <div className="mb-4 text-gray-700">
                <p>Coba ubah ukuran layar browser kamu:</p>
                <p><strong>md:w-1/2</strong> → Saat layar mencapai ukuran tablet (768px), lebar kotak menjadi 50%.</p>
                <p><strong>md:flex-row</strong> → Pada layar kecil (mobile) kolom tersusun vertikal, pada tablet menjadi horizontal.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="bg-red-400 w-full md:w-1/2 p-4 text-white font-bold rounded-lg text-center">Kolom 1</div>
                <div className="bg-blue-400 w-full md:w-1/2 p-4 text-white font-bold rounded-lg text-center">Kolom 2</div>
            </div>
        </div>
    );
}

// 3. Child Component: ResponsiveLayout (Grid)
function ResponsiveLayout() {
    return (
        <div className="mb-8">
            <h2 className="text-xl font-bold mb-2">3. Responsive Grid Layout</h2>
            <p className="mt-4 mb-2">Kotak-kotak di bawah ini menggunakan <strong>Grid Layout</strong>:</p>
            <ul className="list-disc ml-5 mb-4 text-sm text-gray-600">
                <li><strong>grid-cols-1</strong>: Mobile (Default)</li>
                <li><strong>sm:grid-cols-2</strong>: Tablet Kecil</li>
                <li><strong>md:grid-cols-3</strong>: Tablet Besar</li>
                <li><strong>lg:grid-cols-4</strong>: Laptop</li>
            </ul>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="bg-blue-500 p-6 text-white font-bold rounded-lg text-center shadow-md">Box 1</div>
                <div className="bg-blue-500 p-6 text-white font-bold rounded-lg text-center shadow-md">Box 2</div>
                <div className="bg-blue-500 p-6 text-white font-bold rounded-lg text-center shadow-md">Box 3</div>
                <div className="bg-blue-500 p-6 text-white font-bold rounded-lg text-center shadow-md">Box 4</div>
            </div>
        </div>
    );
}

// === PARENT COMPONENT ===
export default function ResponsiveDesign() {
    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <div className="max-w-6xl mx-auto">
                <header className="mb-10 text-center">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-600">
                        📁 Responsive & Grid Design
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Latihan penerapan Breakpoint Tailwind CSS (sm, md, lg, xl, 2xl)
                    </p>
                </header>

                <hr className="mb-10 border-gray-300" />

                {/* Memanggil semua child components */}
                <ResponsiveText />
                <ResponsiveWidth />
                <ResponsiveLayout />
            </div>
        </div>
    );
}