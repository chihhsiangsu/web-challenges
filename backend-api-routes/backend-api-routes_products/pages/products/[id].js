import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useSWR(`/api/products/${id}`, fetcher);

  if (isLoading) {
    return <>Product is loading..</>;
  }
  if (!data) {
    return <>No Product Available!</>;
  }

  const { name, description, price, currency, category } = data;
  return (
    <>
      <h1>{name}</h1>
      <h2>{description}</h2>
      <p>
        Price: {price} Currency: {currency}
      </p>
      <p>Category: {category}</p>
    </>
  );
}
