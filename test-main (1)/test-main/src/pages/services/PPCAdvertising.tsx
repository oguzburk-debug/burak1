import React from 'react';
import { Target, TrendingUp, DollarSign, BarChart3, CheckCircle, ArrowRight } from 'lucide-react';

const PPCAdvertising = () => {
  const platforms = [
    { name: 'Google Ads', color: 'from-blue-500 to-blue-600', reach: '4.3B+' },
    { name: 'Facebook Ads', color: 'from-blue-600 to-blue-700', reach: '2.9B+' },
    { name: 'Instagram Ads', color: 'from-pink-500 to-purple-600', reach: '2B+' },
    { name: 'LinkedIn Ads', color: 'from-blue-700 to-blue-800', reach: '900M+' },
    { name: 'YouTube Ads', color: 'from-red-600 to-red-700', reach: '2.7B+' },
    { name: 'TikTok Ads', color: 'from-black to-gray-800', reach: '1B+' }
  ];

  const services = [
    {
      title: 'Google Ads Yönetimi',
      description: 'Arama ve display reklamları ile hedef kitlenize ulaşın',
      icon: Target
    },
    {
      title: 'Sosyal Medya Reklamları',
      description: 'Facebook, Instagram ve LinkedIn reklamları',
      icon: TrendingUp
    },
    {
      title: 'Retargeting Kampanyaları',
      description: 'Site ziyaretçilerinizi geri kazanın',
      icon: BarChart3
    },
    {
      title: 'Bütçe Optimizasyonu',
      description: 'Reklam bütçenizi en verimli şekilde kullanın',
      icon: DollarSign
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-red-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              PPC <span className="text-orange-600">Reklamcılık</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Google Ads ve sosyal medya reklamları ile hızla sonuç alın. 
              Hedefli reklam kampanyaları ile ROI'nizi maksimuma çıkarın.
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Ücretsiz Reklam Analizi Al
            </button>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Reklam Platformları</h2>
            <p className="text-xl text-gray-600">Tüm önemli platformlarda profesyonel reklam yönetimi</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 bg-gradient-to-r ${platform.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white font-bold text-lg">{platform.name[0]}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{platform.name}</h3>
                <p className="text-sm text-gray-500">{platform.reach} erişim</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">PPC Hizmetlerimiz</h2>
            <p className="text-xl text-gray-600">Kapsamlı reklam yönetimi ve optimizasyon</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                  <Icon className="w-12 h-12 text-orange-600 mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Başarı Metrikleri</h2>
            <p className="text-xl text-gray-600">Müşterilerimizin elde ettiği ortalama sonuçlar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { metric: '8.5x', label: 'ROI Artışı', color: 'text-orange-600' },
              { metric: '-60%', label: 'Maliyet Azalması', color: 'text-green-600' },
              { metric: '+280%', label: 'Tıklama Oranı', color: 'text-blue-600' },
              { metric: '+150%', label: 'Dönüşüm Oranı', color: 'text-purple-600' }
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
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            PPC Kampanyalarınızı Optimize Edin
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Profesyonel reklam yönetimi ile hızla sonuç alın
          </p>
          <button className="bg-white text-orange-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold flex items-center mx-auto">
            Hemen Başla
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default PPCAdvertising;