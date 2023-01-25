import React from "react";
import s from "./Users.module.css";
import usersPhoto from "./../../assets/defaultPhoto.png";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  // function changeNumber() {
  //   let number=0
  //   console.log(`number внутри функции changeNumber: ${number}`);
  //   return function(sum){
  //     number += sum
  //     return console.log(`number внутри анонимной функции: ${number}`);

  //   }
  // }

  // const change = changeNumber()
  // change(10)
  // change(20)
  // change(30)
  // change(-5)

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
                (props.currentPage === p && s.selected + " " + s.pagesdiv) ||
                s.pages
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
                <NavLink to={"/profile/" + u.id}>
                  <img
                    src={u.photos.small != null ? u.photos.small : usersPhoto}
                    className={s.usersPhoto}
                    alt="Фоточка"
                  />
                </NavLink>
              </div>
              <div>
                {u.followed ? (
                  <button
                    disabled={props.followingInProgress}
                    onClick={() => {
                      props.toggleFollowingProgress(true, u.id);
                      usersAPI.setUnfollow.then((data) => {
                        if (data.resultCode == 1) {
                          props.follow(u.id);
                        }
                        props.toggleFollowingProgress(false, u.id);
                      });

                      props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress}
                    onClick={() => {
                      props.toggleFollowingProgress(true, u.id);
                      usersAPI.setFollow(u.id).then((data) => {
                        if (data.resultCode == 0) {
                          props.follow(u.id);
                        }
                        props.toggleFollowingProgress(false, u.id);
                      });
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
