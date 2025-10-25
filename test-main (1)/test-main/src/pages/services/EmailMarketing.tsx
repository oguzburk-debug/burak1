import React from 'react';
import { Mail, Send, Users, BarChart3, CheckCircle, ArrowRight } from 'lucide-react';

const EmailMarketing = () => {
  const services = [
    {
      title: 'E-posta Kampanyaları',
      description: 'Profesyonel e-posta tasarımı ve gönderimi',
      icon: Send
    },
    {
      title: 'Segmentasyon',
      description: 'Hedef kitle segmentasyonu ve kişiselleştirme',
      icon: Users
    },
    {
      title: 'Automation',
      description: 'Otomatik e-posta dizileri ve tetikleyiciler',
      icon: Mail
    },
    {
      title: 'Analiz ve Raporlama',
      description: 'Detaylı performans analizi ve optimizasyon',
      icon: BarChart3
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Mail className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              E-posta <span className="text-indigo-600">Pazarlama</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Etkili e-posta kampanyaları ile müşteri sadakatini artırın. 
              Kişiselleştirilmiş mesajlar ve otomasyon ile ROI'nizi maksimuma çıkarın.
            </p>
            <button className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              E-posta Stratejisi Al
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">E-posta Pazarlama Hizmetleri</h2>
            <p className="text-xl text-gray-600">Müşteri ilişkilerinizi güçlendiren e-posta çözümleri</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <Icon className="w-12 h-12 text-indigo-600 mb-6" />
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">E-posta Başarı Metrikleri</h2>
            <p className="text-xl text-gray-600">E-posta pazarlama ile elde edilen sonuçlar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { metric: '+380%', label: 'Açılma Oranı', color: 'text-indigo-600' },
              { metric: '+250%', label: 'Tıklama Oranı', color: 'text-blue-600' },
              { metric: '+190%', label: 'Dönüşüm Oranı', color: 'text-purple-600' },
              { metric: '12.5x', label: 'ROI Artışı', color: 'text-green-600' }
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
      <section className="py-20 bg-gradient-to-r from-indigo-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            E-posta Pazarlama Başlayın
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Müşteri sadakatini artıran e-posta kampanyaları
          </p>
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold flex items-center mx-auto">
            Hemen Başla
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default EmailMarketing;