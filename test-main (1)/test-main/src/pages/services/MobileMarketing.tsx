import React from 'react';
import { Smartphone, Bell, Download, Users, CheckCircle, ArrowRight } from 'lucide-react';

const MobileMarketing = () => {
  const services = [
    {
      title: 'App Store Optimizasyonu',
      description: 'ASO ile uygulama mağazalarında üst sıralarda yer alın',
      icon: Download
    },
    {
      title: 'Push Notification',
      description: 'Etkili push bildirim kampanyaları',
      icon: Bell
    },
    {
      title: 'In-App Marketing',
      description: 'Uygulama içi pazarlama ve kullanıcı deneyimi',
      icon: Smartphone
    },
    {
      title: 'User Acquisition',
      description: 'Yeni kullanıcı kazanımı ve retention stratejileri',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Smartphone className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Mobil Uygulama <span className="text-teal-600">Pazarlama</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Mobil uygulamanızı daha fazla kullanıcıya ulaştırın. ASO, push notification 
              ve kullanıcı kazanımı stratejileri ile uygulamanızı büyütün.
            </p>
            <button className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Uygulama Analizi Al
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mobil Pazarlama Hizmetleri</h2>
            <p className="text-xl text-gray-600">Uygulamanızın başarısı için kapsamlı çözümler</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <Icon className="w-12 h-12 text-teal-600 mb-6" />
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mobil Başarı Metrikleri</h2>
            <p className="text-xl text-gray-600">Uygulama pazarlama ile elde edilen sonuçlar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { metric: '+450%', label: 'Uygulama İndirme', color: 'text-teal-600' },
              { metric: '+280%', label: 'Kullanıcı Etkileşimi', color: 'text-cyan-600' },
              { metric: '+190%', label: 'Retention Oranı', color: 'text-blue-600' },
              { metric: '+320%', label: 'In-App Satış', color: 'text-green-600' }
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
      <section className="py-20 bg-gradient-to-r from-teal-500 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Uygulamanızı Büyütün
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Mobil pazarlama stratejileri ile kullanıcı tabanınızı genişletin
          </p>
          <button className="bg-white text-teal-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold flex items-center mx-auto">
            Hemen Başla
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default MobileMarketing;