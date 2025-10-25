import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Smartphone, Monitor, Cloud, Brain, Shield, Zap } from 'lucide-react';

const DigitalTransformationSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

const transformations = [
  {
    title: 'Omnichannel Deneyim',
    subtitle: 'Tüm Kanalları Birleştirin',
    description: 'Web, mobil, sosyal medya ve fiziksel mağaza deneyimini tek platformda birleştirin.',
    icon: Monitor,
    gradient: 'from-blue-500 to-cyan-500',
    stats: { before: '45%', after: '89%', metric: 'Müşteri Memnuniyeti' },
    features: [
      'Unified customer journey',
      'Cross-platform analytics',
      'Integrated CRM systems', 
      'Seamless user experience'
    ],
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'Omnichannel Deneyim',
    subtitle: 'Tüm Kanalları Birleştirin',
    description: 'Web, mobil, sosyal medya ve fiziksel mağaza deneyimini tek platformda birleştirin.',
    icon: Monitor,
    gradient: 'from-blue-500 to-cyan-500',
    stats: { before: '45%', after: '89%', metric: 'Müşteri Memnuniyeti' },
    features: [
      'Unified customer journey',
      'Cross-platform analytics',
      'Integrated CRM systems',
      'Seamless user experience'
    ],
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'Cloud-Based Çözümler',
    subtitle: 'Bulut Teknolojisi',
    description: 'Ölçeklenebilir, güvenli ve maliyet-etkin bulut çözümleriyle işletmenizi geleceğe hazırlayın.',
    icon: Cloud,
    gradient: 'from-purple-500 to-indigo-500',
    stats: { before: '12%', after: '67%', metric: 'Operasyonel Verimlilik' },
    features: [
      'Cloud migration strategy',
      'Scalable infrastructure',
      'Data backup & security',
      'Cost optimization'
    ],
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'AI & Automation',
    subtitle: 'Yapay Zeka Entegrasyonu',
    description: 'Yapay zeka ve otomasyon teknolojileriyle iş süreçlerinizi optimize edin.',
    icon: Brain,
    gradient: 'from-green-500 to-emerald-500',
    stats: { before: '8%', after: '54%', metric: 'Süreç Otomasyonu' },
    features: [
      'Chatbot implementation',
      'Predictive analytics',
      'Automated workflows',
      'Machine learning insights'
    ],
    image: 'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'Cybersecurity',
    subtitle: 'Dijital Güvenlik',
    description: 'Dijital varlıklarınızı en son güvenlik teknolojileriyle koruyun.',
    icon: Shield,
    gradient: 'from-orange-500 to-red-500',
    stats: { before: '34%', after: '96%', metric: 'Güvenlik Skoru' },
    features: [
      'Multi-factor authentication',
      'Data encryption',
      'Security monitoring',
      'Compliance management'
    ],
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'Performance Optimization',
    subtitle: 'Hız ve Performans',
    description: 'Web sitenizin hızını ve performansını optimize ederek kullanıcı deneyimini geliştirin.',
    icon: Zap,
    gradient: 'from-yellow-500 to-orange-500',
    stats: { before: '3.2s', after: '0.8s', metric: 'Sayfa Yükleme' },
    features: [
      'Core Web Vitals optimization',
      'CDN implementation',
      'Image optimization',
      'Code minification'
    ],
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600'

  }
];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % transformations.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, transformations.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % transformations.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + transformations.length) % transformations.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const currentTransformation = transformations[currentSlide];
  const Icon = currentTransformation.icon;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-green-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Dijital <span className="text-blue-600">Dönüşüm</span> Teknolojileri
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            En son teknolojilerle işletmenizi geleceğe hazırlıyoruz
          </p>
        </div>

        <div className="relative">
          {/* Main Transformation Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Content Side */}
              <div className="p-12">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${currentTransformation.gradient} flex items-center justify-center mr-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      Teknoloji #{currentSlide + 1}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{currentTransformation.title}</h3>
                  </div>
                </div>

                <div className={`inline-block bg-gradient-to-r ${currentTransformation.gradient} text-white px-4 py-2 rounded-full text-sm font-medium mb-6`}>
                  {currentTransformation.subtitle}
                </div>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {currentTransformation.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Teknoloji Özellikleri:</h4>
                  <ul className="space-y-3">
                    {currentTransformation.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Zap className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Before/After Stats */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Performans İyileştirmesi</h4>
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-500 mb-1">{currentTransformation.stats.before}</div>
                      <div className="text-sm text-gray-600">Öncesi</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl text-gray-400">→</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-500 mb-1">{currentTransformation.stats.after}</div>
                      <div className="text-sm text-gray-600">Sonrası</div>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <div className="text-sm font-medium text-gray-700">{currentTransformation.stats.metric}</div>
                  </div>
                </div>
              </div>

              {/* Visual Side */}
              <div className="relative">
                <img
                  src={currentTransformation.image}
                  alt={currentTransformation.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${currentTransformation.gradient} opacity-20`}></div>
                
                {/* Floating Tech Badge */}
                <div className="absolute top-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 text-center">
                    <Icon className={`w-8 h-8 mx-auto mb-2 text-transparent bg-gradient-to-r ${currentTransformation.gradient} bg-clip-text`} />
                    <div className="text-xs font-medium text-gray-600">Teknoloji</div>
                  </div>
                </div>
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

        {/* Technology Navigation */}
        <div className="flex justify-center flex-wrap gap-3 mt-12">
          {transformations.map((transformation, index) => {
            const TechIcon = transformation.icon;
            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`group relative p-4 rounded-2xl transition-all duration-300 ${
                  index === currentSlide
                    ? `bg-gradient-to-r ${transformation.gradient} text-white shadow-lg scale-110`
                    : 'bg-white text-gray-400 hover:text-gray-600 shadow-md hover:shadow-lg'
                }`}
              >
                <TechIcon className="w-6 h-6" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  {transformation.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Progress Indicator */}
        <div className="mt-8 max-w-md mx-auto">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>Dijital Teknolojiler</span>
            <span>{currentSlide + 1} / {transformations.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full bg-gradient-to-r ${currentTransformation.gradient} transition-all duration-500`}
              style={{ width: `${((currentSlide + 1) / transformations.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalTransformationSlider;
