import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoCartSharp } from "react-icons/io5"

export default function Header() {
  const navigate = useNavigate();

  return (
    <Container>
      <h1 onClick={() => navigate("/")}>Pharmastore</h1>
      <IoCartSharp onClick={() => navigate("/cart")} />
    </Container>
  );
}

const Container = styled.header`
  width: 100%;
  height: 80px;
  background-color: #2326f1;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px 0 25px;

  h1 {
    font-size: 40px;
    font-weight: 700;
    background-color: #ff4d4d;
    width: fit-content;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
  }

  svg {
    font-size: 30px;
    cursor: pointer;
  }
`;
