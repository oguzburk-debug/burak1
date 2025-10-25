import React from 'react';
import { Users, MapPin, Clock, DollarSign, Heart, Coffee, Laptop, Zap } from 'lucide-react';

const Careers = () => {
  const benefits = [
    {
      icon: Heart,
      title: 'Sağlık Sigortası',
      description: 'Kapsamlı özel sağlık sigortası'
    },
    {
      icon: Coffee,
      title: 'Esnek Çalışma',
      description: 'Hibrit çalışma modeli ve esnek saatler'
    },
    {
      icon: Laptop,
      title: 'Teknoloji Desteği',
      description: 'En son teknoloji ekipmanları'
    },
    {
      icon: Zap,
      title: 'Eğitim Fırsatları',
      description: 'Sürekli öğrenme ve gelişim programları'
    }
  ];

  const openPositions = [
    {
      title: 'Senior SEO Uzmanı',
      department: 'Dijital Pazarlama',
      location: 'İstanbul / Hibrit',
      type: 'Tam Zamanlı',
      salary: '15.000 - 20.000 ₺',
      requirements: [
        '5+ yıl SEO deneyimi',
        'Google Analytics ve Search Console uzmanlığı',
        'Teknik SEO bilgisi',
        'İngilizce bilgisi'
      ]
    },
    {
      title: 'Sosyal Medya Uzmanı',
      department: 'İçerik & Sosyal Medya',
      location: 'İstanbul / Hibrit',
      type: 'Tam Zamanlı',
      salary: '10.000 - 15.000 ₺',
      requirements: [
        '3+ yıl sosyal medya deneyimi',
        'İçerik üretimi ve planlama',
        'Grafik tasarım bilgisi',
        'Analitik düşünce yapısı'
      ]
    },
    {
      title: 'PPC Uzmanı',
      department: 'Dijital Reklamcılık',
      location: 'İstanbul / Hibrit',
      type: 'Tam Zamanlı',
      salary: '12.000 - 18.000 ₺',
      requirements: [
        '4+ yıl Google Ads deneyimi',
        'Facebook Ads uzmanlığı',
        'Veri analizi becerisi',
        'Sertifikasyonlar tercih edilir'
      ]
    },
    {
      title: 'İçerik Editörü',
      department: 'İçerik & Sosyal Medya',
      location: 'İstanbul / Hibrit',
      type: 'Tam Zamanlı',
      salary: '8.000 - 12.000 ₺',
      requirements: [
        '2+ yıl içerik yazımı deneyimi',
        'SEO yazım teknikleri',
        'Yaratıcılık ve araştırma becerisi',
        'Çoklu proje yönetimi'
      ]
    },
    {
      title: 'Grafik Tasarımcı',
      department: 'Kreatif',
      location: 'İstanbul / Hibrit',
      type: 'Tam Zamanlı',
      salary: '9.000 - 14.000 ₺',
      requirements: [
        '3+ yıl grafik tasarım deneyimi',
        'Adobe Creative Suite uzmanlığı',
        'Dijital medya tasarım deneyimi',
        'Portföy zorunlu'
      ]
    },
    {
      title: 'Veri Analisti',
      department: 'Analitik',
      location: 'İstanbul / Hibrit',
      type: 'Tam Zamanlı',
      salary: '11.000 - 16.000 ₺',
      requirements: [
        '3+ yıl veri analizi deneyimi',
        'Google Analytics, Data Studio',
        'SQL bilgisi tercih edilir',
        'Raporlama ve sunum becerileri'
      ]
    }
  ];

  const culture = [
    {
      title: 'İnovasyon Odaklı',
      description: 'Yeni fikirler ve yaratıcı çözümler üretmeyi destekliyoruz'
    },
    {
      title: 'Takım Ruhu',
      description: 'Birlikte başarıyı hedefleyen güçlü bir ekip kültürü'
    },
    {
      title: 'Sürekli Öğrenme',
      description: 'Gelişim ve öğrenme fırsatları ile kariyerinizi destekliyoruz'
    },
    {
      title: 'İş-Yaşam Dengesi',
      description: 'Esnek çalışma koşulları ile sağlıklı bir denge'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Kariyer <span className="text-blue-600">Fırsatları</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Pushonica ailesine katılın! Dijital pazarlama dünyasında kariyerinizi geliştirin,
              yenilikçi projelerde yer alın ve sektörün en iyi ekibiyle çalışın.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Açık Pozisyonları Gör
            </button>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Şirket Kültürümüz</h2>
            <p className="text-xl text-gray-600">Pushonica'da çalışmanın avantajları</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culture.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Çalışan Avantajları</h2>
            <p className="text-xl text-gray-600">Ekibimizin mutluluğu bizim için öncelik</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300">
                  <Icon className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Açık Pozisyonlar</h2>
            <p className="text-xl text-gray-600">Ekibimize katılmak için mükemmel fırsatlar</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                    <p className="text-blue-600 font-medium">{position.department}</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Açık
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">{position.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">{position.type}</span>
                  </div>
                  <div className="flex items-center col-span-2">
                    <DollarSign className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">{position.salary}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Aranan Özellikler:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  Başvuru Yap
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Başvuru Süreci</h2>
            <p className="text-xl text-gray-600">4 adımda DigiMarket ailesine katılın</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Başvuru', desc: 'Online başvuru formunu doldurun' },
              { step: '2', title: 'İnceleme', desc: 'CV ve portföyünüz değerlendirilir' },
              { step: '3', title: 'Görüşme', desc: 'Teknik ve kültürel uyum görüşmesi' },
              { step: '4', title: 'Karar', desc: 'Sonuç bildirimi ve işe başlama' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Hayalinizdeki Kariyer Sizi Bekliyor
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Pushonica ailesine katılın ve dijital pazarlama dünyasında fark yaratın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold">
              CV Gönder
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
              Daha Fazla Bilgi
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
