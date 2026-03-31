
export default function TailwindCSS() {
  return (
    <div>
      <h1 className="border m-4">Belajar Tailwind CSS 4</h1>
      <button className="bg-blue-500 text-white px-4 py-2 mx-4 rounded shadow-lg">
        Click Me
      </button>
      
      <Spacing title="card" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque!" />
      <Typography/>
      <BorderRadius/>
      <BackgroundColors/>
      <FlexboxGrid/>
      <ShadowEffects/>
      <PricingCard />




    </div>
  );
}

function Spacing(props){
    return (
        <div className="bg-white shadow-lg p-6 m-4 rounded-lg">
            <h2 className="text-lg font-semibold">{props.title}</h2>
            <p className="mt-2 text-gray-600">{props.content}</p>
        </div>
    )
}
function Typography(){
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold text-blue-600">Tailwind Typography</h1>
            <p className="text-gray-600 text-lg mt-2">Belajar Tailwind sangat menyenangkan dan cepat!</p>
        </div>
    )
}
function BorderRadius(){
    return (
        <button className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-lg"> Klik Saya </button>
    )
}
function BackgroundColors(){
    return(
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Tailwind Colors</h3>
            <p className="mt-2">Belajar Tailwind itu seru dan fleksibel!</p>
        </div>
    )
}
function FlexboxGrid(){
    return (
        <nav className="flex justify-between bg-gray-800 p-4 text-white">
            <h1 className="text-lg font-bold">MyWebsite</h1>
            <ul className="flex space-x-4">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}
function ShadowEffects(){
    return (
        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold">Hover me!</h3>
            <p className="text-gray-600 mt-2">Lihat efek bayangan saat hover.</p>
        </div>
    )
}
function PricingCard() {
  return (
    <div className="m-8 flex justify-center">
      <div className="max-w-sm p-8 bg-white border border-gray-200 rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Pro Plan</h3>
        
        {/* Harga dengan Gradient Text */}
        <div className="flex items-baseline text-gray-900">
          <span className="text-3xl font-semibold">$</span>
          <span className="text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            29
          </span>
          <span className="ml-1 text-xl font-normal text-gray-500">/mo</span>
        </div>

        {/* List Fitur */}
        <ul className="my-7 space-y-4">
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔</span>
            <span className="text-gray-600">Unlimited Projects</span>
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔</span>
            <span className="text-gray-600">24/7 Priority Support</span>
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔</span>
            <span className="text-gray-600">Advanced Analytics</span>
          </li>
          <li className="flex items-center opacity-50">
            <span className="mr-2">✘</span>
            <span className="text-gray-600 line-through">Custom Branding</span>
          </li>
        </ul>

        {/* Tombol dengan Ring Effect */}
        <button className="w-full py-3 px-5 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-center transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
}