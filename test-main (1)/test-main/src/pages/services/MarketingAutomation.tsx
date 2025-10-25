import React from 'react';
import { Zap, Settings, Clock, BarChart3, CheckCircle, ArrowRight } from 'lucide-react';

const MarketingAutomation = () => {
  const services = [
    {
      title: 'Workflow Otomasyonu',
      description: 'Pazarlama süreçlerinin otomatikleştirilmesi',
      icon: Settings
    },
    {
      title: 'Lead Nurturing',
      description: 'Otomatik lead besleme ve dönüştürme',
      icon: Zap
    },
    {
      title: 'Zamanlama Optimizasyonu',
      description: 'En etkili gönderim zamanlarının belirlenmesi',
      icon: Clock
    },
    {
      title: 'Performans Takibi',
      description: 'Otomatik raporlama ve analiz sistemleri',
      icon: BarChart3
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Marketing <span className="text-yellow-600">Automation</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Pazarlama süreçlerinizi otomatikleştirin ve verimliliği artırın. 
              Akıllı otomasyon sistemleri ile 7/24 pazarlama yapın.
            </p>
            <button className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Otomasyon Analizi Al
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Marketing Automation Hizmetleri</h2>
            <p className="text-xl text-gray-600">Pazarlama verimliliği için otomasyon çözümleri</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <Icon className="w-12 h-12 text-yellow-600 mb-6" />
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Otomasyon Başarı Metrikleri</h2>
            <p className="text-xl text-gray-600">Marketing automation ile elde edilen sonuçlar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { metric: '+450%', label: 'Verimlilik Artışı', color: 'text-yellow-600' },
              { metric: '-70%', label: 'Manuel İş Yükü', color: 'text-green-600' },
              { metric: '+320%', label: 'Lead Kalitesi', color: 'text-orange-600' },
              { metric: '24/7', label: 'Aktif Pazarlama', color: 'text-blue-600' }
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
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pazarlama Otomasyonu Başlayın
          </h2>
          <p className="text-xl text-yellow-100 mb-8">
            Akıllı otomasyon ile pazarlama verimliliğinizi artırın
          </p>
          <button className="bg-white text-yellow-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold flex items-center mx-auto">
            Hemen Başla
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default MarketingAutomation;