import logo from "/TMX_logo.svg";

const Navbar = () => {
  return (
    <header className="bg-white border-b border-[#e0e0e0]">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex flex-1">
          <img src={logo} alt="" className="ml-auto mr-auto" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
