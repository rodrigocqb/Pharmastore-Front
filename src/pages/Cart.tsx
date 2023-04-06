import { useQuery } from "react-query";
import styled from "styled-components";
import CartItem from "../components/Cart/CartItem";
import Header from "../components/Header";
import { getCart } from "../services/cartServices";

export default function Cart() {
  const { data, isLoading } = useQuery("cart", getCart);

  if (isLoading) {
    return <></>;
  }

  function sumValues() {
    let sum = 0;
    if (data) {
      data.forEach((v) => {
        sum += v.product.price;
      });
    }
    return sum;
  }

  return (
    <>
      <Header />
      <main>
        <Container>
          {data?.map((v) => (
            <CartItem
              key={v._id}
              name={v.product.name}
              price={v.product.price}
              image={v.product.image}
              _id={v._id}
            />
          ))}
          {data && <p>Total: R${sumValues()},00</p>}
        </Container>
      </main>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  p {
    margin-top: 10px;
    font-size: 18px;
    font-weight: 700;
  }
`;
