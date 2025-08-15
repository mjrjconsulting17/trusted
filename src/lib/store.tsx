'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export interface Product {
  id: string
  name: string
  price: number
  salePrice?: number
  category: 'men' | 'women' | 'kids'
  type: string
  images: string[]
  sizes: string[]
  inStock: boolean
  description: string
  featured?: boolean
  new?: boolean
}

export interface CartItem {
  product: Product
  quantity: number
  size: string
}

export interface User {
  id: string
  email: string
  name: string
  address?: {
    street: string
    city: string
    state: string
    zip: string
    country: string
  }
  orders?: Order[]
}

export interface Order {
  id: string
  userId: string
  items: CartItem[]
  total: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered'
  createdAt: Date
  shippingAddress: User['address']
}

interface StoreContextType {
  cart: CartItem[]
  user: User | null
  products: Product[]
  addToCart: (product: Product, size: string, quantity?: number) => void
  removeFromCart: (productId: string, size: string) => void
  updateQuantity: (productId: string, size: string, quantity: number) => void
  clearCart: () => void
  getCartTotal: () => number
  getCartCount: () => number
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  signup: (email: string, password: string, name: string) => Promise<boolean>
}

const StoreContext = createContext<StoreContextType | undefined>(undefined)

export const useStore = () => {
  const context = useContext(StoreContext)
  if (!context) {
    throw new Error('useStore must be used within StoreProvider')
  }
  return context
}

// Sample products data
const sampleProducts: Product[] = [
  // Men's Products
  {
    id: 'm1',
    name: 'Street Legends Hoodie',
    price: 285,
    salePrice: 228,
    category: 'men',
    type: 'Hoodies',
    images: ['https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    description: 'Premium heavyweight hoodie with hand-painted graffiti detail. Made from 100% organic cotton.',
    featured: true,
    new: true
  },
  {
    id: 'm2',
    name: 'Brooklyn Dreams Tee',
    price: 125,
    category: 'men',
    type: 'T-Shirts',
    images: ['https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    description: 'Classic streetwear tee with vintage wash and custom graphics.',
    featured: true
  },
  {
    id: 'm3',
    name: 'Urban Warrior Cargo Pants',
    price: 245,
    category: 'men',
    type: 'Pants',
    images: ['https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800'],
    sizes: ['28', '30', '32', '34', '36', '38'],
    inStock: true,
    description: 'Tactical-inspired cargo pants with multiple pockets and adjustable straps.',
    new: true
  },
  {
    id: 'm4',
    name: 'Concrete Jungle Bomber',
    price: 425,
    salePrice: 340,
    category: 'men',
    type: 'Jackets',
    images: ['https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    description: 'Premium bomber jacket with custom embroidery and satin lining.',
    featured: true
  },
  // Women's Products
  {
    id: 'w1',
    name: 'Queens Crown Dress',
    price: 325,
    category: 'women',
    type: 'Dresses',
    images: ['https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    description: 'Elegant streetwear dress with gold chain detailing.',
    featured: true,
    new: true
  },
  {
    id: 'w2',
    name: 'Uptown Girl Crop Top',
    price: 95,
    category: 'women',
    type: 'Tops',
    images: ['https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    description: 'Cropped mesh top with rhinestone logo detailing.',
  },
  {
    id: 'w3',
    name: 'Street Princess Joggers',
    price: 185,
    category: 'women',
    type: 'Pants',
    images: ['https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    description: 'Luxury joggers with side stripe detail and elastic waistband.',
    new: true
  },
  {
    id: 'w4',
    name: 'Diamond District Hoodie',
    price: 265,
    salePrice: 199,
    category: 'women',
    type: 'Hoodies',
    images: ['https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800'],
    sizes: ['XS', 'S', 'M', 'L'],
    inStock: true,
    description: 'Oversized hoodie with crystal embellishments.',
    featured: true
  },
  // Kids Products
  {
    id: 'k1',
    name: 'Mini Legend Tee',
    price: 65,
    category: 'kids',
    type: 'T-Shirts',
    images: ['https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800'],
    sizes: ['2T', '3T', '4T', '5', '6', '7', '8'],
    inStock: true,
    description: 'Kids streetwear tee with fun graphics.',
    new: true
  },
  {
    id: 'k2',
    name: 'Future Star Hoodie',
    price: 125,
    category: 'kids',
    type: 'Hoodies',
    images: ['https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=800'],
    sizes: ['2T', '3T', '4T', '5', '6', '7', '8'],
    inStock: true,
    description: 'Cozy kids hoodie with front pocket.',
    featured: true
  }
]

export const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([])
  const [user, setUser] = useState<User | null>(null)
  const [products] = useState<Product[]>(sampleProducts)

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('trusted-cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }

    const savedUser = localStorage.getItem('trusted-user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('trusted-cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product: Product, size: string, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item =>
        item.product.id === product.id && item.size === size
      )

      if (existing) {
        return prev.map(item =>
          item.product.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }

      return [...prev, { product, size, quantity }]
    })
  }

  const removeFromCart = (productId: string, size: string) => {
    setCart(prev => prev.filter(item =>
      !(item.product.id === productId && item.size === size)
    ))
  }

  const updateQuantity = (productId: string, size: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, size)
      return
    }

    setCart(prev => prev.map(item =>
      item.product.id === productId && item.size === size
        ? { ...item, quantity }
        : item
    ))
  }

  const clearCart = () => {
    setCart([])
  }

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      const price = item.product.salePrice || item.product.price
      return total + (price * item.quantity)
    }, 0)
  }

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0)
  }

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock authentication
    if (email && password) {
      const mockUser: User = {
        id: '1',
        email,
        name: email.split('@')[0],
      }
      setUser(mockUser)
      localStorage.setItem('trusted-user', JSON.stringify(mockUser))
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('trusted-user')
  }

  const signup = async (email: string, password: string, name: string): Promise<boolean> => {
    // Mock signup
    if (email && password && name) {
      const mockUser: User = {
        id: Date.now().toString(),
        email,
        name,
      }
      setUser(mockUser)
      localStorage.setItem('trusted-user', JSON.stringify(mockUser))
      return true
    }
    return false
  }

  return (
    <StoreContext.Provider value={{
      cart,
      user,
      products,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
      getCartCount,
      login,
      logout,
      signup
    }}>
      {children}
    </StoreContext.Provider>
  )
}
