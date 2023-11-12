import React from "react";
import avatar from "../../../assets/default-avatar.svg"
export function Personn({ name, nickName = "There is no nickname", images }) {
//   const img = images && images[0] && images[0].small && images[0].small.url;
    const img = images ?.[0] ?.small?.url || avatar
  return (
    <div>
      <img src={img} alt={name} style={{width:"50px"}}/>
      <h2>{name}</h2>
      <p>Nick Name: {nickName}</p>
    </div>
  );
}
