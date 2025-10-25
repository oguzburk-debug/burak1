import React from 'react';
import { BarChart3, TrendingUp, Target, Users, CheckCircle, ArrowRight } from 'lucide-react';

const Analytics = () => {
  const features = [
    {
      title: 'Google Analytics 4 Kurulumu',
      description: 'En son GA4 teknolojisi ile detaylı web analizi',
      icon: BarChart3
    },
    {
      title: 'Conversion Tracking',
      description: 'Satış ve dönüşümlerin detaylı takibi',
      icon: Target
    },
    {
      title: 'Kullanıcı Davranış Analizi',
      description: 'Heatmap ve kullanıcı yolculuğu analizi',
      icon: Users
    },
    {
      title: 'ROI Hesaplama',
      description: 'Yatırım geri dönüşü ve performans ölçümü',
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <BarChart3 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Veri <span className="text-green-600">Analizi</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Detaylı analiz ve raporlama ile kampanya performansını optimize edin. 
              Veri odaklı kararlar alarak dijital pazarlama ROI'nizi maksimuma çıkarın.
            </p>
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Ücretsiz Analiz Raporu Al
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Analiz Hizmetlerimiz</h2>
            <p className="text-xl text-gray-600">Veri odaklı pazarlama için kapsamlı analiz çözümleri</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <Icon className="w-12 h-12 text-green-600 mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Başarı Metrikleri</h2>
            <p className="text-xl text-gray-600">Müşterilerimizin elde ettiği ortalama sonuçlar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { metric: '+95%', label: 'Dönüşüm Oranı', color: 'text-green-600' },
              { metric: '+180%', label: 'ROI Artışı', color: 'text-emerald-600' },
              { metric: '+250%', label: 'Veri Doğruluğu', color: 'text-blue-600' },
              { metric: '+320%', label: 'Karar Hızı', color: 'text-purple-600' }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-lg">
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.metric}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Veri Odaklı Pazarlama Başlayın
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Detaylı analiz raporları ile kampanyalarınızı optimize edin
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold flex items-center mx-auto">
            Hemen Başla
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Analytics;