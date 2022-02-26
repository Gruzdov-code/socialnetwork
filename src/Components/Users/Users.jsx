import React from "react";
import s from "./Users.module.css";
import usersPhoto from "./../../assets/defaultPhoto.png";

const Users = (props) => {
  let fives = new Number(5);
  console.log(fives);

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <div
              onClick={(e) => {
                props.onPageChanged(p);
              }}
              className={
                props.currentPage === p && s.selected + " " + s.pagesdiv
              }
            >
              {p}{" "}
            </div>
          );
        })}
      </div>
      <div>
        {props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <img
                  src={u.photos.small != null ? u.photos.small : usersPhoto}
                  className={s.usersPhoto}
                  alt="Фоточка"
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>

                <div>{u.status}</div>
              </span>
              <span>
                <div>{"u.location.city"}</div>
                <div>{"u.location.country"}</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Users;
