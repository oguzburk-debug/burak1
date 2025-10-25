import React from 'react';
import { TrendingUp, Users, Award, Target, BarChart3, Zap, ShoppingCart, Heart, Car, Home, GraduationCap, Plane } from 'lucide-react';

const SuccessStories = () => {
  const successStories = [
    {
      title: 'E-ticaret Sitesi Trafiği',
      description: '6 ayda %400 artış',
      metric: '2.5M',
      label: 'Aylık Ziyaretçi',
      icon: BarChart3,
      gradient: 'from-blue-600 to-purple-600',
      industry: 'E-ticaret',
      duration: '6 ay',
      challenge: 'Düşük organik trafik',
      solution: 'SEO optimizasyonu ve içerik stratejisi'
    },
    {
      title: 'Sosyal Medya Kampanyası',
      description: 'Viral içerik ile rekor kırıldı',
      metric: '15M',
      label: 'Görüntülenme',
      icon: Zap,
      gradient: 'from-pink-500 to-rose-500',
      industry: 'Moda',
      duration: '3 ay',
      challenge: 'Düşük marka bilinirliği',
      solution: 'Influencer iş birlikleri ve viral içerik'
    },
    {
      title: 'Google Ads Optimizasyonu',
      description: 'Maliyet %60 azaldı, dönüşüm %180 arttı',
      metric: '8.5x',
      label: 'ROI Artışı',
      icon: Target,
      gradient: 'from-green-500 to-teal-500',
      industry: 'Teknoloji',
      duration: '4 ay',
      challenge: 'Yüksek reklam maliyeti',
      solution: 'Hedefleme optimizasyonu ve A/B testing'
    },
    {
      title: 'Yerel İşletme SEO',
      description: 'Google My Business optimizasyonu',
      metric: '320%',
      label: 'Yerel Arama Artışı',
      icon: Users,
      gradient: 'from-orange-500 to-red-500',
      industry: 'Restoran',
      duration: '5 ay',
      challenge: 'Yerel aramada görünmezlik',
      solution: 'Yerel SEO ve müşteri yorumları yönetimi'
    },
    {
      title: 'B2B Lead Generation',
      description: 'LinkedIn kampanyası ile nitelikli leads',
      metric: '450',
      label: 'Aylık Nitelikli Lead',
      icon: Award,
      gradient: 'from-indigo-500 to-purple-500',
      industry: 'Danışmanlık',
      duration: '8 ay',
      challenge: 'Nitelikli lead eksikliği',
      solution: 'LinkedIn Ads ve içerik pazarlama'
    },
    {
      title: 'E-ticaret Dönüşüm Oranı',
      description: 'UX/UI iyileştirmeleri ile artış',
      metric: '185%',
      label: 'Dönüşüm Artışı',
      icon: ShoppingCart,
      gradient: 'from-cyan-500 to-blue-500',
      industry: 'Online Mağaza',
      duration: '3 ay',
      challenge: 'Düşük dönüşüm oranı',
      solution: 'Landing page optimizasyonu ve A/B testing'
    },
    {
      title: 'Sağlık Sektörü Dijitalleşme',
      description: 'Online randevu sistemi entegrasyonu',
      metric: '275%',
      label: 'Online Randevu Artışı',
      icon: Heart,
      gradient: 'from-emerald-500 to-green-500',
      industry: 'Sağlık',
      duration: '6 ay',
      challenge: 'Dijital dönüşüm ihtiyacı',
      solution: 'Web sitesi yenileme ve online sistemler'
    },
    {
      title: 'Otomotiv Showroom',
      description: 'Dijital pazarlama ile satış artışı',
      metric: '160%',
      label: 'Satış Artışı',
      icon: Car,
      gradient: 'from-slate-500 to-gray-600',
      industry: 'Otomotiv',
      duration: '7 ay',
      challenge: 'Düşük showroom trafiği',
      solution: 'Google Ads ve sosyal medya reklamları'
    },
    {
      title: 'Emlak Ajansı Dijitalleşme',
      description: 'Sanal tur ve dijital pazarlama',
      metric: '220%',
      label: 'Görüntüleme Artışı',
      icon: Home,
      gradient: 'from-amber-500 to-orange-500',
      industry: 'Emlak',
      duration: '4 ay',
      challenge: 'Fiziksel görüntüleme kısıtları',
      solution: '360° sanal turlar ve dijital katalog'
    },
    {
      title: 'Eğitim Kurumu Online',
      description: 'Uzaktan eğitim platformu kurulumu',
      metric: '380%',
      label: 'Online Öğrenci Artışı',
      icon: GraduationCap,
      gradient: 'from-violet-500 to-purple-500',
      industry: 'Eğitim',
      duration: '5 ay',
      challenge: 'Uzaktan eğitim altyapısı',
      solution: 'LMS kurulumu ve dijital pazarlama'
    },
    {
      title: 'Turizm Acentesi Recovery',
      description: 'Pandemi sonrası dijital dönüşüm',
      metric: '290%',
      label: 'Online Rezervasyon',
      icon: Plane,
      gradient: 'from-sky-500 to-blue-500',
      industry: 'Turizm',
      duration: '6 ay',
      challenge: 'Pandemi etkisi ve düşük rezervasyon',
      solution: 'Online rezervasyon sistemi ve güven pazarlaması'
    },
    {
      title: 'Startup Büyüme Hikayesi',
      description: 'Sıfırdan unicorn yolculuğu',
      metric: '1200%',
      label: 'Kullanıcı Artışı',
      icon: TrendingUp,
      gradient: 'from-fuchsia-500 to-pink-500',
      industry: 'Teknoloji Startup',
      duration: '12 ay',
      challenge: 'Marka bilinirliği ve kullanıcı kazanımı',
      solution: 'Growth hacking ve viral pazarlama'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tüm <span className="text-blue-600">Başarı Hikayelerimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Farklı sektörlerden müşterilerimizle birlikte elde ettiğimiz tüm başarıları keşfedin. 
            Her proje, benzersiz çözümler ve ölçülebilir sonuçlar içeriyor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {successStories.map((story, index) => {
            const Icon = story.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${story.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <div className="mb-4">
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                    {story.industry}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {story.description}
                  </p>
                </div>

                <div className={`inline-flex items-center bg-gradient-to-r ${story.gradient} text-white px-3 py-2 rounded-lg mb-4`}>
                  <span className="text-xl font-bold mr-2">{story.metric}</span>
                  <span className="text-xs opacity-90">{story.label}</span>
                </div>

                <div className="space-y-2 text-xs text-gray-500">
                  <div className="flex justify-between">
                    <span className="font-medium">Süre:</span>
                    <span>{story.duration}</span>
                  </div>
                  <div>
                    <span className="font-medium">Zorluk:</span>
                    <p className="text-gray-600 mt-1">{story.challenge}</p>
                  </div>
                  <div>
                    <span className="font-medium">Çözüm:</span>
                    <p className="text-gray-600 mt-1">{story.solution}</p>
                  </div>
                </div>

                <button className="mt-4 w-full text-center text-blue-600 font-medium hover:text-purple-600 transition-colors text-sm">
                  Detayları Gör →
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Sizin Başarı Hikayenizi de Yazalım!
            </h3>
            <p className="text-gray-600 mb-6">
              Bu başarı hikayelerinden biri de sizin olabilir. Ücretsiz danışmanlık alın ve 
              dijital pazarlama yolculuğunuza bugün başlayın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold">
                Ücretsiz Danışmanlık Al
              </button>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold">
                Tüm Referansları Gör
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;