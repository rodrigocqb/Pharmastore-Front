import styled from "styled-components";
import { IoTrashSharp } from "react-icons/io5";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { deleteCartItem } from "../../services/cartServices";
import { ICartItem } from "../../interfaces/ICartItem";

export default function CartItem({
  _id,
  name,
  image,
  price,
}: {
  _id: string;
  name: string;
  image: string;
  price: number;
}) {
  const [disabled, setDisabled] = useState(false);

  const queryClient = useQueryClient();

  const mutation = useMutation(() => deleteCartItem(name), {
    onSuccess: () => {
      const data: ICartItem[] | undefined = queryClient.getQueryData("cart");
      queryClient.setQueryData(
        "cart",
        data?.filter((v) => v._id !== _id),
      );
    },
  });

  async function deleteFromCart() {
    if (disabled) return;
    setDisabled(true);
    await mutation.mutateAsync();
    setDisabled(false);
  }

  return (
    <Container>
      <Information>
        <img
          src={image}
          alt=""
        />
        <div>
          <h1>{name}</h1>
          <p>R$ {price},00</p>
        </div>
      </Information>
      <IoTrashSharp onClick={deleteFromCart} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  padding: 25px;
  background-color: #ffffff;
  border-radius: 10px;

  svg {
    font-size: 30px;
    color: #ff3838;
    cursor: pointer;
  }
`;

const Information = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  img {
    width: 200px;
    height: 200px;
  }

  h1 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
  }
`;
