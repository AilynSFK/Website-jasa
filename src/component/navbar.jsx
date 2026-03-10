import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-8 mx-0 mt-0 w-full relative">
      <h1 className="text-xl font-bold absolute left-0 top-1/2 transform -translate-y-1/2 ml-4">Adolf Hitler</h1>

      <div className="flex justify-end items-center max-w-8xl">
        <div className="space-x-20 right-0 transform mr-4">
          <Link to="/" className="hover:text-yellow-400">HOME</Link>
          <Link to="/about" className="hover:text-yellow-400">ABOUT US</Link>
          <Link to="/product" className="hover:text-yellow-400">PRODUCT</Link>
          <Link to="/contact" className="hover:text-yellow-400">CONTACT</Link>
        </div>
      </div>
    </nav>
  );
}