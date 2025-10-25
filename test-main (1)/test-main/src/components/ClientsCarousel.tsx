import React, { useState, useEffect } from 'react';

const ClientsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const clients = [
    {
      name: 'Sektör',
      logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      industry: 'domain.com'
    },
    {
     name: 'Sektör',
      logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
     industry: 'domain.com'
    },
    {
    name: 'Sektör',
      logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
     industry: 'domain.com'
    },
    {
      name: 'Sektör',
      logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      industry: 'domain.com'
    },
    {
    name: 'Sektör',
      logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      industry: 'domain.com'
    },
    {
    name: 'Sektör',
      logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      industry: 'domain.com'
    },
    {
     name: 'Sektör',
      logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      industry: 'domain.com'
    },
    {
    name: 'Sektör',
      logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
     industry: 'domain.com'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(clients.length / 4));
    }, 3000);

    return () => clearInterval(interval);
  }, [clients.length]);

  const getVisibleClients = () => {
    const startIndex = currentIndex * 4;
    return clients.slice(startIndex, startIndex + 4);
  };

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Güvenilen <span className="text-blue-600">Partnerlerimiz</span>
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Farklı sektörlerden 500+ müşterimizle birlikte başarı hikayesi yazıyoruz
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out">
            {getVisibleClients().map((client, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className="flex-shrink-0 w-1/4 px-4"
              >
                <div className="group bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-white rounded-lg mb-4 overflow-hidden shadow-sm">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 mb-1">{client.name}</h4>
                    <p className="text-sm text-gray-500">{client.industry}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: Math.ceil(clients.length / 4) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-50 animate-bounce delay-1000"></div>
          <div className="absolute top-3/4 right-20 w-16 h-16 bg-purple-100 rounded-full opacity-50 animate-bounce delay-2000"></div>
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
