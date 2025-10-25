import React from 'react';
import { Search, UserPlus, Mail, Gift, CheckCircle, ArrowRight, Sparkles, Users, Target } from 'lucide-react';

const SEOOptimization = () => {
  const features = [
    {
      title: 'Otomatik Hoş Geldin Mesajı',
      description: 'Yeni üye olan her müşteriye özel hoş geldin mesajı gönderin',
      icon: Mail
    },
    {
      title: 'Kişiselleştirilmiş İçerik',
      description: 'Her yeni üyeye özel içerik ve öneriler sunun',
      icon: Sparkles
    },
    {
      title: 'İlk Adım Rehberi',
      description: 'Yeni üyelere platformu tanıtan interaktif rehber',
      icon: Target
    },
    {
      title: 'Hoş Geldin Hediyesi',
      description: 'İlk kayıtta özel indirim veya hediye sunun',
      icon: Gift
    }
  ];

  const benefits = [
    'Yeni üyelerin platformla etkileşimini %300 artırır',
    'İlk hafta aktivitesini %250 yükseltir',
    'Müşteri sadakatini ilk günden kazanır',
    'Kayıt sonrası dönüşüm oranını %180 iyileştirir',
    'Otomatik süreçlerle zaman tasarrufu sağlar',
    'Profesyonel ilk izlenim bırakır'
  ];

  const packages = [
    {
      name: 'Temel Paket',
      price: '1.500₺/ay',
      features: [
        'Otomatik hoş geldin e-postası',
        'Temel kişiselleştirme',
        'Basit hoş geldin sayfası',
        'Aylık rapor',
        '5 e-posta şablonu'
      ]
    },
    {
      name: 'Gelişmiş Paket',
      price: '2.500₺/ay',
      features: [
        'Çoklu kanal mesajları (E-posta + SMS)',
        'İleri seviye kişiselleştirme',
        'İnteraktif hoş geldin rehberi',
        'A/B test desteği',
        'Haftalık rapor',
        '15 özelleştirilebilir şablon'
      ]
    },
    {
      name: 'Kurumsal Paket',
      price: '4.500₺/ay',
      features: [
        'Tam entegre hoş geldin süreci',
        'AI destekli kişiselleştirme',
        'Video hoş geldin mesajları',
        'Özel kampanya tasarımı',
        'Gerçek zamanlı analiz',
        'Sınırsız şablon ve özelleştirme'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <UserPlus className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Yeni Üye <span className="text-blue-600">Karşılama</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Yeni üye olan müşterilerinize unutulmaz bir ilk deneyim sunun. Otomatik hoş geldin mesajları,
              kişiselleştirilmiş içerikler ve özel hediyelerle müşteri sadakatini ilk günden kazanın.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Ücretsiz Demo Deneyin
            </button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Modül Özellikleri</h2>
            <p className="text-xl text-gray-600">Yeni üyelere profesyonel karşılama deneyimi sunun</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <Icon className="w-12 h-12 text-blue-600 mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Neden <span className="text-blue-600">Önemli?</span>
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8">
              <div className="text-center">
                <Users className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Başarı Metrikleri</h3>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { metric: '+300%', label: 'Etkileşim Artışı' },
                    { metric: '+250%', label: 'İlk Hafta Aktivitesi' },
                    { metric: '+180%', label: 'Dönüşüm Oranı' },
                    { metric: '95%', label: 'Müşteri Memnuniyeti' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center bg-white rounded-xl p-4 shadow-md">
                      <div className="text-3xl font-bold text-blue-600 mb-2">{stat.metric}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Paketlerimiz</h2>
            <p className="text-xl text-gray-600">İhtiyacınıza uygun paketi seçin</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg border-2 ${index === 1 ? 'border-blue-500 scale-105' : 'border-gray-100'}`}>
                {index === 1 && (
                  <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium text-center mb-4">
                    En Popüler
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-6">{pkg.price}</div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  index === 1
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}>
                  Paketi Seç
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Yeni Üyelerinize Özel Deneyim Sunun
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Otomatik karşılama sistemi ile müşteri memnuniyetini artırın
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold flex items-center mx-auto">
            Hemen Başla
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default SEOOptimization;
