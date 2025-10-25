import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Search, Share2, PenTool, BarChart3, Target, Megaphone } from 'lucide-react';

const FeatureSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const features = [
    {
      icon: Search,
      title: 'SEO Optimizasyonu',
      description: 'Google arama sonuçlarında üst sıralarda yer alın',
      details: [
        'Anahtar kelime araştırması ve analizi',
        'Teknik SEO optimizasyonu',
        'İçerik optimizasyonu ve link building',
        'Yerel SEO ve Google My Business yönetimi'
      ],
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-blue-500 to-cyan-500',
      stats: { metric: '+250%', label: 'Organik Trafik Artışı' }
    },
    {
      icon: Share2,
      title: 'Sosyal Medya Yönetimi',
      description: 'Tüm platformlarda güçlü bir varlık oluşturun',
      details: [
        'İçerik planlaması ve üretimi',
        'Community management ve etkileşim',
        'Influencer iş birlikleri',
        'Sosyal medya reklamları'
      ],
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-pink-500 to-rose-500',
      stats: { metric: '+400%', label: 'Sosyal Medya Etkileşimi' }
    },
    {
      icon: PenTool,
      title: 'İçerik Pazarlama',
      description: 'Değer yaratan, etkileyen içerikler üretin',
      details: [
        'Blog yazılımı ve editöryel takvim',
        'Video prodüksiyon ve montaj',
        'Grafik tasarım ve infografik',
        'E-kitap ve whitepaper hazırlama'
      ],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-purple-500 to-indigo-500',
      stats: { metric: '+180%', label: 'İçerik Etkileşimi' }
    },
    {
      icon: BarChart3,
      title: 'Veri Analizi',
      description: 'Detaylı analiz ile performansı optimize edin',
      details: [
        'Google Analytics kurulum ve yönetimi',
        'Conversion tracking ve hedef belirleme',
        'Heatmap analizi ve kullanıcı davranışı',
        'A/B testing ve optimizasyon'
      ],
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-green-500 to-emerald-500',
      stats: { metric: '+95%', label: 'Dönüşüm Oranı Artışı' }
    },
    {
      icon: Target,
      title: 'PPC Reklamcılık',
      description: 'Hedefli reklamlarla hızla sonuç alın',
      details: [
        'Google Ads kampanya yönetimi',
        'Facebook ve Instagram reklamları',
        'LinkedIn B2B reklamları',
        'Retargeting ve lookalike audiences'
      ],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-orange-500 to-red-500',
      stats: { metric: '8.5x', label: 'ROI Artışı' }
    },
    {
      icon: Megaphone,
      title: 'Marka Yönetimi',
      description: 'Güçlü marka kimliği oluşturun',
      details: [
        'Marka stratejisi ve konumlandırma',
        'Logo ve kurumsal kimlik tasarımı',
        'Marka rehberi ve standartları',
        'Reputation management'
      ],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-violet-500 to-purple-500',
      stats: { metric: '+320%', label: 'Marka Bilinirliği' }
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, features.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const currentFeature = features[currentSlide];
  const Icon = currentFeature.icon;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Hizmet <span className="text-blue-600">Detayları</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Her hizmetimizin detaylarını keşfedin ve işletmeniz için en uygun çözümü bulun
          </p>
        </div>

        <div className="relative">
          {/* Main Slider Content */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
              {/* Content Side */}
              <div className="p-12 flex flex-col justify-center">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${currentFeature.gradient} flex items-center justify-center mb-6 transform transition-all duration-500`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {currentFeature.title}
                </h3>

                <p className="text-xl text-gray-600 mb-8">
                  {currentFeature.description}
                </p>

                <ul className="space-y-4 mb-8">
                  {currentFeature.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className={`inline-flex items-center bg-gradient-to-r ${currentFeature.gradient} text-white px-6 py-3 rounded-full`}>
                  <span className="text-2xl font-bold mr-2">{currentFeature.stats.metric}</span>
                  <span className="text-sm opacity-90">{currentFeature.stats.label}</span>
                </div>
              </div>

              {/* Image Side */}
              <div className="relative overflow-hidden">
                <img
                  src={currentFeature.image}
                  alt={currentFeature.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${currentFeature.gradient} opacity-20`}></div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-3 mt-8">
          {features.map((feature, index) => {
            const FeatureIcon = feature.icon;
            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`group relative p-3 rounded-xl transition-all duration-300 ${
                  index === currentSlide
                    ? `bg-gradient-to-r ${feature.gradient} text-white shadow-lg scale-110`
                    : 'bg-white text-gray-400 hover:text-gray-600 shadow-md hover:shadow-lg'
                }`}
              >
                <FeatureIcon className="w-6 h-6" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  {feature.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Progress Bar */}
        <div className="mt-8 max-w-md mx-auto">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>İlerleme</span>
            <span>{currentSlide + 1} / {features.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full bg-gradient-to-r ${currentFeature.gradient} transition-all duration-500`}
              style={{ width: `${((currentSlide + 1) / features.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSlider;