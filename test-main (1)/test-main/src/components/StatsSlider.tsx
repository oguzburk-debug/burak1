import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Award, Target, BarChart3, Zap } from 'lucide-react';

const StatsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animatedValues, setAnimatedValues] = useState({
    clients: 0,
    projects: 0,
    success: 0,
    growth: 0
  });

  const stats = [
    {
      icon: Users,
      label: 'Mutlu Müşteri',
      value: 198,
      suffix: '+',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      label: 'Tamamlanan Proje',
      value: 553,
      suffix: '+',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      label: 'Başarı Oranı',
      value: 98,
      suffix: '%',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      label: 'Ortalama Büyüme',
      value: 250,
      suffix: '%',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const achievements = [
    {
      title: 'E-ticaret Sitesi Trafiği',
      description: '6 ayda %400 artış',
      metric: '2.5M',
      label: 'Aylık Ziyaretçi',
      icon: BarChart3,
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      title: 'Sosyal Medya Kampanyası',
      description: 'Viral içerik ile rekor kırıldı',
      metric: '15M',
      label: 'Görüntülenme',
      icon: Zap,
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Kurtarılan Sepet',
      description: 'Maliyet %60 azaldı, dönüşüm %180 arttı',
      metric: '8.5x',
      label: 'ROI Artışı',
      icon: Target,
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % achievements.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animateValues = () => {
      stats.forEach((stat, index) => {
        let current = 0;
        const increment = stat.value / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }
          setAnimatedValues(prev => ({
            ...prev,
            [index === 0 ? 'clients' : index === 1 ? 'projects' : index === 2 ? 'success' : 'growth']: Math.floor(current)
          }));
        }, 30);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateValues();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const getAnimatedValue = (index: number) => {
    const values = [animatedValues.clients, animatedValues.projects, animatedValues.success, animatedValues.growth];
    return values[index];
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats Grid */}
        <div id="stats-section" className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {getAnimatedValue(index)}{stat.suffix}
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Achievement Slider */}
        <div className="relative">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Başarı Hikayelerimiz</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Müşterilerimizle birlikte elde ettiğimiz başarıların öne çıkan örnekleri
            </p>
          </div>

          <div className="relative h-80 overflow-hidden rounded-2xl">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 transform ${
                    index === currentSlide
                      ? 'translate-x-0 opacity-100'
                      : index < currentSlide
                      ? '-translate-x-full opacity-0'
                      : 'translate-x-full opacity-0'
                  }`}
                >
                  <div className={`h-full bg-gradient-to-r ${achievement.gradient} rounded-2xl p-8 flex items-center justify-between text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                    
                    <div className="flex-1 relative z-10">
                      <h4 className="text-2xl font-bold mb-2">{achievement.title}</h4>
                      <p className="text-white/90 mb-4">{achievement.description}</p>
                      <div className="flex items-center space-x-4">
                        <div>
                          <div className="text-4xl font-bold">{achievement.metric}</div>
                          <div className="text-white/80 text-sm">{achievement.label}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative z-10">
                      <Icon className="w-24 h-24 text-white/20" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Slider Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {achievements.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSlider;
