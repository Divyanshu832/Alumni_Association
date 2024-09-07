import "./StyleSide.css";

function SideBar() {
  return (
    <aside className="sidebar">
      <ul className="flex flex-col gap-5 p-10 text-lg">
        <li>
          <a href="/dashboard">Dashboard</a>
        </li>
        <li>
          <a href="/dashboard/aalumls">Alumni List</a>
        </li>
        <li>
          <a href="/dashboard/astudls">Student List</a>
        </li>
        <li>
          <a href="/dashboard/adonation">Donations</a>
        </li>
        <li>
          <a href="/dashboard/ablog">Blogs</a>
        </li>
        <li>
          <a href="/dashboard/ablog">Events</a>
        </li>
        <li>
          <a href="/dashboard/ajob">Job Board</a>
        </li>
      </ul>
    </aside>
  );
}

export default SideBar;
