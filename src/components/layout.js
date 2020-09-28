import React from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import config from "../config"

const Layout = ({ children }) => {
  const router = useRouter()
  const isRootPath = router.asPath === "/"
  const title = config.title
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link href="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" href="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://nextjs.org">Next.js</a>
      </footer>
    </div>
  )
}

export default Layout
