import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/card.sass"

export default function FeatureCard({ title, img }) {
  return (
    <div className="card">
      <StaticImage src={"../images/htflag.png"} alt={title} />
      <h4>{title}</h4>
    </div>
  )
}