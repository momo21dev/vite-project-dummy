export default function CartInfo({ cart }) {
    let total = cart.reduce((acc, item) => acc + item.price, 0)
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
                            butto
                        </div>
                    ))}
                    <h2 className="font-bold">Total: ${total.toFixed(2)}</h2>
                </div>
            )}
        </div>
    );
}