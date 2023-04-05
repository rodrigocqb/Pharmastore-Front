import styled from "styled-components";
import IProduct from "../../interfaces/IProduct";

export default function Product({
  _id,
  name,
  price,
  image,
}: Omit<IProduct, "category">) {
  return (
    <Container>
      <img src={image} />
      <p>{name}</p>
      <h3>R$ {price},00</h3>
      <CartButton>Adicionar ao Carrinho</CartButton>
    </Container>
  );
}

const Container = styled.div`
  width: 250px;
  min-height: 350px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  padding: 10px;
  border-radius: 10px;

  img {
    width: 200px;
    height: 200px;
  }

  p {
    font-size: 18px;
    font-weight: 700;
  }

  h3 {
    margin-top: 10px;
  }
`;

const CartButton = styled.div`
  margin-top: 10px;
  width: 200px;
  height: 30px;
  border-radius: 12px;
  background-color: #2326f1;
  color: #ffffff;
  font-weight: 700;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
