import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Search, Users, Target, BarChart3, Lightbulb, Rocket, CheckCircle, TrendingUp } from 'lucide-react';

const ProcessSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const processes = [
    {
      title: 'Keşif ve Analiz',
      subtitle: 'Projenin Temeli',
      description: 'Markanızı, hedef kitlenizi ve rekabet ortamınızı derinlemesine analiz ediyoruz',
      icon: Search,
      gradient: 'from-blue-500 to-cyan-500',
      steps: [
        'Marka ve sektör analizi',
        'Hedef kitle araştırması',
        'Rakip analizi ve benchmark',
        'Mevcut dijital varlık değerlendirmesi',
        'SWOT analizi ve fırsat tespiti'
      ],
      duration: '1-2 Hafta',
      deliverables: ['Detaylı analiz raporu', 'Hedef kitle profilleri', 'Rakip analizi', 'Fırsat haritası'],
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Strateji Geliştirme',
      subtitle: 'Yol Haritası Oluşturma',
      description: 'Analiz sonuçlarına dayalı olarak size özel dijital pazarlama stratejisi geliştiriyoruz',
      icon: Lightbulb,
      gradient: 'from-purple-500 to-indigo-500',
      steps: [
        'Dijital pazarlama stratejisi tasarımı',
        'Kanal seçimi ve önceliklendirme',
        'İçerik stratejisi planlaması',
        'Bütçe dağılımı ve timeline',
        'KPI belirleme ve ölçüm planı'
      ],
      duration: '1 Hafta',
      deliverables: ['Strateji dokümanı', 'Kanal planı', 'İçerik takvimi', 'Bütçe planı'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Uygulama ve Lansман',
      subtitle: 'Stratejinin Hayata Geçirilmesi',
      description: 'Geliştirilen stratejileri profesyonel ekibimizle hayata geçiriyoruz',
      icon: Rocket,
      gradient: 'from-green-500 to-emerald-500',
      steps: [
        'Teknik altyapı kurulumu',
        'İçerik üretimi ve yayınlama',
        'Reklam kampanyalarının başlatılması',
        'SEO optimizasyonlarının uygulanması',
        'Sosyal medya hesaplarının aktifleştirilmesi'
      ],
      duration: '2-4 Hafta',
      deliverables: ['Canlı kampanyalar', 'Optimized web sitesi', 'Aktif sosyal medya', 'Reklam hesapları'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'İzleme ve Optimizasyon',
      subtitle: 'Sürekli İyileştirme',
      description: 'Performansı sürekli izleyerek kampanyaları optimize ediyoruz',
      icon: BarChart3,
      gradient: 'from-orange-500 to-red-500',
      steps: [
        'Günlük performans takibi',
        'A/B testleri ve optimizasyonlar',
        'Haftalık rapor ve analiz',
        'Strateji güncellemeleri',
        'ROI maksimizasyonu'
      ],
      duration: 'Sürekli',
      deliverables: ['Haftalık raporlar', 'Optimizasyon önerileri', 'Performance dashboard', 'Strateji güncellemeleri'],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % processes.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, processes.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % processes.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + processes.length) % processes.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const currentProcess = processes[currentSlide];
  const Icon = currentProcess.icon;

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-green-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Çalışma <span className="text-blue-600">Sürecimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Başarılı dijital pazarlama projelerinin arkasındaki sistematik yaklaşımımızı keşfedin
          </p>
        </div>

        <div className="relative">
          {/* Main Process Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Content Side */}
              <div className="p-12">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${currentProcess.gradient} flex items-center justify-center mr-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      Adım {currentSlide + 1}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{currentProcess.title}</h3>
                  </div>
                </div>

                <div className={`inline-block bg-gradient-to-r ${currentProcess.gradient} text-white px-4 py-2 rounded-full text-sm font-medium mb-6`}>
                  {currentProcess.subtitle}
                </div>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {currentProcess.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Süreç Adımları:</h4>
                  <ul className="space-y-3">
                    {currentProcess.steps.map((step, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-1">Süre</div>
                    <div className="text-lg font-semibold text-gray-900">{currentProcess.duration}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-1">Çıktılar</div>
                    <div className="text-lg font-semibold text-gray-900">{currentProcess.deliverables.length} Deliverable</div>
                  </div>
                </div>
              </div>

              {/* Visual Side */}
              <div className="relative">
                <img
                  src={currentProcess.image}
                  alt={currentProcess.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${currentProcess.gradient} opacity-20`}></div>
                
                {/* Deliverables Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Teslim Edilecekler:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {currentProcess.deliverables.map((deliverable, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentProcess.gradient} mr-2`}></div>
                          {deliverable}
                        </div>
                      ))}
                    </div>
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

        {/* Process Timeline */}
        <div className="mt-12">
          <div className="flex justify-center items-center space-x-4">
            {processes.map((process, index) => {
              const ProcessIcon = process.icon;
              return (
                <div key={index} className="flex items-center">
                  <button
                    onClick={() => goToSlide(index)}
                    className={`relative p-4 rounded-2xl transition-all duration-300 ${
                      index === currentSlide
                        ? `bg-gradient-to-r ${process.gradient} text-white shadow-lg scale-110`
                        : 'bg-white text-gray-400 hover:text-gray-600 shadow-md hover:shadow-lg'
                    }`}
                  >
                    <ProcessIcon className="w-6 h-6" />
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium whitespace-nowrap">
                      Adım {index + 1}
                    </div>
                  </button>
                  {index < processes.length - 1 && (
                    <div className={`w-12 h-1 mx-2 rounded-full transition-all duration-500 ${
                      index < currentSlide ? `bg-gradient-to-r ${processes[index].gradient}` : 'bg-gray-200'
                    }`}></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-8 max-w-md mx-auto">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>Süreç İlerlemesi</span>
            <span>{currentSlide + 1} / {processes.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full bg-gradient-to-r ${currentProcess.gradient} transition-all duration-500`}
              style={{ width: `${((currentSlide + 1) / processes.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSlider;