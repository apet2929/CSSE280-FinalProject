type HeaderProps = {
  onLogoClick: Function;
}

const PageHeader = (props: HeaderProps) => (
  <nav id="header" className="navbar py-0">
    <div className="container mx-0 px-0 justify-content-start">
      <img src="https://in211.communityos.org/publicassets/logo.png" id="navlogo" className="navbar-brand mx-2 py-0" onClick={(e) => props.onLogoClick()}/>
   </div>
  </nav>
)

export default PageHeader;
