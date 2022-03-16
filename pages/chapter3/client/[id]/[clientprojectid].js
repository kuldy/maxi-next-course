import { useRouter } from "next/router";
function ClientsSpecificProjectPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>This is Specific project of a Specific Client</h1>
    </div>
  );
}

export default ClientsSpecificProjectPage;
