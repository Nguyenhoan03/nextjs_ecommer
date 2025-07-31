export default function AdminDashboardPage() {
    return (
      <div>
        <h1 className="text-3xl font-bold">📊 Dashboard</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-lg font-semibold">Tổng sản phẩm</h2>
            <p className="text-2xl mt-2 font-bold text-blue-600">124</p>
          </div>
  
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-lg font-semibold">Người dùng</h2>
            <p className="text-2xl mt-2 font-bold text-green-600">35</p>
          </div>
  
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-lg font-semibold">Đơn hàng</h2>
            <p className="text-2xl mt-2 font-bold text-purple-600">89</p>
          </div>
        </div>
      </div>
    )
  }
  