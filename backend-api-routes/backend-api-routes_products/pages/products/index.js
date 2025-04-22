import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function AllProducts() {
  const { data, isLoading } = useSWR(`/api/products`, fetcher);
  console.log(data);
  if (isLoading) {
    return <>Products is loading</>;
  }
  if (!data) {
    return <>No Products</>;
  }
  return (
    <ul>
      {data.map((product) => (
        <>
          <li key={product.id}>{product.name}</li>
          <p>Category: {product.category}</p>
        </>
      ))}
    </ul>
  );
}
