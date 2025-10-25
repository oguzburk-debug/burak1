import React, { useState, useRef } from 'react';
import { Menu, X, ChevronDown, Zap, Search, Share2, PenTool, BarChart3, Target, Megaphone, Smartphone, Mail, ShoppingCart, Users, Award, TrendingUp, Globe, Brain, Heart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

 const services = [
  { name: 'Yeni Üye Karşılama', path: '/services/seo', icon: Search, gradient: 'from-blue-500 to-cyan-500', desc: 'Yeni üye olan müşterilerinize hoş geldiniz mesajı gönderin.' },
  { name: 'İlk Alışverişe Teşvik', path: '/services/social-media', icon: Share2, gradient: 'from-pink-500 to-rose-500', desc: 'İlk alışverişini yapan müşterilerinize özel indirim veya hediye sunun.' },
  { name: 'Doğum Günü', path: '/services/content-marketing', icon: PenTool, gradient: 'from-purple-500 to-indigo-500', desc: 'Müşterilerinizin doğum günlerinde kutlama mesajı iletin.' },
  { name: 'Trendyol Yorum', path: '/services/analytics', icon: BarChart3, gradient: 'from-green-500 to-emerald-500', desc: 'Trendyol yorumlarını sitenizde sergileyin.' },
  { name: 'Sepet Kurtarma', path: '/services/ppc', icon: Target, gradient: 'from-orange-500 to-red-500', desc: 'Terk edilen sepetleri hatırlatarak satışa dönüştürün.' },
  { name: 'Stok Hatırlatma', path: '/services/branding', icon: Megaphone, gradient: 'from-violet-500 to-purple-500', desc: 'Stokları tükenen ürünler tekrar geldiğinde müşterilere bildirin.' },
  { name: 'Sipariş Takibi', path: '/services/mobile-marketing', icon: Smartphone, gradient: 'from-teal-500 to-cyan-500', desc: 'Sipariş durumlarını müşterilerinize anlık olarak iletin.' },
  { name: 'Kargo Bildirimi', path: '/services/email-marketing', icon: Mail, gradient: 'from-indigo-500 to-blue-500', desc: 'Kargo süreci başladığında müşterilerinizi bilgilendirin.' },
  { name: 'Hediye Çarkı', path: '/services/ecommerce', icon: ShoppingCart, gradient: 'from-emerald-500 to-green-500', desc: 'Ziyaretçilere çark çevirerek anlık indirimler sunun.' },
  { name: 'İndirim Kulaklığı', path: '/services/customer-experience', icon: Users, gradient: 'from-rose-500 to-pink-500', desc: 'Sitenizde sabit indirim duyurularını gösterin.' },
  { name: 'Kampanya Çanı', path: '/services/digital-strategy', icon: Award, gradient: 'from-amber-500 to-orange-500', desc: 'Yeni kampanyalar başladığında bildirim gönderin.' },
  { name: 'Haftanın Ürünleri', path: '/services/growth-marketing', icon: TrendingUp, gradient: 'from-lime-500 to-green-500', desc: 'Öne çıkan ürünleri haftalık olarak sergileyin.' },
  { name: 'AI Raporlama', path: '/services/international-marketing', icon: Globe, gradient: 'from-sky-500 to-blue-500', desc: 'Kampanya performansını yapay zekâ ile analiz edin.' },
  { name: 'Çerez Yönetimi', path: '/services/marketing-automation', icon: Zap, gradient: 'from-yellow-500 to-orange-500', desc: 'Ziyaretçilerin çerez tercihlerini yönetin.' },
  { name: 'Sosyal Kanıt', path: '/services/customer-loyalty', icon: Heart, gradient: 'from-red-500 to-rose-500', desc: 'Diğer müşterilerin deneyimlerini yeni ziyaretçilere gösterin.' },
  { name: 'Çıkış Anketi', path: '/services/YeniUye', icon: Brain, gradient: 'from-purple-600 to-indigo-600', desc: 'Ziyaretçiler siteden ayrılmadan önce geri bildirim toplayın.' }
];

  const leftColumnServices = services.slice(0, 8);
  const rightColumnServices = services.slice(8, 16);

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">Pushonica</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Ana Sayfa</a>
            
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (closeTimeout.current) {
                  clearTimeout(closeTimeout.current);
                  closeTimeout.current = null;
                }
                setIsServicesOpen(true);
              }}
              onMouseLeave={() => {
                closeTimeout.current = setTimeout(() => {
                  setIsServicesOpen(false);
                }, 200);
              }}
            >
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                Hizmetler
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[800px] bg-white rounded-xl shadow-2xl border border-gray-100 p-6">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Dijital Pazarlama Modülleri</h3>
                    <p className="text-sm text-gray-500">16 güçlü modül ile işletmenizi büyütün</p>
                  </div>

                  {/* Services Grid - 4 columns for better organization */}
                  <div className="grid grid-cols-4 gap-4">
                    {services.map((service, index) => {
                      const Icon = service.icon;
                      return (
                        <a
                          key={index}
                          href={service.path}
                          className="group flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition-all duration-200"
                        >
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="text-center">
                            <div className="text-xs font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                              {service.name}
                            </div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Fiyatlandırma</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">Hakkımızda</a>
            <a href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">Blog</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">İletişim</a>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Teklif Al
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Ana Sayfa</a>
              
              {/* Mobile Services */}
              <div>
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors w-full text-left"
                >
                  Hizmetler
                  <ChevronDown className={`w-4 h-4 ml-1 transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {services.map((service, index) => (
                      <a
                        key={index}
                        href={service.path}
                        className="block text-sm text-gray-600 hover:text-blue-600 transition-colors py-1"
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Fiyatlandırma</a>
              <a href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">Hakkımızda</a>
              <a href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">Blog</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">İletişim</a>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 w-full">
                Teklif Al
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
