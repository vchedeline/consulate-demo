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
          <div id="hd-logo"><Link to="/">Haitian Consulate of Boston</Link></div>
          <nav>
            <Link to="/about">Information on Boston</Link>
            <Link to="/services">Services</Link>
            <Link to="/events">Events</Link>
            <Link to="/mission">Mission</Link>
            <Link to="/help">FAQ</Link>
          </nav>
        </div>

      </div>
    );
  };
}

export default Header;