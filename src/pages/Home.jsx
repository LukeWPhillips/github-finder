import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";

function Home() {
  return (
    <>
      {/* search component */}
      <UserResults />
      <UserSearch />
    </>
  );
}

export default Home;
