import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <main style={{ padding: "40px" }}>
      <h1>{slug}</h1>
      <p>Product details yahan show honge</p>
    </main>
  );
};

export default ProductPage;
