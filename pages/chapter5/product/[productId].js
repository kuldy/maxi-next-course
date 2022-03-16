import fs from "fs";
import path from "path";

function ProductDetailPage(props) {
  console.log(props);
  const { product } = props;
  if (!product) return <p>...loading</p>;
  return (
    <>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </>
  );
}
const getData = async () => {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);

  return data;
};
export const getStaticProps = async (context) => {
  const { params } = context;
  const productId = params.productId;
  const data = await getData();
  const product = data.products.find((product) => product.id === productId);
  if (!product) return { notFound: true };
  return {
    props: {
      product,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await getData();
  const ids = data.products.map((product) => product.id);
  const paramsWithIds = ids.map((id) => ({ params: { productId: id } }));
  return {
    paths: paramsWithIds,
    // paths: [
    //   { params: { productId: "p1" } },
    //   { params: { productId: "p2" } },
    //   { params: { productId: "p3" } },
    // ],
    // fallback: false,
    fallback: true,
    // fallback: "blocking",
  };
};
export default ProductDetailPage;
