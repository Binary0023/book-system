import { useState, useEffect } from 'react'

const ItemFormView = ({ item, onSubmit, isEditing = false }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    price: '',
    category: 'Fiction',
    publishedDate: '',
    inStock: true
  })

  const [errors, setErrors] = useState({})
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    if (item && isEditing) {
      setFormData({
        title: item.title || '',
        author: item.author || '',
        description: item.description || '',
        price: item.price || '',
        category: item.category || 'Fiction',
        publishedDate: item.publishedDate ? item.publishedDate.split('T')[0] : '',
        inStock: item.inStock !== undefined ? item.inStock : true
      })
    }
  }, [item, isEditing])

  const validateForm = () => {
    const newErrors = {}

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required'
    }

    if (!formData.author.trim()) {
      newErrors.author = 'Author is required'
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required'
    }

    if (!formData.price || formData.price <= 0) {
      newErrors.price = 'Price must be greater than 0'
    }

    if (!formData.publishedDate) {
      newErrors.publishedDate = 'Published date is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit(formData)
    }
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const categories = ['Fiction', 'Non-Fiction', 'Science', 'Technology', 'Biography', 'History', 'Other']

  const getCategoryIcon = (category) => {
    const icons = {
      'Fiction': '📖',
      'Non-Fiction': '📚',
      'Science': '🔬',
      'Technology': '💻',
      'Biography': '👤',
      'History': '🏛️',
      'Other': '📝'
    }
    return icons[category] || icons['Other']
  }

  return (
    <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl mb-6 shadow-2xl shadow-purple-500/25">
          <span className="text-3xl">{isEditing ? '✏️' : '✨'}</span>
        </div>
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          {isEditing ? 'Edit Book' : 'Add New Book'}
        </h2>
        <p className="text-gray-400 text-lg">
          {isEditing ? 'Update your book details below' : 'Fill in the details to add a new book to your collection'}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-slate-800/40 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 shadow-2xl">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Title */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-purple-300 mb-3">
              📖 Book Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`w-full px-4 py-4 bg-slate-700/50 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 ${
                errors.title ? 'border-red-500 ring-2 ring-red-500/20' : 'border-slate-600/50 hover:border-purple-500/50'
              }`}
              placeholder="Enter the book title..."
            />
            {errors.title && (
              <p className="text-red-400 text-sm mt-2 flex items-center">
                <span className="mr-1">⚠️</span>
                {errors.title}
              </p>
            )}
          </div>

          {/* Author */}
          <div>
            <label className="block text-sm font-semibold text-purple-300 mb-3">
              👤 Author *
            </label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              className={`w-full px-4 py-4 bg-slate-700/50 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 ${
                errors.author ? 'border-red-500 ring-2 ring-red-500/20' : 'border-slate-600/50 hover:border-purple-500/50'
              }`}
              placeholder="Author name..."
            />
            {errors.author && (
              <p className="text-red-400 text-sm mt-2 flex items-center">
                <span className="mr-1">⚠️</span>
                {errors.author}
              </p>
            )}
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-semibold text-purple-300 mb-3">
              💰 Price *
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-400 font-bold">$</span>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                step="0.01"
                min="0"
                className={`w-full pl-8 pr-4 py-4 bg-slate-700/50 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 ${
                  errors.price ? 'border-red-500 ring-2 ring-red-500/20' : 'border-slate-600/50 hover:border-purple-500/50'
                }`}
                placeholder="0.00"
              />
            </div>
            {errors.price && (
              <p className="text-red-400 text-sm mt-2 flex items-center">
                <span className="mr-1">⚠️</span>
                {errors.price}
              </p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-semibold text-purple-300 mb-3">
              🏷️ Category *
            </label>
            <div className="relative">
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-4 bg-slate-700/50 border border-slate-600/50 hover:border-purple-500/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white appearance-none cursor-pointer transition-all duration-300"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-slate-800">
                    {getCategoryIcon(category)} {category}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Published Date */}
          <div>
            <label className="block text-sm font-semibold text-purple-300 mb-3">
              📅 Published Date *
            </label>
            <input
              type="date"
              name="publishedDate"
              value={formData.publishedDate}
              onChange={handleChange}
              className={`w-full px-4 py-4 bg-slate-700/50 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white transition-all duration-300 ${
                errors.publishedDate ? 'border-red-500 ring-2 ring-red-500/20' : 'border-slate-600/50 hover:border-purple-500/50'
              }`}
            />
            {errors.publishedDate && (
              <p className="text-red-400 text-sm mt-2 flex items-center">
                <span className="mr-1">⚠️</span>
                {errors.publishedDate}
              </p>
            )}
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-purple-300 mb-3">
              📝 Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="5"
              className={`w-full px-4 py-4 bg-slate-700/50 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 resize-none transition-all duration-300 ${
                errors.description ? 'border-red-500 ring-2 ring-red-500/20' : 'border-slate-600/50 hover:border-purple-500/50'
              }`}
              placeholder="Enter a detailed description of the book..."
            />
            {errors.description && (
              <p className="text-red-400 text-sm mt-2 flex items-center">
                <span className="mr-1">⚠️</span>
                {errors.description}
              </p>
            )}
          </div>

          {/* Stock Status */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 p-4 bg-slate-700/30 rounded-2xl border border-slate-600/30">
              <input
                type="checkbox"
                name="inStock"
                checked={formData.inStock}
                onChange={handleChange}
                className="w-5 h-5 text-purple-600 bg-slate-700 border-slate-500 rounded focus:ring-purple-500 focus:ring-2"
              />
              <label className="text-white font-medium flex items-center">
                <span className="mr-2">{formData.inStock ? '✅' : '❌'}</span>
                {formData.inStock ? 'In Stock' : 'Out of Stock'}
              </label>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <button
            type="submit"
            className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 px-8 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
          >
            {isEditing ? '💾 Update Book' : '✨ Add Book'}
          </button>
          <button
            type="button"
            onClick={() => window.history.back()}
            className="flex-1 bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600/50 hover:border-slate-500/50 text-white py-4 px-8 rounded-2xl font-semibold transition-all duration-300"
          >
            ❌ Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default ItemFormView