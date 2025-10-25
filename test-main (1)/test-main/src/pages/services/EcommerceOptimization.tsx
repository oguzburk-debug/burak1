import React from 'react';
import { ShoppingCart, CreditCard, Package, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const EcommerceOptimization = () => {
  const services = [
    {
      title: 'Dönüşüm Oranı Optimizasyonu',
      description: 'CRO teknikleri ile satış artışı sağlayın',
      icon: TrendingUp
    },
    {
      title: 'Ödeme Sistemi Optimizasyonu',
      description: 'Güvenli ve hızlı ödeme deneyimi',
      icon: CreditCard
    },
    {
      title: 'Ürün Sayfası İyileştirme',
      description: 'Satış odaklı ürün sayfası tasarımı',
      icon: Package
    },
    {
      title: 'Sepet Kurtarma',
      description: 'Terk edilen sepetleri geri kazanma stratejileri',
      icon: ShoppingCart
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <ShoppingCart className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              E-ticaret <span className="text-emerald-600">Optimizasyonu</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Online mağazanızın dönüşüm oranını maksimuma çıkarın. 
              UX/UI iyileştirmeleri ve CRO teknikleri ile satışlarınızı artırın.
            </p>
            <button className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              E-ticaret Analizi Al
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">E-ticaret Optimizasyon Hizmetleri</h2>
            <p className="text-xl text-gray-600">Online satışlarınızı artıran kapsamlı çözümler</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <Icon className="w-12 h-12 text-emerald-600 mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">E-ticaret Başarı Metrikleri</h2>
            <p className="text-xl text-gray-600">E-ticaret optimizasyonu ile elde edilen sonuçlar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { metric: '+185%', label: 'Dönüşüm Oranı', color: 'text-emerald-600' },
              { metric: '+320%', label: 'Ortalama Sepet', color: 'text-green-600' },
              { metric: '-45%', label: 'Sepet Terk Oranı', color: 'text-blue-600' },
              { metric: '+280%', label: 'Müşteri Yaşam Değeri', color: 'text-purple-600' }
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
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            E-ticaret Satışlarınızı Artırın
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Profesyonel optimizasyon ile dönüşüm oranınızı yükseltin
          </p>
          <button className="bg-white text-emerald-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold flex items-center mx-auto">
            Hemen Başla
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default EcommerceOptimization;