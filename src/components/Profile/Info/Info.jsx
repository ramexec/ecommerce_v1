import { useAuth } from "../../../services/Auth";
import "./Info.css";

export const Info = () => {

  const auth = useAuth();
  
  return (
    <div className="info-container">
      <h2 className="info-title">Profile Information</h2>

      <div className="info-card">
        <div className="info-row">
          <span className="label">Name</span>
          <span className="value">{auth?.user?.firstName + " " + auth?.user?.secondName} </span>
        </div>

        <div className="info-row">
          <span className="label">Email</span>
          <span className="value">{auth?.user?.email}</span>
        </div>

        <div className="info-row">
          <span className="label">Phone</span>
          <span className="value">{auth?.user?.phone}</span>
        </div>

        <div className="info-row">
          <span className="label">Role</span>
          <span className="value">{auth?.user?.role}</span>
        </div>

        <div className="info-row">
          <span className="label">Joined</span>
          <span className="value">{auth?.user?.createdAt}</span>
        </div>
      </div>
    </div>
  );
};
