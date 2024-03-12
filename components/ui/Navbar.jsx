const Navbar = () => {
  return (
    <nav className="flex justify-between w-full">
      <div className="flex gap-8">
        <a className="font-semibold underline sm:text-3xl" href="#">
          home
        </a>
        <a className="font-semibold no-underline sm:text-3xl" href="#">
          projects
        </a>
      </div>
      <div>
        <a className="font-semibold underline sm:text-3xl" href="#">
          contact us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
