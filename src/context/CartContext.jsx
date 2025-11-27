import React, { createContext, useContext, useState, useMemo } from 'react'

// TODO: Cart is in-memory only. Add persistence or backend sync as needed.
const CartContext = createContext(null)

export function useCart() {
  return useContext(CartContext)
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([]) // {id, product, qty}
  const [wishlist, setWishlist] = useState([]) // array of products

  const addItem = (product, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id)
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, qty: i.qty + qty } : i
        )
      }
      return [...prev, { id: product.id, product, qty }]
    })
  }

  const removeItem = (id) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }

  const updateQty = (id, qty) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i))
    )
  }

  const clearCart = () => setItems([])

  const addToWishlist = (product) => {
    setWishlist((prev) => {
      if (prev.find((p) => p.id === product.id)) return prev
      return [...prev, product]
    })
  }

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((p) => p.id !== id))
  }

  const toggleWishlist = (product) => {
    if (wishlist.find((p) => p.id === product.id))
      removeFromWishlist(product.id)
    else addToWishlist(product)
  }

  const isWishlisted = (id) => wishlist.some((p) => p.id === id)

  const wishlistCount = useMemo(() => wishlist.length, [wishlist])

  const totalItems = useMemo(
    () => items.reduce((s, i) => s + i.qty, 0),
    [items]
  )
  const totalPrice = useMemo(
    () =>
      items.reduce(
        (s, i) =>
          s + Number(i.product.newPrice ?? i.product.price ?? 0) * i.qty,
        0
      ),
    [items]
  )

  const value = {
    items,
    addItem,
    removeItem,
    updateQty,
    clearCart,
    wishlist,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    isWishlisted,
    wishlistCount,
    totalItems,
    totalPrice,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartContext
