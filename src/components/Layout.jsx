import React from "react";
import { Outlet, Link } from "react-router-dom";
import styles from "../css/Layout.css";

export default function Layout() {
  return (
    <>
      <nav className="Menu">
        <section>
          <ul className="Menu_list">
            <li className="Menu_item">
              <Link className="Link Home" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="Link Favourite" to="/favourite">
                Favourite
              </Link>
            </li>
          </ul>
        </section>
      </nav>

      <Outlet />
    </>
  );
}
