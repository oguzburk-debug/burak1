import React, { useState } from 'react';
import { Calendar, User, Tag, ArrowRight, Search } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');

  const categories = ['Tümü', 'SEO', 'Sosyal Medya', 'İçerik Pazarlama', 'PPC', 'Analitik', 'Trendler'];

  const blogPosts = [
    {
      id: 1,
      title: "2025 SEO Trendleri: Google'ın Yeni Algoritma Güncellemeleri",
      excerpt: "Google'ın 2025 yılında yaptığı önemli algoritma değişiklikleri ve SEO stratejilerinize etkilerini detaylı olarak inceliyoruz.",
      category: 'SEO',
      author: 'Ercan Ulu',
      date: '15 Mart 2025',
      readTime: '8 dk',
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: true
    },
    {
      id: 2,
      title: 'Instagram Reels ile Organik Erişimi Nasıl Artırırsınız?',
      excerpt: "Instagram Reels'in algoritmasını anlayarak organik erişiminizi maksimuma çıkarmanın yollarını öğrenin.",
      category: 'Sosyal Medya',
      author: 'Ercan Ulu',
      date: '12 Mart 2025',
      readTime: '6 dk',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 3,
      title: "İçerik Pazarlama ROI'sini Ölçmenin 5 Etkili Yolu",
      excerpt: 'İçerik pazarlama yatırımlarınızın geri dönüşünü doğru şekilde ölçmek için kullanabileceğiniz metrikler ve araçlar.',
      category: 'İçerik Pazarlama',
      author: 'Ercan Ulu',
      date: '10 Mart 2025',
      readTime: '7 dk',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 4,
      title: "Google Ads'te Kalite Puanını Yükseltmenin Sırları",
      excerpt: 'Google Ads kampanyalarınızda kalite puanını artırarak daha düşük maliyetlerle daha iyi sonuçlar elde edin.',
      category: 'PPC',
      author: 'Ercan Ulu',
      date: '8 Mart 2025',
      readTime: '9 dk',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 5,
      title: 'GA4 ile E-ticaret Analizi: Kapsamlı Rehber',
      excerpt: 'Google Analytics 4 ile e-ticaret sitenizin performansını detaylı olarak analiz etmenin yolları.',
      category: 'Analitik',
      author: 'Ercan Ulu',
      date: '5 Mart 2025',
      readTime: '12 dk',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 6,
      title: 'TikTok Marketing: Z Kuşağına Ulaşmanın Yeni Yolu',
      excerpt: "TikTok'ta etkili pazarlama stratejileri ile genç hedef kitleye ulaşmanın püf noktaları.",
      category: 'Sosyal Medya',
      author: 'Ercan Ulu',
      date: '3 Mart 2025',
      readTime: '5 dk',
      image: 'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 7,
      title: 'Voice Search Optimizasyonu: Geleceğin SEO Stratejisi',
      excerpt: 'Sesli arama optimizasyonu ile sitenizi gelecekteki arama trendlerine hazırlayın.',
      category: 'SEO',
      author: 'Ercan Ulu',
      date: '1 Mart 2025',
      readTime: '10 dk',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 8,
      title: '2025 Dijital Pazarlama Trendleri ve Öngörüler',
      excerpt: 'Bu yıl dijital pazarlama dünyasını şekillendirecek en önemli trendler ve gelişmeler.',
      category: 'Trendler',
      author: 'Ercan Ulu',
      date: '28 Şubat 2025',
      readTime: '15 dk',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    }
  ];

  const filteredPosts = selectedCategory === 'Tümü' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Pushonica <span className="text-blue-600">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Dijital pazarlama dünyasındaki en güncel trendler, stratejiler ve uzman görüşleri.
              Sektörün nabzını tutan içeriklerle bilginizi güncel tutun.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Blog yazılarında ara..."
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === 'Tümü' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-12 text-white">
                  <div className="inline-flex items-center bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                    <Tag className="w-4 h-4 mr-2" />
                    Öne Çıkan
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
                  <p className="text-blue-100 mb-6 text-lg">{featuredPost.excerpt}</p>
                  <div className="flex items-center space-x-6 mb-8">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      <a href="/yazar/sss" className="text-sm hover:underline">
                        Burak Oğuz
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{featuredPost.date}</span>
                    </div>
                    <span className="text-sm">{featuredPost.readTime} okuma</span>
                  </div>
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold flex items-center">
                    Devamını Oku
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
                <div className="relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        <a href="/yazar/sss" className="hover:underline text-sm">
                          Burak Oğuz
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <span>{post.readTime} okuma</span>
                  </div>
                  
                  <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors flex items-center">
                    Devamını Oku
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Blog Güncellemelerini Kaçırmayın
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Yeni blog yazılarımızdan haberdar olmak için e-posta listemize katılın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-1 px-6 py-3 rounded-full border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold">
              Abone Ol
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
