import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-800">КА ТАЛАНТ</h1>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" className="mr-2 h-4 w-4" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex space-x-8 py-4">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-600 hover:text-primary transition-colors"
            >
              О нас
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-slate-600 hover:text-primary transition-colors"
            >
              Услуги
            </button>
            <button 
              onClick={() => scrollToSection('contacts')}
              className="text-slate-600 hover:text-primary transition-colors"
            >
              Контакты
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-slate-600 hover:text-primary transition-colors"
            >
              Часто задаваемые вопросы
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
                Быстрый подбор 
                <span className="text-primary block">персонала</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Современные технологии, аналитика и основы психологии для качественного подбора кадров
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Users" className="mr-2 h-5 w-5" />
                  Найти сотрудника
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Briefcase" className="mr-2 h-5 w-5" />
                  Найти работу
                </Button>
              </div>
            </div>
            <div className="lg:order-first">
              <img 
                src="/img/37a7bf96-7088-4cfd-842b-50d79f6e746a.jpg" 
                alt="Профессиональная команда" 
                className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">О нас</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="Zap" className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">Быстрый подбор</h3>
                      <p className="text-slate-600 text-sm">
                        Кадровое агентство "Талант" работает по принципу быстрого подбора кадров с использованием современных технологий, аналитики и основ психологии.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="Target" className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">Качественный результат</h3>
                      <p className="text-slate-600 text-sm">
                        Совокупность инструментов, которые мы используем в своей работе, позволяет нам обеспечивать не только оперативный, но и качественный подбор персонала.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-white rounded-xl border">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Icon name="TrendingUp" className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Выгодное сотрудничество</h3>
                  <p className="text-slate-600">
                    Мы предлагаем нашим кандидатам наиболее выгодную на сегодняшний день форму сотрудничества - 
                    <span className="font-semibold text-green-600"> ИП на НПД</span>, что позволяет работодателю экономить на налогах, 
                    а работнику получать более высокую оплату за свой труд.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Наши услуги</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Комплексные решения для бизнеса и соискателей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Search" className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Подбор персонала</h3>
                <p className="text-slate-600 text-sm">
                  Поиск и подбор квалифицированных специалистов под ваши требования
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="UserCheck" className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Аутстаффинг</h3>
                <p className="text-slate-600 text-sm">
                  Оформление сотрудников как ИП на НПД для экономии ваших расходов
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="BarChart" className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">HR-консалтинг</h3>
                <p className="text-slate-600 text-sm">
                  Консультации по оптимизации HR-процессов в вашей компании
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Часто задаваемые вопросы</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg border">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  Как быстро вы подбираете персонал?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-slate-600">
                  Средний срок подбора персонала составляет 5-10 рабочих дней, в зависимости от сложности позиции и требований.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg border">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  Что такое ИП на НПД и какие преимущества?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-slate-600">
                  ИП на НПД (налог на профессиональный доход) - это льготная система налогообложения. 
                  Работодатель экономит на налогах и взносах, а сотрудник получает на руки больше.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg border">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  Какие гарантии вы предоставляете?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-slate-600">
                  Мы предоставляем гарантию замены сотрудника в течение 3 месяцев, если он не прошел испытательный срок.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg border">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  Сколько стоят ваши услуги?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-slate-600">
                  Стоимость услуг зависит от сложности позиции и составляет от 50% до 100% месячной зарплаты найденного специалиста.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Контакты</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Phone" className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">Телефон</h3>
                  <p className="text-slate-600">+7 (495) 123-45-67</p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Mail" className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">Email</h3>
                  <p className="text-slate-600">info@talent-ka.ru</p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="MapPin" className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">Адрес</h3>
                  <p className="text-slate-600">г. Москва, ул. Деловая, д. 1</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
                Написать нам
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">КА ТАЛАНТ</h3>
            <p className="text-slate-300 mb-6">
              Профессиональный подбор персонала с использованием современных технологий
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Icon name="Phone" className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Icon name="Mail" className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Icon name="MapPin" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;