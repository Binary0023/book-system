import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import ItemFormView from '../components/views/ItemFormView'

const AddItemPage = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (formData) => {
    try {
      setLoading(true)
      setError('')
      
      await axios.post('/api/items', formData)
      navigate('/items')
    } catch (err) {
      if (err.response?.data?.errors) {
        setError(err.response.data.errors.join(', '))
      } else {
        setError('Failed to add book. Please try again.')
      }
      console.error('Error adding item:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      {error && (
        <div className="max-w-2xl mx-auto mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}
      
      {loading && (
        <div className="max-w-2xl mx-auto mb-6 bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded">
          Adding book...
        </div>
      )}

      <ItemFormView onSubmit={handleSubmit} />
    </div>
  )
}

export default AddItemPage