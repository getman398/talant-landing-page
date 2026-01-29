import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-border shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Icon name="Cpu" className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">ПРО-СЕРВИС</h1>
                <p className="text-xs text-muted-foreground">IT Solutions</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-primary transition-colors">
                О нас
              </button>
              <button onClick={() => scrollToSection('services')} className="text-muted-foreground hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-muted-foreground hover:text-primary transition-colors">
                Контакты
              </button>
            </nav>
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90" onClick={() => navigate('/contacts')}>
              <Icon name="MessageSquare" className="mr-2 h-4 w-4" />
              Связаться
            </Button>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20">
                  Цифровая трансформация
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Универсальный помощник в 
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> цифровом мире</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Помогаем бизнесу наладить отношения с современными технологиями: CRM, API, нейросети и автоматизация процессов
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90" onClick={() => scrollToSection('services')}>
                  <Icon name="Sparkles" className="mr-2 h-5 w-5" />
                  Наши услуги
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate('/contacts')}>
                  <Icon name="Phone" className="mr-2 h-5 w-5" />
                  Связаться
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl"></div>
              <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 p-6 rounded-xl border border-blue-500/20">
                    <Icon name="Brain" className="h-10 w-10 text-blue-400 mb-3" />
                    <h3 className="font-semibold text-foreground mb-1">Нейросети</h3>
                    <p className="text-xs text-muted-foreground">AI интеграции</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 p-6 rounded-xl border border-purple-500/20">
                    <Icon name="Database" className="h-10 w-10 text-purple-400 mb-3" />
                    <h3 className="font-semibold text-foreground mb-1">CRM системы</h3>
                    <p className="text-xs text-muted-foreground">Управление клиентами</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 p-6 rounded-xl border border-green-500/20">
                    <Icon name="Zap" className="h-10 w-10 text-green-400 mb-3" />
                    <h3 className="font-semibold text-foreground mb-1">Автоматизация</h3>
                    <p className="text-xs text-muted-foreground">Бизнес-процессы</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 p-6 rounded-xl border border-orange-500/20">
                    <Icon name="Workflow" className="h-10 w-10 text-orange-400 mb-3" />
                    <h3 className="font-semibold text-foreground mb-1">API</h3>
                    <p className="text-xs text-muted-foreground">Интеграции систем</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20 inline-block mb-4">
              О нас
            </span>
            <h2 className="text-4xl font-bold text-foreground mb-4">ООО "ПРО-СЕРВИС"</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>
          
          <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
            <p className="text-center">
              <span className="font-semibold text-foreground">ООО "ПРО-СЕРВИС"</span> - универсальный помощник в цифровом мире. 
              Наша компания помогает бизнесу наладить отношения с современными технологиями.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 my-12">
              <Card className="bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Users" className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Команда экспертов</h3>
                  <p className="text-sm text-muted-foreground">ИТ-специалисты из разных компаний</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-accent/5 to-transparent border-accent/20">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Target" className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Сложные задачи</h3>
                  <p className="text-sm text-muted-foreground">CRM, API, автоматизация, ИИ</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-blue-500/5 to-transparent border-blue-500/20">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Sparkles" className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Современные tech</h3>
                  <p className="text-sm text-muted-foreground">Передовые технологии</p>
                </CardContent>
              </Card>
            </div>
            
            <p className="text-center">
              Команда ПРО-СЕРВИС - это группа ИТ-специалистов, собранных из разных компаний в сфере индустрии современных технологий. 
              Мы могли бы делать сайты и заниматься интернет-рекламой, но выбрали для себя нечто более сложное и интересное - 
              <span className="font-semibold text-foreground"> CRM, API, продажи, автоматизация бизнеса и, конечно, искусственный интеллект</span>.
            </p>
            
            <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 rounded-xl p-6 text-center">
              <p className="text-foreground">
                <Icon name="Sparkles" className="inline h-5 w-5 text-primary mr-2" />
                Кстати говоря, даже этот сайт сделала нейронка, в которую мы вбили хорошие промты.
                <Icon name="Sparkles" className="inline h-5 w-5 text-accent ml-2" />
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20 inline-block mb-4">
              Услуги
            </span>
            <h2 className="text-4xl font-bold text-foreground mb-4">Наши услуги</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Комплексные решения для цифровой трансформации вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Database" className="h-7 w-7 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Внедрение CRM</h3>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Анализ бизнес-процессов и подбор подходящей системы CRM</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Миграция данных и интеграция с существующими системами</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Настройка модулей для управления клиентами, сделками, задачами и отчетами</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Обучение сотрудников работе с CRM</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Поддержка и сопровождение после внедрения</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:opacity-90" onClick={() => navigate('/rashet')}>
                  Рассчитать стоимость
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Brain" className="h-7 w-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Интеграция нейросетей</h3>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Анализ задач и определение возможностей использования нейросетей</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Внедрение моделей для обработки текста, изображений, звука или других данных</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Настройка и обучение моделей под конкретные бизнес-потребности</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Интеграция нейросетей в существующие системы и процессы</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Мониторинг и оптимизация работы нейросетей</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:opacity-90" onClick={() => navigate('/rashet')}>
                  Рассчитать стоимость
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="TrendingUp" className="h-7 w-7 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Построение воронок продаж</h3>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Анализ целевой аудитории и этапов продаж</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Разработка стратегии и сценариев взаимодействия с клиентами</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Создание визуальных и автоматизированных воронок в CRM или других платформах</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Настройка автоматических уведомлений и триггеров</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Аналитика эффективности и оптимизация воронок</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:opacity-90" onClick={() => navigate('/rashet')}>
                  Рассчитать стоимость
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Zap" className="h-7 w-7 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Автоматизация бизнеса</h3>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Анализ текущих бизнес-процессов и выявление узких мест</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Внедрение систем автоматизации для маркетинга, продаж, учета и других функций</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Настройка автоматических сценариев, напоминаний и отчетов</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Интеграция с внешними сервисами и платформами</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Обучение сотрудников работе с автоматизированными системами</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:opacity-90" onClick={() => navigate('/rashet')}>
                  Рассчитать стоимость
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="MessageSquare" className="h-7 w-7 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Создание и настройка чат-ботов с ИИ</h3>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Разработка сценариев взаимодействия и логики чат-бота</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Обучение модели ИИ для понимания и обработки запросов пользователей</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Интеграция чат-бота на сайт, в мессенджеры или соцсети</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Настройка автоматических ответов, FAQ и сценариев диалогов</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Мониторинг и улучшение работы бота на основе аналитики</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:opacity-90" onClick={() => navigate('/rashet')}>
                  Рассчитать стоимость
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500/20 to-pink-600/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Workflow" className="h-7 w-7 text-pink-400" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Настройка API</h3>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Анализ требований к интеграции и обмену данными</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Разработка и настройка API для взаимодействия систем</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Обеспечение безопасности и авторизации при работе с API</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Документирование и тестирование API</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Поддержка</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:opacity-90" onClick={() => navigate('/rashet')}>
                  Рассчитать стоимость
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20 inline-block mb-4">
              Контакты
            </span>
            <h2 className="text-4xl font-bold text-foreground mb-4">Свяжитесь с нами</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 shadow-lg">
              <CardContent className="p-8">
                <div className="mb-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                      <Icon name="Building2" className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">ООО "ПРО-СЕРВИС"</h3>
                      <p className="text-sm text-muted-foreground">Цифровая трансформация бизнеса</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-4 p-4 bg-secondary rounded-lg">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="User" className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Генеральный директор</p>
                      <p className="font-semibold text-foreground">Рычков Иван Николаевич</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-secondary rounded-lg">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Телефон</p>
                      <a href="tel:+79821242528" className="font-semibold text-foreground hover:text-primary transition-colors">
                        +7 982 124 25-28
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-secondary rounded-lg">
                    <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email</p>
                      <a href="mailto:pro_servic@inbox.ru" className="font-semibold text-foreground hover:text-primary transition-colors break-all">
                        pro_servic@inbox.ru
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-secondary rounded-lg">
                    <div className="w-10 h-10 bg-purple-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="FileText" className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">ИНН</p>
                      <p className="font-semibold text-foreground">1800039320</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 bg-white border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Icon name="Cpu" className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <p className="font-bold text-foreground">ООО "ПРО-СЕРВИС"</p>
                <p className="text-xs text-muted-foreground">Цифровая трансформация бизнеса</p>
              </div>
            </div>
            <div className="flex space-x-6">
              <a href="tel:+79821242528" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Phone" className="h-5 w-5" />
              </a>
              <a href="mailto:pro_servic@inbox.ru" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Mail" className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="text-center mt-6 pt-6 border-t border-border/50">
            <p className="text-sm text-muted-foreground">© 2024 ООО "ПРО-СЕРВИС". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;