import "./Profile.css";
import { Outlet, NavLink } from "react-router-dom";

export const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-layout">
        <aside className="profile-links">
          <ul>
            <li>
              <NavLink to="" end>
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="cart">Cart</NavLink>
            </li>
            <li>
              <NavLink to="orders">Orders</NavLink>
            </li>
          </ul>
        </aside>

        <main className="profile-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
