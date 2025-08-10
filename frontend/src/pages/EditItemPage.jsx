import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import ItemFormView from '../components/views/ItemFormView'

const EditItemPage = () => {
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
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

  const handleSubmit = async (formData) => {
    try {
      setSubmitting(true)
      setError('')
      
      await axios.put(`/api/items/${id}`, formData)
      navigate(`/items/${id}`)
    } catch (err) {
      if (err.response?.data?.errors) {
        setError(err.response.data.errors.join(', '))
      } else {
        setError('Failed to update book. Please try again.')
      }
      console.error('Error updating item:', err)
    } finally {
      setSubmitting(false)
    }
  }

  if (loading) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 text-lg">Loading book details...</p>
      </div>
    )
  }

  if (error && !item) {
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

  return (
    <div>
      {error && (
        <div className="max-w-2xl mx-auto mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}
      
      {submitting && (
        <div className="max-w-2xl mx-auto mb-6 bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded">
          Updating book...
        </div>
      )}

      <ItemFormView 
        item={item} 
        onSubmit={handleSubmit} 
        isEditing={true} 
      />
    </div>
  )
}

export default EditItemPage