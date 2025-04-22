import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const { data, isLoading } = useSWR(`/api/random-character`, fetcher);

  if (isLoading) {
    return <>Data is loading..</>;
  }

  return (
    <h1>
      {data.firstName}
      {data.lastName}
    </h1>
  );
}
