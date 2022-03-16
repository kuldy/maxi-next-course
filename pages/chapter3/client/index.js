import Link from "next/link";

function ClientPage() {
  const clients = [
    {
      id: "max",
      name: "maxmilian",
    },
    {
      id: "menu",
      name: "menui",
    },
  ];
  return (
    <div>
      <h1>The Client Page</h1>
      {/* <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/client/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul> */}
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/chapter3/client/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientPage;
