import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white shadow-2xl backdrop-blur-sm border-b border-purple-500/20">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">📚</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                BookVault
              </h1>
              <p className="text-xs text-gray-400">Premium Collection</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive('/') 
                  ? 'text-purple-300 bg-purple-800/30' 
                  : 'hover:text-purple-300 hover:bg-purple-800/20'
              }`}
            >
              Home
              {isActive('/') && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
              )}
            </Link>
            <Link 
              to="/items" 
              className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive('/items') 
                  ? 'text-purple-300 bg-purple-800/30' 
                  : 'hover:text-purple-300 hover:bg-purple-800/20'
              }`}
            >
              Library
              {isActive('/items') && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
              )}
            </Link>
            <Link 
              to="/add-item" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              + Add Book
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-purple-800/20 transition-colors"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="py-4 space-y-2 border-t border-purple-500/20">
            <Link 
              to="/" 
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                isActive('/') 
                  ? 'text-purple-300 bg-purple-800/30' 
                  : 'hover:text-purple-300 hover:bg-purple-800/20'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/items" 
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                isActive('/items') 
                  ? 'text-purple-300 bg-purple-800/30' 
                  : 'hover:text-purple-300 hover:bg-purple-800/20'
              }`}
            >
              Library
            </Link>
            <Link 
              to="/add-item" 
              onClick={() => setIsMenuOpen(false)}
              className="block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-4 py-3 rounded-lg font-semibold transition-all duration-300 text-center"
            >
              + Add Book
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar