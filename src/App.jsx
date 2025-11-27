import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import OnboardingScreen from './components/Onboarding.jsx'
import Home from './components/Home.jsx'
import Categories from './components/Categories.jsx'
import Products from './components/Products.jsx'
import Pagination from './components/Pagination.jsx'
import Footer from './components/Footer.jsx'
import ProductTabs from './components/ProductTaps.jsx'
import HomeCarousel from './components/HomeCarousel.jsx'
import MainP from './components/mainP.jsx'
import FeaturedProduct from './components/FeaturedProduct.jsx'
import AboutHome from './components/AboutHome.jsx'
import ContactHome from './components/ContactHome.jsx'
import Checkout from './components/Checkout.jsx'
import Details from './components/Details.jsx'
import ProductRotate from './components/productRotate.jsx'

function App() {
  const [showOnboarding, setShowOnboarding] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOnboarding(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  if (showOnboarding) {
    return <OnboardingScreen />
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomeCarousel />
              <MainP />
              <FeaturedProduct />
              <ProductTabs />
            </>
          }
        ></Route>

        <Route
          path="/shop"
          element={
            <>
              <Home />
              <Categories />
              <Products />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <AboutHome />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <ContactHome />
            </>
          }
        />

        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<Details />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
