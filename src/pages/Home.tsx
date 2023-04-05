import Header from "../components/Header";
import Categories from "../components/Home/Categories";
import ProductList from "../components/Home/ProductList";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ProductList />
        <Categories />
      </main>
    </>
  );
}
