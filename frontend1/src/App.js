import { Navbar, Sidebar, Footer } from "./components"
import { BrowserRouter as Router, Routes, Route, useLocation, matchPath } from "react-router-dom"
import { AuthWrapper, Cart, Checkout, Error, Favourite, Home, PrivateRoute, Products, Profile, SingleProduct, Preoder } from "./pages"


const App = () => {
  const location = useLocation()
  const hidenNavbarRoutes = ["/cart"]
  const hidenFooterRoutes = ["/products/:id"]
  const shouldHideFooter = () => {
    const { pathname } = useLocation()
    return hidenFooterRoutes.some((route) => matchPath(route, pathname))

  }
  return (
    <Router>
      {!hidenNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Sidebar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<SingleProduct />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/favourite' element={<Favourite />} />
        <Route path='/preorder' element={<Preoder />} />
        <Route path='*' element={<Error />} />
      </Routes>
      {!shouldHideFooter && <Footer />}
    </Router>
  );
}
export default App