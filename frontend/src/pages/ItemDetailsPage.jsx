import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import ItemDetailsView from '../components/views/ItemDetailsView'

const ItemDetailsPage = () => {
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetchItem()
  }, [id])

  const fetchItem = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`/api/items/${id}`)
      setItem(response.data.data)
      setError('')
    } catch (err) {
      setError('Failed to fetch book details')
      console.error('Error fetching item:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (itemId) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      try {
        await axios.delete(`/api/items/${itemId}`)
        navigate('/items')
      } catch (err) {
        setError('Failed to delete book')
        console.error('Error deleting item:', err)
      }
    }
  }

  if (loading) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 text-lg">Loading book details...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-500 text-lg mb-4">{error}</p>
        <button 
          onClick={fetchItem}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition-colors"
        >
          Try Again
        </button>
      </div>
    )
  }

  return <ItemDetailsView item={item} onDelete={handleDelete} />
}

export default ItemDetailsPage