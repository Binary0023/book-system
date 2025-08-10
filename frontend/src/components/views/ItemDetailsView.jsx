import { Link } from 'react-router-dom'

const ItemDetailsView = ({ item, onDelete }) => {
  if (!item) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 text-lg">Loading...</p>
      </div>
    )
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {item.title}
            </h1>
            <p className="text-xl text-gray-600">by {item.author}</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-green-600 mb-2">
              ${item.price}
            </p>
            <span className={`px-3 py-1 rounded-full text-sm ${
              item.inStock 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {item.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Category</h3>
            <p className="text-gray-600">{item.category}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Published Date</h3>
            <p className="text-gray-600">{formatDate(item.publishedDate)}</p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Description</h3>
          <p className="text-gray-600 leading-relaxed">{item.description}</p>
        </div>

        <div className="border-t pt-6">
          <div className="grid gap-4 md:grid-cols-2 text-sm text-gray-500">
            <div>
              <span className="font-medium">Created:</span> {formatDate(item.createdAt)}
            </div>
            <div>
              <span className="font-medium">Last Updated:</span> {formatDate(item.updatedAt)}
            </div>
          </div>
        </div>

        <div className="flex space-x-4 mt-8">
          <Link 
            to={`/edit-item/${item._id}`}
            className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-white text-center py-3 rounded-lg transition-colors"
          >
            Edit Book
          </Link>
          <button 
            onClick={() => onDelete(item._id)}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg transition-colors"
          >
            Delete Book
          </button>
          <Link 
            to="/items"
            className="flex-1 bg-gray-600 hover:bg-gray-700 text-white text-center py-3 rounded-lg transition-colors"
          >
            Back to List
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ItemDetailsView