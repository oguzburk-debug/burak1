import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, Share2, PenTool, BarChart3, Target, Megaphone, 
  Smartphone, Mail, ShoppingCart, Users, Award, TrendingUp,
  Globe, Zap, Heart, Brain
} from 'lucide-react';

const ModulesGrid = () => {
  const navigate = useNavigate();

  const modules = [
    
 {
  id: 1,
  title: 'Yeni Üye Karşılama',
  description: 'Yeni üye olan müşterilerinize hoş geldiniz mesajı gönderin.',
  icon: Search,
  gradient: 'from-blue-500 to-cyan-500',
  path: '/services/seo'
},
{
  id: 2,
  title: 'İlk Alışverişe Teşvik',
  description: 'İlk alışverişi yapan müşterilerinize özel indirim veya hediye sunun.',
  icon: Share2,
  gradient: 'from-pink-500 to-rose-500',
  path: '/services/social-media'
},
{
  id: 3,
  title: 'Doğum Günü',
  description: 'Müşterilerinizin doğum günlerinde kutlama mesajı iletin.',
  icon: PenTool,
  gradient: 'from-purple-500 to-indigo-500',
  path: '/services/content-marketing'
},
{
  id: 4,
  title: 'Trendyol Yorum',
  description: 'Trendyol yorumlarını sitenizde sergileyin.',
  icon: BarChart3,
  gradient: 'from-green-500 to-emerald-500',
  path: '/services/analytics'
},
{
  id: 5,
  title: 'Sepet Kurtarma',
  description: 'Terk edilen sepetleri hatırlatarak satışa dönüştürün.',
  icon: Target,
  gradient: 'from-orange-500 to-red-500',
  path: '/services/ppc'
},
{
  id: 6,
  title: 'Stok Hatırlatma',
  description: 'Stokları tükenen ürünler tekrar geldiğinde müşterilere bildirin.',
  icon: Megaphone,
  gradient: 'from-violet-500 to-purple-500',
  path: '/services/branding'
},
{
  id: 7,
  title: 'Sipariş Takibi',
  description: 'Sipariş durumlarını müşterilerinize anlık bildirin.',
  icon: Smartphone,
  gradient: 'from-teal-500 to-cyan-500',
  path: '/services/mobile-marketing'
},
{
  id: 8,
  title: 'Kargo Bildirimi',
  description: 'Kargo süreci başladığında müşterinizi bilgilendirin.',
  icon: Mail,
  gradient: 'from-indigo-500 to-blue-500',
  path: '/services/email-marketing'
},
{
  id: 9,
  title: 'Hediye Çarkı',
  description: 'Ziyaretçilere çark çevirerek anlık indirimler sunun.',
  icon: ShoppingCart,
  gradient: 'from-emerald-500 to-green-500',
  path: '/services/ecommerce'
},
{
  id: 10,
  title: 'İndirim Kulakçığı',
  description: 'Sitenizde sabit indirim duyuruları gösterin.',
  icon: Users,
  gradient: 'from-rose-500 to-pink-500',
  path: '/services/customer-experience'
},
{
  id: 11,
  title: 'Kampanya Çanı',
  description: 'Yeni kampanyalar başladığında bildirim gönderin.',
  icon: Award,
  gradient: 'from-amber-500 to-orange-500',
  path: '/services/digital-strategy'
},
{
  id: 12,
  title: 'Haftanın Ürünleri',
  description: 'Öne çıkan ürünleri haftalık olarak sergileyin.',
  icon: TrendingUp,
  gradient: 'from-lime-500 to-green-500',
  path: '/services/growth-marketing'
},
{
  id: 13,
  title: 'AI Raporlama',
  description: 'Kampanya performansını yapay zekâ ile analiz edin.',
  icon: Globe,
  gradient: 'from-sky-500 to-blue-500',
  path: '/services/international-marketing'
},
{
  id: 14,
  title: 'Çerez Yönetimi',
  description: 'Ziyaretçilerin çerez tercihlerini yönetin.',
  icon: Zap,
  gradient: 'from-yellow-500 to-orange-500',
  path: '/services/marketing-automation'
},
{
  id: 15,
  title: 'Sosyal Kanıt',
  description: 'Diğer müşterilerin deneyimlerini sitenizde gösterin.',
  icon: Heart,
  gradient: 'from-red-500 to-rose-500',
  path: '/services/customer-loyalty'
},
{
  id: 16,
  title: 'Çıkış Anketi',
  description: 'Ziyaretçiler siteden ayrılmadan önce geri bildirim toplayın.',
  icon: Brain,
  gradient: 'from-purple-600 to-indigo-600',
  path: '/services/ai-marketing'
}
  ];

  const handleModuleClick = (path: string) => {
    navigate(path);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Dijital Pazarlama <span className="text-blue-600">Modüllerimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            İşletmenizin ihtiyaçlarına özel 16 farklı modül ile dijital dünyada başarıya ulaşın.
            Her modül, uzman ekibimiz tarafından özenle tasarlanmış çözümler sunar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <div
                key={module.id}
                onClick={() => handleModuleClick(module.path)}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-100 hover:border-blue-200"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${module.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {module.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {module.description}
                </p>
                
                <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors">
                  <span>Detayları Gör</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Hangi Modülün Size Uygun Olduğunu Merak Ediyor musunuz?
            </h3>
            <p className="text-gray-600 mb-6">
              Uzman ekibimiz, işletmenizin ihtiyaçlarını analiz ederek size en uygun modül kombinasyonunu önerir.
              Ücretsiz danışmanlık alın ve dijital dönüşüm yolculuğunuza bugün başlayın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold">
                Ücretsiz Danışmanlık Al
              </button>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold">
                Tüm Modülleri Karşılaştır
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulesGrid;