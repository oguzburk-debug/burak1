import React from 'react';
import { Megaphone, Award, Users, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const BrandManagement = () => {
  const services = [
    {
      title: 'Marka Stratejisi',
      description: 'Güçlü marka konumlandırma ve strateji geliştirme',
      icon: Award
    },
    {
      title: 'Kurumsal Kimlik',
      description: 'Logo tasarım ve görsel kimlik oluşturma',
      icon: Megaphone
    },
    {
      title: 'Marka Rehberi',
      description: 'Tutarlı marka kullanımı için detaylı rehber',
      icon: Users
    },
    {
      title: 'Reputation Management',
      description: 'Online itibar yönetimi ve kriz iletişimi',
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Megaphone className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Marka <span className="text-violet-600">Yönetimi</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Güçlü bir marka kimliği oluşturun ve pazardaki konumunuzu güçlendirin. 
              Profesyonel marka yönetimi ile rakiplerinizden öne geçin.
            </p>
            <button className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Marka Analizi Al
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Marka Yönetimi Hizmetleri</h2>
            <p className="text-xl text-gray-600">Güçlü marka kimliği için kapsamlı çözümler</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <Icon className="w-12 h-12 text-violet-600 mb-6" />
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Marka Başarı Metrikleri</h2>
            <p className="text-xl text-gray-600">Güçlü marka yönetimi ile elde edilen sonuçlar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { metric: '+320%', label: 'Marka Bilinirliği', color: 'text-violet-600' },
              { metric: '+180%', label: 'Müşteri Sadakati', color: 'text-purple-600' },
              { metric: '+250%', label: 'Marka Değeri', color: 'text-blue-600' },
              { metric: '+95%', label: 'Pozitif Algı', color: 'text-green-600' }
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
      <section className="py-20 bg-gradient-to-r from-violet-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Markanızı Güçlendirin
          </h2>
          <p className="text-xl text-violet-100 mb-8">
            Profesyonel marka yönetimi ile fark yaratın
          </p>
          <button className="bg-white text-violet-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold flex items-center mx-auto">
            Hemen Başla
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default BrandManagement;