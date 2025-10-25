import React from 'react';
import { Search, Share2, PenTool, BarChart3, Target, Megaphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'SEO Optimizasyonu',
      description: 'Google arama sonuçlarında üst sıralarda yer alın ve organik trafiğinizi artırın.',
      features: ['Anahtar kelime araştırması', 'Teknik SEO', 'İçerik optimizasyonu', 'Link building']
    },
    {
      icon: Share2,
      title: 'Sosyal Medya Yönetimi',
      description: 'Tüm sosyal medya platformlarında profesyonel varlık oluşturun.',
      features: ['İçerik planlaması', 'Community management', 'Influencer iş birlikleri', 'Analytics raporlama']
    },
    {
      icon: PenTool,
      title: 'İçerik Pazarlama',
      description: 'Hedef kitlenizi etkileyen, değer yaratan içerikler üretin.',
      features: ['Blog yazılımı', 'Video prodüksiyon', 'Grafik tasarım', 'E-kitap hazırlama']
    },
    {
      icon: BarChart3,
      title: 'Veri Analizi',
      description: 'Detaylı analiz ve raporlama ile kampanya performansını optimize edin.',
      features: ['Google Analytics', 'Conversion tracking', 'Heatmap analizi', 'A/B testing']
    },
    {
      icon: Target,
      title: 'PPC Reklamcılık',
      description: 'Google Ads ve sosyal medya reklamları ile hızla sonuç alın.',
      features: ['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'Retargeting kampanyaları']
    },
    {
      icon: Megaphone,
      title: 'Marka Yönetimi',
      description: 'Güçlü bir marka kimliği oluşturun ve pazardaki konumunuzu güçlendirin.',
      features: ['Marka stratejisi', 'Logo tasarım', 'Kurumsal kimlik', 'Reputation management']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Dijital Pazarlama <span className="text-blue-600">Hizmetlerimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            İşletmenizin dijital dönüşümü için ihtiyaç duyduğu tüm hizmetleri tek çatı altında sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="mt-6 text-blue-600 font-medium hover:text-purple-600 transition-colors group-hover:translate-x-1 transform duration-300 inline-flex items-center">
                  Detayları Gör
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;