import fs from "fs";
import Link from "next/link";
import path from "path";

function ProductPage(props) {
  const { products } = props;
  return (
    <>
      <h1>Product Page</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/chapter5/product/${product.id}`}>
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  // const kullu = null;
  // console.log(data);
  if (!data)
    return {
      redirect: {
        destination: "/chapter5/no-data",
      },
    };

  if (data.products.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10, //after each 10 seconds, if request comes, gsp runs and fetches new values.
  };
};
export default ProductPage;
