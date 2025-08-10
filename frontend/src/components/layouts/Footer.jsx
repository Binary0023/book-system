const Footer = () => {
  return (
    <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-purple-500/20 text-gray-300 py-8 mt-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">📚</span>
            </div>
            <div>
              <h3 className="font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                BookVault
              </h3>
              <p className="text-xs text-gray-500">Premium Collection</p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400">
              &copy; 2025 BookVault. Crafted with ❤️ for book lovers.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Built with React, Node.js & MongoDB
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer