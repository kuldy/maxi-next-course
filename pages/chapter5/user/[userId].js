function UserDetailsPage(props) {
  return (
    <>
      <h1>User Details Page</h1>
      <p>userId: {props.id}</p>
    </>
  );
}
export default UserDetailsPage;

export const getServerSideProps = async (context) => {
  const { params, req, res } = context;
  const userId = params.userId;
  return {
    props: {
      id: userId,
    },
  };
};
