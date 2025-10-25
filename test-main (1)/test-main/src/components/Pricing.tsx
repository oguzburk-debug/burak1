import React, { useState } from 'react';
import { Check, Star, Zap } from 'lucide-react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Başlangıç',
    description: 'Küçük işletmeler için ideal',
    monthlyPrice: 2500,
    yearlyPrice: 25000,
    popular: false,
    features: [
      'Temel push bildirim gönderimi',
      'Aylık 5 kampanya yönetimi',
      'Mobil ve web bildirim desteği',
      'Kampanya performans raporu',
      'Email desteği',
      '1 hedefleme segmenti oluşturma'
    ]
  },
  {
    name: 'Profesyonel',
    description: 'Büyüyen işletmeler için',
    monthlyPrice: 4500,
    yearlyPrice: 45000,
    popular: true,
    features: [
      'Gelişmiş push bildirim ve segment yönetimi',
      'Aylık 10 kampanya yönetimi',
      'Çoklu hedefleme segmentleri',
      'Performans analizi ve raporlama',
      'Telefon + Email desteği',
      'Otomatik zamanlama ve sıklık kontrolü',
      '3 özel kampanya şablonu',
      'A/B testi ile bildirim optimizasyonu',
      'Kullanıcı etkileşim analizi'
    ]
  },
  {
    name: 'Kurumsal',
    description: 'Büyük şirketler için',
    monthlyPrice: 7500,
    yearlyPrice: 75000,
    popular: false,
    features: [
      'Pushonica tüm modüllere erişim',
      'Aylık sınırsız kampanya yönetimi',
      'Tüm hedefleme segmentleri ve davranış bazlı analiz',
      'Detaylı raporlama ve görselleştirme',
      'Dedike hesap yöneticisi',
      'Otomasyon ve AI destekli bildirim optimizasyonu',
      'A/B testleri ve performans iyileştirme',
      'Çoklu cihaz ve platform desteği',
      'Kullanıcı davranış analizi',
      'Entegrasyon desteği (CRM, e-ticaret platformları)'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Şeffaf <span className="text-blue-600">Fiyatlandırma</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            İhtiyacınıza uygun paket seçin. Tüm paketlerde %100 şeffaf fiyatlandırma, gizli maliyet yok.
          </p>

          <div className="inline-flex items-center bg-white rounded-full p-1 shadow-lg">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                !isYearly ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Aylık
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-3 rounded-full transition-all duration-300 relative ${
                isYearly ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Yıllık
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                %17 İndirim
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105 ${
                plan.popular ? 'border-2 border-blue-500 scale-105' : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-2" />
                    En Popüler
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {(isYearly ? plan.yearlyPrice : plan.monthlyPrice).toLocaleString('tr-TR')}₺
                  </span>
                  <span className="text-gray-600">
                    /{isYearly ? 'yıl' : 'ay'}
                  </span>
                  {isYearly && (
                    <div className="text-sm text-green-600 mt-1">
                      Aylık {(plan.yearlyPrice / 12).toLocaleString('tr-TR')}₺
                    </div>
                  )}
                </div>

                <button 
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl transform hover:scale-105'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {plan.popular ? (
                    <span className="flex items-center justify-center">
                      <Zap className="w-5 h-5 mr-2" />
                      Hemen Başla
                    </span>
                  ) : (
                    'Paketi Seç'
                  )}
                </button>
              </div>

              <div className="space-y-4">
                <div className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
                  Paket İçeriği:
                </div>
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Özel ihtiyaçlarınız mı var? Size özel bir paket hazırlayalım.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold">
            Özel Teklif Alın
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;