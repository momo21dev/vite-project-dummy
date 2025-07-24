import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div className="flex justify-between items-center p-6 bg-blue-600 text-white">
            <h1 className="text-3xl font-bold">Dummy Store</h1>
            <Link to="/cart" className="text-lg underline hover:text-gray-300">
                🛒 Cart
            </Link>
        </div>
    )
}
