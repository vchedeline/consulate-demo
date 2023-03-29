import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: `50px`,
        fontSize: `16px`,
      }}
    >
      <div className="footer-top">
        <div id="contact">
          <h3>Enfòmasyon pou kontakte</h3>
          <p>333 Washington St., Suite 851 <br /> Boston, MA 02108 <br />
            Phone: (617) 266-3660 || (617) 266-3707 <br />
            Fax: (617) 778-6898 <br />
            Email: Cg.boston@diplomatie.ht<br />
          </p>
        </div>
        <div id="hours">
          <h3>Orè de operasyon</h3>
          <p>Lendi-Vandredi: 9:00a.m. - 5:00p.m.</p>
        </div>
        <div id="jurisdiction">
          <h4>Jiridiksyon</h4>
          <p>Main <br /> New Hampshire <br /> Rhode Island <br /> Vermont</p>
        </div>
      </div>
      <div className="footer-bottom">
        <StaticImage src="../../images/ht-sil.png" alt="ht-flag" />
        <p>
          © {new Date().getFullYear()} &middot; All Rights Reserved
          <Link to="/"> Haitian Consulate of Boston</Link>
        </p>
      </div>
    </footer >
  )
}