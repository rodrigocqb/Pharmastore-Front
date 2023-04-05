import { useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Product from "../components/Home/Product";
import { searchProducts } from "../services/productServices";

export default function SearchResult() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const navigate = useNavigate();

  useEffect(() => {
    if (!query) {
      navigate("/");
    }
  }, []);

  const { data, isLoading } = useQuery(`query${query}`, () =>
    searchProducts(query),
  );

  if (isLoading) {
    return <></>;
  }

  return (
    <>
      <Header />
      <main>
        <Container>
          {data?.length === 0 && <h1>Não há resultados para essa busca</h1>}
          {data?.map((v) => (
            <Product
              key={v._id}
              _id={v._id}
              name={v.name}
              image={v.image}
              price={v.price}
            />
          ))}
        </Container>
      </main>
    </>
  );
}

const Container = styled.div`
  margin: 20px 0 90px 0;
  display: flex;
  flex-wrap: wrap;
  min-width: calc(100vw - 350px);
  gap: 10px;
`;
