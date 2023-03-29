import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import SubHeader from "../components/Layouts/SubHeader"
import LeafletMap from "../components/LeafletMap"

const AboutPage = () => (
  <Layout>
    <div className="sub-page-container">
      <SubHeader />
      <p><Link to="/">Lakay</Link> {">>"} Enfòmasyon sou Boston</p>
      <div className="sub-page-content">
        <h1>Enfòmasyon sou Boston</h1>

        {typeof window !== 'undefined' &&
          <LeafletMap />
        }
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis donec et odio pellentesque. A diam maecenas sed enim ut sem viverra aliquet eget. Vitae ultricies leo integer malesuada nunc vel risus commodo. Sed sed risus pretium quam vulputate dignissim suspendisse in. Nibh venenatis cras sed felis eget velit aliquet sagittis.</p>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis donec et odio pellentesque. A diam maecenas sed enim ut sem viverra aliquet eget. Vitae ultricies leo integer malesuada nunc vel risus commodo. Sed sed risus pretium quam vulputate dignissim suspendisse in. Nibh venenatis cras sed felis eget velit aliquet sagittis.</p>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis donec et odio pellentesque. A diam maecenas sed enim ut sem viverra aliquet eget. Vitae ultricies leo integer malesuada nunc vel risus commodo. Sed sed risus pretium quam vulputate dignissim suspendisse in. Nibh venenatis cras sed felis eget velit aliquet sagittis.</p>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="About Boston" />

export default AboutPage
