# Next Js
### Section 1
- file based routing system -> app/about/page.tsx
- nested routes -> app/blog/first/page.tsx
- dynamic routes -> product/[productId]/page.tsx -> product/200
- nested dynamic routes -> products/[productId]/reviews/[reviewId] 
- catch all segmets -catch all routes -> docs/[...slug] -> docs/feature/1/review/3/kanchi/ - docs home page

### Section 2
- `not-found.tsx` to make 404 page, does not accept props
- `_lib` private folder nextjs don't include in routing 
- Route Groups - (auth)/forgot-password/page.tsx