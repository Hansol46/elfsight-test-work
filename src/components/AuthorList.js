import React from "react";
import { NavLink } from "react-router-dom";

function AuthorList({ users }) {
  return (
    <>
      <h1> Список авторов: </h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <NavLink to={`/author/${user.id}/`} activeClassName="selected">
              {user.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <p>
        {" "}
        <span> * </span> Нажмите на автора, чтобы посмотреть его альбомы
      </p>
    </>
  );
}

export default AuthorList;
