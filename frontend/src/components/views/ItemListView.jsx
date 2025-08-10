import { Link } from 'react-router-dom'
import { useState } from 'react'

const ItemListView = ({ items, onDelete }) => {
  const [hoveredCard, setHoveredCard] = useState(null)

  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full flex items-center justify-center mx-auto mb-8">
          <span className="text-6xl opacity-50">📚</span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">No Books Found</h3>
        <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
          Your library is empty. Start building your collection by adding your first book.
        </p>
        <Link 
          to="/add-item" 
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 inline-block"
        >
          ✨ Add Your First Book
        </Link>
      </div>
    )
  }

  const getCategoryColor = (category) => {
    const colors = {
      'Fiction': 'from-blue-400 to-purple-400',
      'Non-Fiction': 'from-green-400 to-teal-400',
      'Science': 'from-cyan-400 to-blue-400',
      'Technology': 'from-purple-400 to-pink-400',
      'Biography': 'from-orange-400 to-red-400',
      'History': 'from-yellow-400 to-orange-400',
      'Other': 'from-gray-400 to-slate-400'
    }
    return colors[category] || colors['Other']
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((item, index) => (
        <div 
          key={item._id} 
          className={`group relative bg-slate-800/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${
            hoveredCard === item._id ? 'z-10' : ''
          }`}
          onMouseEnter={() => setHoveredCard(item._id)}
          onMouseLeave={() => setHoveredCard(null)}
          style={{
            animationDelay: `${index * 100}ms`
          }}
        >
          {/* Category Badge */}
          <div className={`absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br ${getCategoryColor(item.category)} rounded-2xl flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300`}>
            <span className="text-white text-xs font-bold">
              {item.category.slice(0, 3).toUpperCase()}
            </span>
          </div>

          {/* Stock Status */}
          <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
            item.inStock 
              ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
              : 'bg-red-500/20 text-red-400 border border-red-500/30'
          }`}>
            {item.inStock ? '✓ In Stock' : '✗ Out of Stock'}
          </div>

          {/* Book Content */}
          <div className="mt-8">
            <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-purple-300 transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-purple-300 mb-3 font-medium">by {item.author}</p>
            <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
              {item.description}
            </p>
            
            {/* Price */}
            <div className="flex justify-between items-center mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                ${item.price}
              </span>
              <span className="text-xs text-gray-500">
                {new Date(item.publishedDate).getFullYear()}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Link 
                to={`/items/${item._id}`}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-center py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 block"
              >
                📖 View Details
              </Link>
              
              <div className="flex space-x-2">
                <Link 
                  to={`/edit-item/${item._id}`}
                  className="flex-1 bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600/50 hover:border-slate-500/50 text-white text-center py-2.5 rounded-lg font-medium transition-all duration-300"
                >
                  ✏️ Edit
                </Link>
                <button 
                  onClick={() => onDelete(item._id)}
                  className="flex-1 bg-red-600/20 hover:bg-red-600/30 border border-red-500/30 hover:border-red-400/50 text-red-400 hover:text-red-300 py-2.5 rounded-lg font-medium transition-all duration-300"
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          </div>

          {/* Hover Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
      ))}
    </div>
  )
}

export default ItemListView