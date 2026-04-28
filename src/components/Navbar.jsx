import { NavLink } from "react-router";

function Navbar() {
  const navLinks = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Form",
      href: "/form",
    },
    {
      title: "Data",
      href: "/data",
    },
  ];
  return (
    <header className="bg-neutral-100 shadow-xl">
      <div className="flex justify-between h-20 items-center max-w-10/12 mx-auto">
        <h1>🎉🎉🎉</h1>
        <nav>
          <ul className="flex gap-8">
            {navLinks.map((el) => {
              return (
                <li key={el.href}>
                  <NavLink to={el.href}>{el.title}</NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        <button>Kuch nai Button</button>
      </div>
    </header>
  );
}

export default Navbar;
