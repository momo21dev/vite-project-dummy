import { useEffect, useState } from 'react'

export default function UseProducts() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://dummyjson.com/products?limit=194')
            const data = await res.json()
            setProducts(data.products)
        }

        fetchData()
    }, [])

    return products
}
