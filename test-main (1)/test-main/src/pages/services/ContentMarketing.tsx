import React from 'react';
import { PenTool, FileText, Video, Image, CheckCircle, ArrowRight } from 'lucide-react';

const ContentMarketing = () => {
  const contentTypes = [
    {
      title: 'Blog Yazıları burak ogu dlksaldasz',
      description: 'SEO uyumlu, değer yaratan blog içerikleri',
      icon: FileText,
      features: ['Anahtar kelime optimizasyonu', 'Uzun form içerikler', 'Düzenli yayın takvimi', 'Sosyal medya entegrasyonu']
    },
    {
      title: 'Video İçerikler',
      description: 'Profesyonel video prodüksiyon ve montaj',
      icon: Video,
      features: ['Ürün tanıtım videoları', 'Eğitici içerikler', 'Marka hikayeleri', 'Sosyal medya videoları']
    },
    {
      title: 'Görsel Tasarım',
      description: 'Etkileyici grafik ve görsel içerikler',
      icon: Image,
      features: ['İnfografikler', 'Sosyal medya görselleri', 'E-kitap tasarımı', 'Sunum tasarımları']
    },
    {
      title: 'İçerik Stratejisi',
      description: 'Kapsamlı içerik planlama ve yönetimi',
      icon: PenTool,
      features: ['İçerik takvimi', 'Hedef kitle analizi', 'Competitor araştırması', 'Performans takibi']
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Strateji Geliştirme',
      description: 'Marka analizi ve içerik stratejisi oluşturma'
    },
    {
      step: '2',
      title: 'İçerik Üretimi',
      description: 'Profesyonel ekibimizle kaliteli içerik üretimi'
    },
    {
      step: '3',
      title: 'Yayınlama',
      description: 'Planlı yayınlama ve dağıtım stratejisi'
    },
    {
      step: '4',
      title: 'Analiz & Optimizasyon',
      description: 'Performans analizi ve sürekli iyileştirme'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <PenTool className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              İçerik <span className="text-purple-600">Pazarlama</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Hedef kitlenizi etkileyen, değer yaratan içerikler üretin. Blog yazılarından videolara, 
              infografiklerden e-kitaplara kadar tüm içerik ihtiyaçlarınızı karşılıyoruz.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              İçerik Stratejisi Al
            </button>
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">İçerik Türlerimiz</h2>
            <p className="text-xl text-gray-600">Her platforma özel, profesyonel içerik çözümleri</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contentTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <Icon className="w-12 h-12 text-purple-600 mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h3>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">İçerik Üretim Sürecimiz</h2>
            <p className="text-xl text-gray-600">Profesyonel içerik üretiminin 4 adımı</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                İçerik Pazarlama <span className="text-purple-600">Avantajları</span>
              </h2>
              <div className="space-y-6">
                {[
                  'Marka bilinirliğini %300 artırır',
                  'Organik trafiği %250 yükseltir',
                  'Lead generation %180 iyileştirir',
                  'Müşteri sadakatini güçlendirir',
                  'Uzun vadeli ROI sağlar',
                  'Sektörde otorite konumu kazandırır'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Başarı Metrikleri</h3>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { metric: '+300%', label: 'Marka Bilinirliği' },
                    { metric: '+250%', label: 'Organik Trafik' },
                    { metric: '+180%', label: 'Lead Generation' },
                    { metric: '95%', label: 'Müşteri Memnuniyeti' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">{stat.metric}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">İçerik Portföyümüz</h2>
            <p className="text-xl text-gray-600">Farklı sektörlerden başarılı içerik örnekleri</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'E-ticaret Blog Serisi',
                description: '50+ blog yazısı ile %400 trafik artışı',
                category: 'Blog İçeriği',
                image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                title: 'Teknoloji Firması Video Serisi',
                description: '20 eğitici video ile %300 engagement',
                category: 'Video İçerik',
                image: 'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                title: 'Sağlık Sektörü İnfografikleri',
                description: '15 infografik ile %250 sosyal paylaşım',
                category: 'Görsel İçerik',
                image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="text-sm text-purple-600 font-medium mb-2">{item.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            İçerik Stratejinizi Güçlendirin
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Profesyonel içerik pazarlama ile markanızı öne çıkarın
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold flex items-center mx-auto">
            Ücretsiz Danışmanlık Al
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ContentMarketing;
