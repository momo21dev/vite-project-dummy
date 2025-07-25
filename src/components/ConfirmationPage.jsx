import { useLocation } from "react-router-dom";

export default function Confirmation() {
    const location = useLocation();
    const total = location.state?.total || 0;
    return (
        <div className="p-4 max-w-md mx-auto bg-white rounded shadow">
            <h1 className="text-2xl font-bold mb-4">💳 Confirm Your Order</h1>
            <p className="mb-4 font-medium">Total: ${total.toFixed(2)}</p>

            <form className="space-y-4">
                <input
                    type="email"
                    placeholder="Your E-mail..."
                    className="w-full border p-2 rounded"
                    required
                />
                <input
                    type="text"
                    placeholder="First Name..."
                    className="w-full border p-2 rounded"
                    required
                />
                <input
                    type="text"
                    placeholder="Last Name..."
                    className="w-full border p-2 rounded"
                    required
                />
                <input
                    type="tel"
                    placeholder="Phone Number..."
                    className="w-full border p-2 rounded"
                    required
                />

                <div className="space-y-2">
                    <p className="font-medium">Payment Method:</p>
                    <label className="flex items-center">
                        <input type="radio" name="payment" value="visa" className="mr-2" required />
                        Visa Card
                    </label>
                    <label className="flex items-center">
                        <input type="radio" name="payment" value="cash" className="mr-2" required />
                        Cash
                    </label>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    Confirm
                </button>
            </form>
        </div>
    );
}
