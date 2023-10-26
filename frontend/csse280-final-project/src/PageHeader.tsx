type HeaderProps = {
  onLogoClick: Function;
}

const PageHeader = (props: HeaderProps) => (
  <nav id="header" className="navbar py-0">
    <div className="container mx-0 px-0 justify-content-start">
      <img src="https://in211.communityos.org/publicassets/logo.png" id="navlogo" className="navbar-brand mx-2 py-0" onClick={(e) => props.onLogoClick()}/>
        <form className="d-flex mx-4 w-auto" role="search">
          <input className="form-control me-4" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-primary" id="searchbutton" type="submit">Search</button>
        </form>
   </div>
  </nav>
)

export default PageHeader;
