import {
    BarChart3,
    Bed,
    Bell,
    Calendar,
    Car,
    ChevronRight,
    Coffee,
    DollarSign,
    Home,
    Settings,
    Users,
    Waves,
    Wifi
} from 'lucide-react';
import { useState } from 'react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const stats = [
    { 
      title: 'Total Bookings', 
      value: '247', 
      change: '+12%', 
      icon: Calendar,
      color: 'text-blue-600'
    },
    { 
      title: 'Revenue Today', 
      value: '$8,420', 
      change: '+8%', 
      icon: DollarSign,
      color: 'text-green-600'
    },
    { 
      title: 'Occupancy Rate', 
      value: '87%', 
      change: '+5%', 
      icon: Users,
      color: 'text-purple-600'
    },
    { 
      title: 'Available Rooms', 
      value: '23', 
      change: '-3', 
      icon: Bed,
      color: 'text-orange-600'
    }
  ];

  const recentBookings = [
    { id: 1, guest: 'Sarah Johnson', room: 'Ocean View Suite', checkIn: '2025-07-18', status: 'Confirmed' },
    { id: 2, guest: 'Michael Chen', room: 'Deluxe Double', checkIn: '2025-07-19', status: 'Pending' },
    { id: 3, guest: 'Emma Williams', room: 'Beach Villa', checkIn: '2025-07-20', status: 'Confirmed' },
    { id: 4, guest: 'David Brown', room: 'Standard Room', checkIn: '2025-07-21', status: 'Checked In' }
  ];

  const roomTypes = [
    { type: 'Ocean View Suite', total: 8, occupied: 6, rate: '$280/night' },
    { type: 'Beach Villa', total: 12, occupied: 10, rate: '$350/night' },
    { type: 'Deluxe Double', total: 15, occupied: 12, rate: '$180/night' },
    { type: 'Standard Room', total: 20, occupied: 15, rate: '$120/night' }
  ];

  const services = [
    { name: 'Beach Access', icon: Waves, active: true },
    { name: 'Free WiFi', icon: Wifi, active: true },
    { name: 'Parking', icon: Car, active: true },
    { name: 'Restaurant', icon: Coffee, active: true }
  ];

  const StatCard = ({ stat }) => {
    const Icon = stat.icon;
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{stat.title}</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
            <p className={`text-sm mt-1 ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
              {stat.change} from yesterday
            </p>
          </div>
          <div className={`p-3 rounded-lg bg-gray-50 ${stat.color}`}>
            <Icon size={24} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="min-h-screen bg-white font-sans antialiased"
      style={{ width: '100vw', marginLeft: '-50vw', marginRight: '-50vw', left: '50%', right: '50%', position: 'relative' }}
    >
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center">
                  <Waves className="text-white" size={16} />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">AGNEGHE</h1>
                  <p className="text-xs text-gray-500">Beach Hotel</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Bell size={20} />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Settings size={20} />
              </button>
              <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">AB</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview', icon: Home },
              { id: 'bookings', label: 'Bookings', icon: Calendar },
              { id: 'rooms', label: 'Rooms', icon: Bed },
              { id: 'analytics', label: 'Analytics', icon: BarChart3 }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-teal-500 text-teal-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Bookings */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="px-6 py-4 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">Recent Bookings</h3>
              </div>
              <div className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Guest</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Room</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Check-in</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {recentBookings.map((booking) => (
                        <tr key={booking.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                                <span className="text-teal-600 text-sm font-medium">
                                  {booking.guest.split(' ').map(n => n[0]).join('')}
                                </span>
                              </div>
                              <div className="ml-3">
                                <div className="text-sm font-medium text-gray-900">{booking.guest}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.room}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.checkIn}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                              booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-blue-100 text-blue-800'
                            }`}>
                              {booking.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Room Status */}
          <div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-6">
              <div className="px-6 py-4 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">Room Status</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {roomTypes.map((room, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-medium text-gray-900">{room.type}</h4>
                          <p className="text-sm text-gray-500">{room.rate}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900">{room.occupied}/{room.total}</p>
                          <p className="text-xs text-gray-500">occupied</p>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-teal-600 h-2 rounded-full" 
                          style={{ width: `${(room.occupied / room.total) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Hotel Services */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="px-6 py-4 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">Hotel Services</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <div key={index} className="flex items-center space-x-2">
                        <div className={`p-2 rounded-lg ${service.active ? 'bg-teal-100 text-teal-600' : 'bg-gray-100 text-gray-400'}`}>
                          <Icon size={16} />
                        </div>
                        <span className="text-sm font-medium text-gray-900">{service.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="px-6 py-4 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="flex items-center justify-between p-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg hover:from-teal-600 hover:to-teal-700 transition-all">
                  <div className="flex items-center space-x-3">
                    <Calendar size={20} />
                    <span className="font-medium">New Booking</span>
                  </div>
                  <ChevronRight size={20} />
                </button>
                <button className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all">
                  <div className="flex items-center space-x-3">
                    <Users size={20} />
                    <span className="font-medium">Check-in Guest</span>
                  </div>
                  <ChevronRight size={20} />
                </button>
                <button className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all">
                  <div className="flex items-center space-x-3">
                    <BarChart3 size={20} />
                    <span className="font-medium">View Reports</span>
                  </div>
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;