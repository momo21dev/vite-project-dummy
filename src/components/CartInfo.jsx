import { useNavigate } from "react-router-dom";


export default function CartInfo({ cart, setCart }) {
    const navigate = useNavigate()
    let total = cart.reduce((acc, item) => acc + item.price, 0)
    const handleDelete = (indexToDelete) => {
        setCart(cart.filter((_, index) => index !== indexToDelete));
    }
    const handleConfirm = () => {
        navigate("/confirm", { state: { total } })
    }
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">🛒 Your Cart</h1>

            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="space-y-4">
                    {cart.map((item, index) => (
                        <div key={index} className="border p-2 rounded shadow">
                            <h2>{item.title}</h2>
                            <p>${item.price}</p>
                            <button
                                className="bg-red-700 rounded-2xl p-1"
                                onClick={() => handleDelete(index)}>delete</button>
                        </div>
                    ))}
                    <h2 className="font-bold">Total: ${total.toFixed(2)}</h2>
                    <button className="bg-blue-600 rounded-3xl p-2" onClick={handleConfirm}>Confirm</button>
                </div>
            )}
        </div>
    );
}