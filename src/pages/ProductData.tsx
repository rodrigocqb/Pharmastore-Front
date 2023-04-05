import { useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import { CartButton } from "../components/Home/Product";
import { getProductData } from "../services/productServices";

export default function ProductData() {
  const { id } = useParams() as { id: string };
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      navigate("/");
    }
  }, []);

  const { data, isLoading } = useQuery(`product${id}`, () =>
    getProductData(id),
  );

  if (isLoading) {
    return <></>;
  }

  return (
    <>
      <Header />
      <main>
        <Container>
          <img
            src={data?.image}
            alt=""
          />
          <Details>
            <h1>{data?.name}</h1>
            <p>Categoria: {data?.category.name}</p>
            <span>R$ {data?.price},00</span>
            <CartButton>Adicionar ao Carrinho</CartButton>
          </Details>
        </Container>
      </main>
    </>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;

  img {
    width: 500px;
    height: 500px;
    border-radius: 12px;
  }
`;

const Details = styled.div`
    margin-left: 40px;
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 40px;
        font-weight: 600;
        margin-bottom: 20px;
    }

    p {
        font-size: 22px;
        font-weight: 500;
        margin-bottom: 30px;
    }

    span {
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 40px;
    }
`