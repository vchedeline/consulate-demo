import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import FeatureCard from "../components/FeatureCard"
import LeafletMap from "../components/LeafletMap"
import "../styles/index.sass"
import { StaticImage } from "gatsby-plugin-image"

export default function Index({ data }) {
  const loaded = () => {
    return (
      <>
        <div className="Hero">
        </div>
        <div className="MainFeature">
          <h1>Main Feature</h1>
          <div className="features">
            <FeatureCard title="Ambassador" img={`../images/circle-natura.jpg`} />
            <FeatureCard title="Haitian Culture" img="../images/long-trees.jpg" />
            <FeatureCard title="Services" img="../images/circle-natura.jpg" />
          </div>
          <section>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis donec et odio pellentesque. A diam maecenas sed enim ut sem viverra aliquet eget. Vitae ultricies leo integer malesuada nunc vel risus commodo. Sed sed risus pretium quam vulputate dignissim suspendisse in. Nibh venenatis cras sed felis eget velit aliquet sagittis.
            </p>
            <p>

              At risus viverra adipiscing at in tellus integer. Venenatis urna cursus eget nunc scelerisque viverra mauris. Sit amet massa vitae tortor condimentum lacinia quis vel eros. Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Vestibulum rhoncus est pellentesque elit. Turpis massa tincidunt dui ut ornare lectus sit. Integer malesuada nunc vel risus commodo viverra.
            </p>
          </section>
        </div>
        <div className="bg-2"></div>
        <div className="SubFeature">
          <h1>Sub Feature</h1>
          <section>
            <div>
              <StaticImage src="../images/htflag.png" alt="flag" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis donec et odio pellentesque. A diam maecenas sed enim ut sem viverra aliquet eget. Vitae ultricies leo integer malesuada nunc vel risus commodo. Sed sed risus pretium quam vulputate dignissim suspendisse in. Nibh venenatis cras sed felis eget velit aliquet sagittis. Id diam maecenas ultricies mi eget mauris. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Sit amet luctus venenatis lectus magna fringilla urna. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Urna id volutpat lacus laoreet non curabitur gravida arcu. Ullamcorper a lacus vestibulum sed arcu. Cum sociis natoque penatibus et magnis dis parturient montes nascetur. Donec ac odio tempor orci dapibus ultrices in. Vitae justo eget magna fermentum iaculis. Non arcu risus quis varius quam quisque id. Nullam eget felis eget nunc.
            </p>
          </section>
        </div>
        {typeof window !== 'undefined' &&
          <LeafletMap />
        }
      </>
    )
  }


  return (
    <Layout>
      {loaded()}
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />