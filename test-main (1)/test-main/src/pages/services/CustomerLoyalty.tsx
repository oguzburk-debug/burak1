import React from 'react';
import { Heart, Gift, Star, Users, CheckCircle, ArrowRight } from 'lucide-react';

const CustomerLoyalty = () => {
  const services = [
    {
      title: 'Sadakat Programları',
      description: 'Müşteri sadakatini artıran ödül sistemleri',
      icon: Gift
    },
    {
      title: 'VIP Müşteri Yönetimi',
      description: 'Özel müşteri deneyimi ve ayrıcalıklar',
      icon: Star
    },
    {
      title: 'Retention Stratejileri',
      description: 'Müşteri kaybını önleme ve geri kazanma',
      icon: Heart
    },
    {
      title: 'Community Building',
      description: 'Marka topluluğu oluşturma ve yönetimi',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-rose-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Müşteri <span className="text-red-600">Sadakati</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Uzun vadeli müşteri ilişkileri kurun ve sadakati artırın. 
              Sadakat programları ve retention stratejileri ile müşteri yaşam değerini yükseltin.
            </p>
            <button className="bg-gradient-to-r from-red-500 to-rose-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Sadakat Analizi Al
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Müşteri Sadakati Hizmetleri</h2>
            <p className="text-xl text-gray-600">Uzun vadeli müşteri ilişkileri için çözümler</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <Icon className="w-12 h-12 text-red-600 mb-6" />
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sadakat Başarı Metrikleri</h2>
            <p className="text-xl text-gray-600">Müşteri sadakati ile elde edilen sonuçlar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { metric: '+280%', label: 'Müşteri Yaşam Değeri', color: 'text-red-600' },
              { metric: '+190%', label: 'Tekrar Satın Alma', color: 'text-rose-600' },
              { metric: '+95%', label: 'Müşteri Memnuniyeti', color: 'text-pink-600' },
              { metric: '-65%', label: 'Churn Oranı', color: 'text-green-600' }
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
      <section className="py-20 bg-gradient-to-r from-red-500 to-rose-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Müşteri Sadakatini Artırın
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Uzun vadeli müşteri ilişkileri ile işletmenizi büyütün
          </p>
          <button className="bg-white text-red-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold flex items-center mx-auto">
            Hemen Başla
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default CustomerLoyalty;