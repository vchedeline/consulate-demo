import * as React from "react"
import { Link } from "gatsby"
import "../../styles/header.sass"

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasScrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true });
    } else {
      this.setState({ hasScrolled: false });
    }
  };

  render() {
    return (
      <div className={this.state.hasScrolled ? "Header HeaderScrolled" : "Header"}>
        <div className="HeaderGroup">
          <div id="hd-logo"><Link to="/">Consulat General de la Repiblik D'Ayiti</Link></div>
          <nav>
            <Link to="/about">Enfòmasyon sou Boston</Link>
            <Link to="/haiti">Enfòmasyon sou Ayiti</Link>
            <Link to="/events">Evènman</Link>
            <Link to="/mission">Deklarasyon Misyon</Link>
            <Link to="/help">Kesyon</Link>
          </nav>
        </div>

      </div>
    );
  };
}

export default Header;