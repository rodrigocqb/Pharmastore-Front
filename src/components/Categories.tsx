import { useQuery } from "react-query";
import styled from "styled-components";
import { getCategories } from "../services/categoryServices";

export default function Categories() {
  const { data, isLoading } = useQuery("categories", getCategories);

  if (isLoading) {
    return <></>;
  }

  return (
    <Container>
      <Title>Categorias</Title>
      {data?.map((v) => (
        <h2 key={v._id}>{v.name}</h2>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 14px;
  width: 300px;
  height: fit-content;
  min-height: 400px;
  background-color: #ffffff;
  border-radius: 10px;
  position: sticky;
  top: 130px;
  padding: 12px 32px;
  overflow-y: scroll;

  h2 {
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
  }
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 10px;
  text-align: center;
`;
