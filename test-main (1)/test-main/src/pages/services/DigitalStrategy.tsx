import React from 'react';
import { Award, Target, Lightbulb, BarChart3, CheckCircle, ArrowRight } from 'lucide-react';

const DigitalStrategy = () => {
  const services = [
    {
      title: 'Dijital Dönüşüm Stratejisi',
      description: 'Kapsamlı dijital dönüşüm yol haritası',
      icon: Lightbulb
    },
    {
      title: 'Kanal Stratejisi',
      description: 'En etkili dijital kanalların belirlenmesi',
      icon: Target
    },
    {
      title: 'Rekabet Analizi',
      description: 'Sektör analizi ve rekabet stratejileri',
      icon: BarChart3
    },
    {
      title: 'Performans Ölçümü',
      description: 'KPI belirleme ve başarı ölçüm sistemleri',
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Dijital <span className="text-amber-600">Strateji</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Kapsamlı dijital dönüşüm stratejileri geliştirin. 
              Uzun vadeli başarı için profesyonel strateji danışmanlığı alın.
            </p>
            <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Strateji Danışmanlığı Al
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Dijital Strateji Hizmetleri</h2>
            <p className="text-xl text-gray-600">Uzun vadeli başarı için stratejik planlama</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <Icon className="w-12 h-12 text-amber-600 mb-6" />
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Strateji Başarı Metrikleri</h2>
            <p className="text-xl text-gray-600">Dijital strateji ile elde edilen sonuçlar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { metric: '+350%', label: 'Dijital Büyüme', color: 'text-amber-600' },
              { metric: '+220%', label: 'Pazar Payı', color: 'text-orange-600' },
              { metric: '+180%', label: 'Marka Değeri', color: 'text-yellow-600' },
              { metric: '95%', label: 'Hedef Başarısı', color: 'text-green-600' }
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
      <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Dijital Stratejinizi Geliştirin
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Uzun vadeli başarı için profesyonel strateji danışmanlığı
          </p>
          <button className="bg-white text-amber-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold flex items-center mx-auto">
            Hemen Başla
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default DigitalStrategy;