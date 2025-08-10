import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const HomeView = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="text-center max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl mb-6 shadow-2xl shadow-purple-500/25">
            <span className="text-4xl">📚</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent leading-tight">
            BookVault
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-6"></div>
        </div>

        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
          Your Premium Digital Library
        </p>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Discover, organize, and manage your book collection with our elegant MERN stack application. 
          Built for book enthusiasts who appreciate both functionality and beautiful design.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Link 
            to="/items" 
            className="group relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 min-w-[200px]"
          >
            <span className="relative z-10 flex items-center justify-center">
              📖 Explore Library
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </Link>
          
          <Link 
            to="/add-item" 
            className="group relative bg-slate-800/50 hover:bg-slate-700/50 border-2 border-purple-500/30 hover:border-purple-400/50 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm min-w-[200px]"
          >
            <span className="relative z-10 flex items-center justify-center">
              ✨ Add New Book
            </span>
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="bg-slate-800/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center mb-6 mx-auto">
            <span className="text-2xl">🔍</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Smart Search</h3>
          <p className="text-gray-400">
            Quickly find any book in your collection with our intelligent search and filtering system.
          </p>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mb-6 mx-auto">
            <span className="text-2xl">⚡</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Lightning Fast</h3>
          <p className="text-gray-400">
            Built with modern technologies for optimal performance and seamless user experience.
          </p>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
          <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-400 rounded-2xl flex items-center justify-center mb-6 mx-auto">
            <span className="text-2xl">🎨</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Beautiful Design</h3>
          <p className="text-gray-400">
            Enjoy a premium, modern interface that makes managing your books a delightful experience.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className={`mt-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/50 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-white mb-8">Why Choose BookVault?</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-gray-400 text-sm">Responsive</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                CRUD
              </div>
              <div className="text-gray-400 text-sm">Operations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                MERN
              </div>
              <div className="text-gray-400 text-sm">Stack</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                ∞
              </div>
              <div className="text-gray-400 text-sm">Possibilities</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeView