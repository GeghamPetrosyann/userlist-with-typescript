import { useContext } from "react";
import { UserContext } from "../context";


export default function UserList() {

  const context = useContext(UserContext);
  if (!context) {
    throw new Error("Context not found");
  }

  const { users, removeUser } = context;

  return (
    <div className="user-list">
      {users.map(user => (
        <div key={user.id} className="user-card">
          <p className="user-name">{user.name}</p>
          <p className="user-age">{user.age}</p>
          <button onClick={() => removeUser(user.id)}>delete</button>
        </div>
      ))}
    </div>
  );
}
