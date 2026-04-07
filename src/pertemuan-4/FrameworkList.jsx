import frameworkData from "./framework.json";

export default function FrameworkList() {
    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
                Favorite Frameworks
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {frameworkData.map((item) => (
                    <div 
                        key={item.id} 
                        className="group relative border-none p-6 rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                    >
                        {/* Garis warna-warni di bagian atas kartu */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>

                        <h2 className="text-xl font-black text-gray-800 group-hover:text-indigo-600 transition-colors">
                            {item.name}
                        </h2>

                        <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                            {item.description}
                        </p>

                        <div className="mt-4 p-3 bg-indigo-50 rounded-xl border border-indigo-100">
                            <p className="text-xs text-indigo-900 uppercase tracking-wider font-bold">
                                Developer
                            </p>
                            <p className="text-sm font-semibold text-indigo-700">
                                {item.details.developer} <span className="text-gray-400 font-normal">({item.details.releaseYear})</span>
                            </p>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {item.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="bg-gradient-to-br from-gray-100 to-gray-200 text-gray-600 text-[10px] font-bold uppercase px-3 py-1 rounded-full border border-gray-300 shadow-sm"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        <div className="mt-6 flex justify-end">
                            <a
                                href={item.details.officialWebsite}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-lg hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-200"
                            >
                                Visit Website
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}