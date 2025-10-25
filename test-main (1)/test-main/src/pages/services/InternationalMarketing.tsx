import React from 'react';
import { Globe, Languages, MapPin, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const InternationalMarketing = () => {
  const services = [
    {
      title: 'Global SEO',
      description: 'Çok dilli ve çok bölgeli SEO stratejileri',
      icon: Globe
    },
    {
      title: 'Yerelleştirme',
      description: 'Kültürel adaptasyon ve yerel pazarlama',
      icon: Languages
    },
    {
      title: 'Pazar Araştırması',
      description: 'Hedef ülke ve bölge analizi',
      icon: MapPin
    },
    {
      title: 'Global Kampanyalar',
      description: 'Uluslararası reklam kampanyaları',
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Globe className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Uluslararası <span className="text-sky-600">Pazarlama</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Global pazarlarda markanızı büyütün ve genişletin. 
              Çok dilli SEO, yerelleştirme ve kültürel adaptasyon ile dünya çapında başarı elde edin.
            </p>
            <button className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Global Strateji Al
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Uluslararası Pazarlama Hizmetleri</h2>
            <p className="text-xl text-gray-600">Global başarı için kapsamlı çözümler</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <Icon className="w-12 h-12 text-sky-600 mb-6" />
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Global Başarı Metrikleri</h2>
            <p className="text-xl text-gray-600">Uluslararası pazarlama ile elde edilen sonuçlar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { metric: '+420%', label: 'Global Erişim', color: 'text-sky-600' },
              { metric: '25+', label: 'Ülke Pazarı', color: 'text-blue-600' },
              { metric: '+380%', label: 'Uluslararası Satış', color: 'text-green-600' },
              { metric: '+250%', label: 'Marka Bilinirliği', color: 'text-purple-600' }
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
      <section className="py-20 bg-gradient-to-r from-sky-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Global Pazarlara Açılın
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Uluslararası pazarlama ile dünya çapında büyüyün
          </p>
          <button className="bg-white text-sky-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold flex items-center mx-auto">
            Hemen Başla
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default InternationalMarketing;