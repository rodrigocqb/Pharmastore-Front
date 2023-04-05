import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoCartSharp, IoSearch } from "react-icons/io5";
import { useState } from "react";

export default function Header() {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  function executeSearch() {
    if (query !== "") {
      navigate(`/search?q=${query}`);
    }
  }

  return (
    <Container>
      <h1 onClick={() => navigate("/")}>Pharmastore</h1>
      <Searchbar>
        <input
          name="searchbar"
          type="text"
          placeholder="O que você quer encontrar?"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
        />
        <IoSearch onClick={executeSearch} />
      </Searchbar>
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

const Searchbar = styled.div`
  width: 50vw;
  max-width: 600px;
  height: 58px;
  position: relative;

  input {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    outline: none;
    font-size: 20px;
    padding-left: 15px;
    padding-right: 40px;
    border: 0px;
    font-weight: 400;
    &::placeholder {
      color: #cecece;
    }
  }

  svg {
    font-size: 30px;
    fill: #cecece;
    position: absolute;
    right: 10px;
    top: 14px;
    cursor: pointer;
  }
`;
