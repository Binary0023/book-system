import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import ItemListView from '../components/views/ItemListView'

const ViewItemsPage = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    fetchItems()
  }, [])

  const fetchItems = async () => {
    try {
      setLoading(true)
      const response = await axios.get('/api/items')
      setItems(response.data.data)
      setError('')
    } catch (err) {
      setError('Failed to fetch items')
      console.error('Error fetching items:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      try {
        await axios.delete(`/api/items/${id}`)
        setItems(items.filter(item => item._id !== id))
      } catch (err) {
        setError('Failed to delete item')
        console.error('Error deleting item:', err)
      }
    }
  }

  if (loading) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 text-lg">Loading books...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-500 text-lg mb-4">{error}</p>
        <button 
          onClick={fetchItems}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition-colors"
        >
          Try Again
        </button>
      </div>
    )
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">All Books</h1>
        <p className="text-gray-600">{items.length} book(s) found</p>
      </div>
      <ItemListView items={items} onDelete={handleDelete} />
    </div>
  )
}

export default ViewItemsPage