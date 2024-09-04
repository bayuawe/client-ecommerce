import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "products", text: "products" },
  { id: 2, url: "abouts", text: "abouts" },
  { id: 3, url: "orders", text: "orders" },
];

const NavList = () => {
  return links.map((link) => {
    const { id, url, text } = link;
    return (
      <li key={id}>
        <NavLink className="capitalize" to={url}>
          {text}
        </NavLink>
      </li>
    );
  });
};

export default NavList;
