const Navbar = () => {
  return(
    <div className="navbar bg-base-100 container">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a>Home</a></li>
          <li><a href={'#career_section'}>Career Path</a></li>
          <li><a href={'#education_section'}>Learning Path</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;