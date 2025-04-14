import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    {
      const error = new Error("An error occurred while fetching the data.");
      error.info = await response.json();
      error.status = response.status;
      throw error;
    }
  }
  return response.json();
};

export default function Character() {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: characters,
    error,
    isLoading,
  } = useSWR(`https://swapi.py4e.com/api/people/${id}`, fetcher);
  // better using = useSWR(id ? `https://swapi.py4e.com/api/people/${id}`: null , fetcher);

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  const { name, height, eye_color, birth_year } = characters;

  return (
    <Layout>
      <Card
        name={name}
        height={height}
        eyeColor={eye_color}
        birthYear={birth_year}
      />
    </Layout>
  );
}
