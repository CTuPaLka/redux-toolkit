import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const User = () => {
  const { isLoading, error, users } = useTypedSelector((state) => state.users);

  const { getUsersById } = useActions();

  return (
    <div>
      <button onClick={() => getUsersById(1)}>Get users</button>
      {isLoading ? (
        <div>Loading..</div>
      ) : error ? (
        <div>{error.message}</div>
      ) : users?.name ? (
        <h1>User: {users.name}</h1>
      ) : (
        <h1>User Not Found</h1>
      )}

      <h1>hello</h1>
    </div>
  );
};

export default User;
