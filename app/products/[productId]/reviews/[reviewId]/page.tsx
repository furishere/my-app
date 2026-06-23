import { notFound } from "next/navigation"

export default async function ReviewId({params}:{
    params : Promise<{reviewId : string, productId : string}>
}){
    const productId = (await params).productId
    const reviewId = (await params).reviewId

    if(parseInt(reviewId) > 1000){
        notFound()
    }
    return <div>
        {reviewId} Review of the product {productId}
    </div>
}