import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import HomePage from './pages/HomePage'
import ViewItemsPage from './pages/ViewItemsPage'
import AddItemPage from './pages/AddItemPage'
import EditItemPage from './pages/EditItemPage'
import ItemDetailsPage from './pages/ItemDetailsPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col">
        {/* Background Pattern */}
        <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220%200%2060%2060%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%229C92AC%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] pointer-events-none"></div>
      <Navbar />
      <main className="flex-grow container mx-auto px-6 py-12 relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/items" element={<ViewItemsPage />} />
          <Route path="/items/:id" element={<ItemDetailsPage />} />
          <Route path="/add-item" element={<AddItemPage />} />
          <Route path="/edit-item/:id" element={<EditItemPage />} />
        </Routes>
      </main>
      <Footer />
      </div>
    </Router>
  )
}

export default App