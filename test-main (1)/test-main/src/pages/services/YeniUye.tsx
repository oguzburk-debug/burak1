import React from 'react';
import { Brain, Bot, Cpu, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const YeniUye = () => {
  const services = [
    {
      title: 'AI Chatbots',
      description: 'Akıllı sohbet robotları ile 7/24 müşteri hizmeti',
      icon: Bot
    },
    {
      title: 'Predictive Analytics',
      description: 'Yapay zeka ile gelecek trendlerini öngörme',
      icon: Brain
    },
    {
      title: 'Personalization',
      description: 'AI destekli kişiselleştirme algoritmaları',
      icon: Cpu
    },
    {
      title: 'Automated Optimization',
      description: 'Otomatik kampanya optimizasyonu',
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              AI <span className="text-purple-600">Pazarlama</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Yapay zeka teknolojileri ile pazarlama stratejilerinizi güçlendirin. 
              Machine learning ve AI algoritmaları ile rekabette öne geçin.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              AI Analizi Al
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Pazarlama Hizmetleri</h2>
            <p className="text-xl text-gray-600">Yapay zeka ile güçlendirilmiş pazarlama çözümleri</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <Icon className="w-12 h-12 text-purple-600 mb-6" />
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Başarı Metrikleri</h2>
            <p className="text-xl text-gray-600">Yapay zeka pazarlama ile elde edilen sonuçlar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { metric: '+520%', label: 'Kişiselleştirme', color: 'text-purple-600' },
              { metric: '+380%', label: 'Tahmin Doğruluğu', color: 'text-indigo-600' },
              { metric: '+290%', label: 'Otomasyon Verimliliği', color: 'text-blue-600' },
              { metric: '18x', label: 'AI ROI', color: 'text-green-600' }
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            AI ile Pazarlama Geleceği
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Yapay zeka teknolojileri ile pazarlamada öncü olun
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold flex items-center mx-auto">
            Hemen Başla
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default YeniUye;
