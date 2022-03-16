import { useRouter } from "next/router";
function ClientProjectsPage() {
  const router = useRouter();
  console.log(router.query);
  const projectHandler = () => {
    //...do some stuf
    // router.push("/client/kullu/projecta"); //for history
    // router.replace("/client/kullu/projecta"); // for login
    router.push({
      pathname: "/chapter3/client/[id]/[clientprojectid]",
      query: { id: router.query.id, clientprojectid: "40" },
    });
  };
  return (
    <div>
      <h1>The Project Of a Givent Client</h1>
      <button onClick={projectHandler}>
        Load Project of id: {router.query.id}
      </button>
    </div>
  );
}

export default ClientProjectsPage;
