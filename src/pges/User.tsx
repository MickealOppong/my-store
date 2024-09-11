import { Outlet } from "react-router-dom";

const User = () => {
  return <section>
    <div>
      <h2>user</h2>
    </div>
    <div>
      <Outlet />
    </div>

  </section>
}
export default User;