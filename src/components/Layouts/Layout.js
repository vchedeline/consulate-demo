import * as React from "react"
import Header from "./Header"
import "../../styles/layout.sass"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <>
      <Header language={"en"} />
      <main>{children}</main>
      <Footer />
    </>
  )
}
