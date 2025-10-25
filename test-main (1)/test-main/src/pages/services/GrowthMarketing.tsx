import React from 'react';
import { TrendingUp, Zap, Target, Users, CheckCircle, ArrowRight } from 'lucide-react';

const GrowthMarketing = () => {
  const services = [
    {
      title: 'Growth Hacking',
      description: 'Hızlı büyüme için yaratıcı pazarlama teknikleri',
      icon: Zap
    },
    {
      title: 'Viral Pazarlama',
      description: 'Viral içerik stratejileri ve kampanya yönetimi',
      icon: TrendingUp
    },
    {
      title: 'A/B Testing',
      description: 'Sürekli test ve optimizasyon döngüsü',
      icon: Target
    },
    {
      title: 'User Acquisition',
      description: 'Maliyet-etkin kullanıcı kazanımı stratejileri',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-lime-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Büyüme <span className="text-lime-600">Pazarlama</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Growth hacking teknikleri ile hızlı büyüme sağlayın. 
              Veri odaklı deneyler ve yaratıcı stratejiler ile işletmenizi büyütün.
            </p>
            <button className="bg-gradient-to-r from-lime-500 to-green-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Growth Analizi Al
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Büyüme Pazarlama Hizmetleri</h2>
            <p className="text-xl text-gray-600">Hızlı büyüme için yaratıcı çözümler</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <Icon className="w-12 h-12 text-lime-600 mb-6" />
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Büyüme Başarı Metrikleri</h2>
            <p className="text-xl text-gray-600">Growth marketing ile elde edilen sonuçlar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { metric: '+1200%', label: 'Kullanıcı Artışı', color: 'text-lime-600' },
              { metric: '+450%', label: 'Viral Erişim', color: 'text-green-600' },
              { metric: '+280%', label: 'Organik Büyüme', color: 'text-emerald-600' },
              { metric: '15x', label: 'Growth Rate', color: 'text-blue-600' }
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
      <section className="py-20 bg-gradient-to-r from-lime-500 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Hızlı Büyüme Başlayın
          </h2>
          <p className="text-xl text-lime-100 mb-8">
            Growth hacking ile işletmenizi katlamış olarak büyütün
          </p>
          <button className="bg-white text-lime-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold flex items-center mx-auto">
            Hemen Başla
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default GrowthMarketing;