import "./Info.css";

export const Info = () => {
  // Dummy data (as if coming from Spring Boot)
  const userInfo = {
    firstName: "John",
    secondName:"Doe",
    email: "john.doe@example.com",
    role: "ROLE_USER",
    joinedAt: "2024-06-15",
  };

  return (
    <div className="info-container">
      <h2 className="info-title">Profile Information</h2>

      <div className="info-card">
        <div className="info-row">
          <span className="label">Name</span>
          <span className="value">{userInfo.firstName + " " + userInfo.secondName} </span>
        </div>

        <div className="info-row">
          <span className="label">Email</span>
          <span className="value">{userInfo.email}</span>
        </div>

        <div className="info-row">
          <span className="label">Phone</span>
          <span className="value">{userInfo.phone}</span>
        </div>

        <div className="info-row">
          <span className="label">Role</span>
          <span className="value">{userInfo.role}</span>
        </div>

        <div className="info-row">
          <span className="label">Joined</span>
          <span className="value">{userInfo.joinedAt}</span>
        </div>
      </div>
    </div>
  );
};
