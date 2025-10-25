import React from 'react';
import { ShoppingBag, Tag, Gift, Percent, CheckCircle, ArrowRight, Sparkles, TrendingUp, Zap } from 'lucide-react';

const SocialMediaManagement = () => {
  const features = [
    {
      title: 'Özel İndirim Kodları',
      description: 'İlk alışverişe özel bireysel indirim kodları oluşturun',
      icon: Tag
    },
    {
      title: 'Hediye Kampanyaları',
      description: 'İlk siparişe özel hediye ürün veya kargo indirimi sunun',
      icon: Gift
    },
    {
      title: 'Adım Adım Rehber',
      description: 'Müşterileri ilk alışverişe yönlendiren interaktif rehber',
      icon: Sparkles
    },
    {
      title: 'Zamanlı Kampanyalar',
      description: 'Sınırlı süreli tekliflerle aciliyet hissi yaratın',
      icon: Zap
    }
  ];

  const benefits = [
    'İlk alışveriş dönüşüm oranını %400 artırır',
    'Müşteri kazanım maliyetini %45 düşürür',
    'Ortalama sepet tutarını %120 yükseltir',
    'Müşteri yaşam boyu değerini %280 iyileştirir',
    'İlk hafta içinde alışveriş yapma oranını %350 artırır',
    'Marka sadakati oluşturur'
  ];

  const packages = [
    {
      name: 'Başlangıç',
      price: '1.800₺/ay',
      features: [
        'Temel indirim kodları',
        '%10-15 indirim seçenekleri',
        'E-posta hatırlatmaları',
        'Temel analiz raporu',
        'Aylık kampanya tasarımı'
      ]
    },
    {
      name: 'Profesyonel',
      price: '3.200₺/ay',
      features: [
        'Kişiselleştirilmiş teklifler',
        'Dinamik indirim oranları',
        'Çok kanallı hatırlatmalar',
        'A/B test optimizasyonu',
        'Hediye ürün entegrasyonu',
        'Haftalık detaylı raporlar'
      ]
    },
    {
      name: 'Kurumsal',
      price: '5.500₺/ay',
      features: [
        'AI destekli kişiselleştirme',
        'Segmentasyon bazlı kampanyalar',
        'Gerçek zamanlı optimizasyon',
        'Sınırsız kampanya çeşidi',
        'Özel dashboard ve raporlama',
        'Dedike hesap yöneticisi'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-pink-50 to-rose-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <ShoppingBag className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              İlk Alışverişe <span className="text-pink-600">Teşvik</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Yeni müşterilerinizi ilk alışverişe yönlendirin. Özel indirim kodları, hediye kampanyaları
              ve zamanlı tekliflerle dönüşüm oranınızı maksimuma çıkarın.
            </p>
            <button className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Kampanya Oluştur
            </button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Modül Özellikleri</h2>
            <p className="text-xl text-gray-600">İlk alışverişi teşvik eden güçlü araçlar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <Icon className="w-12 h-12 text-pink-600 mb-6" />
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
                Neden <span className="text-pink-600">İlk Alışveriş?</span>
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
            <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl p-8">
              <div className="text-center">
                <Percent className="w-16 h-16 text-pink-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Kampanya Başarıları</h3>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { metric: '+400%', label: 'Dönüşüm Artışı' },
                    { metric: '-45%', label: 'Müşteri Maliyeti' },
                    { metric: '+350%', label: 'İlk Hafta Alışverişi' },
                    { metric: '+280%', label: 'Müşteri Değeri' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center bg-white rounded-xl p-4 shadow-md">
                      <div className="text-3xl font-bold text-pink-600 mb-2">{stat.metric}</div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Kampanya Paketleri</h2>
            <p className="text-xl text-gray-600">İşletmenize uygun kampanya çözümü</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg border-2 ${index === 1 ? 'border-pink-500 scale-105' : 'border-gray-100'}`}>
                {index === 1 && (
                  <div className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium text-center mb-4">
                    Önerilen
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-pink-600 mb-6">{pkg.price}</div>
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
                    ? 'bg-pink-600 text-white hover:bg-pink-700'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}>
                  Paketi Seç
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-pink-500 to-rose-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            İlk Alışverişi Kolaylaştırın
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Özel kampanyalarla yeni müşterilerinizi sadık müşterilere dönüştürün
          </p>
          <button className="bg-white text-pink-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold flex items-center mx-auto">
            Hemen Başla
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaManagement;
