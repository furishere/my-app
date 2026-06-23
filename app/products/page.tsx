import Link from "next/link";

export default function ProductList(){
    const productId = 100

    return <div>
        <h1>Products</h1>
        <h2><Link href={"/products/1"}>
        Product 1
        </Link></h2>
        <h2><Link href={`/products/${productId}`}>
        Product {productId}
        </Link></h2>
        <h2>Product 2</h2>
        <h2>Product 3</h2>
        <Link href={"/"}>Home</Link>
    </div>
}