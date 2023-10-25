type HeaderProps = {
  onLogoClick: Function;
}

const PageHeader = (props: HeaderProps) => (
    <div id="header" className="position-absolute">
        {/* <h3 className='align-middle'>Hello World</h3> */}
      <img src="https://in211.communityos.org/publicassets/logo.png" id="navlogo" onClick={(e) => props.onLogoClick()}/>
      {/* <input type="search" className="w-75 mx-4" placeholder="Search for a Service"/> */}
      <div className="input-group mb-3 w-75 d-inline">
        <input type="search" id="searchbar" className="form-control d-inline" placeholder="Search for a Service" aria-label="Search for a service" aria-describedby="searchbutton" />
        <button className="btn btn-outline-primary" type="button" id="searchbutton">Search</button>
      </div>
    </div>
)

export default PageHeader;
