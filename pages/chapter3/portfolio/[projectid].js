import { useRouter } from "next/router";

function ProtfoliProjectPage() {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);
  return (
    <div>
      <h1>Portfolio Project Page</h1>
    </div>
  );
}

export default ProtfoliProjectPage;
