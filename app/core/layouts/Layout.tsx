import { ReactNode } from "react"
import { Head } from "blitz"
import NavBar from "app/core/components/NavBar"
import Footer from "app/core/components/Footer"
type LayoutProps = {
  title?: string
  children: ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || "leet-hacker"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className="min-h-screen relative">
        <main>
          <div className="container m-auto bg-black text-white min-h-90vh pb-96">{children}</div>
        </main>
        <div className="-bottom-48 w-full absolute">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout
