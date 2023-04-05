import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import IProduct from "../../interfaces/IProduct";
import { getAllProducts } from "../../services/productServices";
import Product from "./Product";

export default function ProductList() {
  const [currentList, setCurrentList] = useState<IProduct[]>([]);

  const { data, isLoading } = useQuery("products", getAllProducts, {
    onSuccess: () => {
      if (data) {
        setCurrentList(data);
      }
    },
  });

  useEffect(() => {
    if (data !== undefined) {
      setCurrentList(data);
    }
  }, [data]);

  if (isLoading) {
    return <></>;
  }

  return (
    <Container>
      {currentList?.map((v) => (
        <Product
          key={v._id}
          _id={v._id}
          name={v.name}
          image={v.image}
          price={v.price}
          category={v.category}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  margin: 20px 0 90px 0;
  display: flex;
  flex-wrap: wrap;
  min-width: calc(100vw - 350px);
  gap: 10px;
`;
