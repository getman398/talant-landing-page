import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В будущем здесь будет отправка в MySQL
    console.log('Данные формы:', formData);
    alert(`Спасибо, ${formData.name}! Мы свяжемся с вами по телефону ${formData.phone}`);
    setFormData({ name: '', phone: '' });
    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card shadow-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-foreground">КА ДРИМ</h1>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90">
                  <Icon name="Phone" className="mr-2 h-4 w-4" />
                  Заказать звонок
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Заказать звонок</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Отправить заявку
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-card border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex space-x-8 py-4">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              О нас
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Услуги
            </button>
            <button 
              onClick={() => scrollToSection('contacts')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Контакты
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-muted-foreground hover:text-primary transition-colors"
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
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Быстрый подбор 
                <span className="text-primary block">персонала</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Современные технологии, аналитика и основы психологии для качественного подбора кадров
              </p>
              <div className="flex gap-4">
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      <Icon name="Users" className="mr-2 h-5 w-5" />
                      Найти сотрудника
                    </Button>
                  </DialogTrigger>
                </Dialog>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" variant="outline">
                      <Icon name="Briefcase" className="mr-2 h-5 w-5" />
                      Найти работу
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Найти работу</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="name2">Имя</Label>
                        <Input
                          id="name2"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone2">Телефон</Label>
                        <Input
                          id="phone2"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                        Отправить заявку
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="lg:order-first">
              <img 
                src="https://cdn.poehali.dev/projects/7cc3c9a8-90ac-412a-9ca5-568117dcdcf8/files/f88a87db-09e0-459d-8390-51ae0556f98b.jpg" 
                alt="Профессиональная команда" 
                className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">О нас</h2>
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
                      <h3 className="font-semibold text-foreground mb-2">Быстрый подбор</h3>
                      <p className="text-muted-foreground text-sm">
                        Кадровое агентство "Дрим" работает по принципу быстрого подбора кадров с использованием современных технологий, аналитики и основ психологии.
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
                      <h3 className="font-semibold text-foreground mb-2">Качественный результат</h3>
                      <p className="text-muted-foreground text-sm">
                        Совокупность инструментов, которые мы используем в своей работе, позволяет нам обеспечивать не только оперативный, но и качественный подбор персонала.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-card rounded-xl border border-border">
              <div className="flex items-start space-x-4">
                <div className="bg-green-600/20 p-3 rounded-lg">
                  <Icon name="TrendingUp" className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Выгодное сотрудничество</h3>
                  <p className="text-muted-foreground">
                    Мы предлагаем нашим кандидатам наиболее выгодную на сегодняшний день форму сотрудничества - 
                    <span className="font-semibold text-green-400"> ИП на НПД</span>, что позволяет работодателю экономить на налогах, 
                    а работнику получать более высокую оплату за свой труд.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Тарифы */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Тарифы</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Выберите подходящий тариф для подбора персонала
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Базовый */}
            <Card className="p-6 hover:shadow-lg transition-shadow border-2 border-border bg-card">
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Package" className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="font-bold text-xl text-foreground mb-2">Базовый</h3>
                  <div className="text-3xl font-bold text-primary mb-4">10 000 ₽</div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground mb-6">
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    Настройка эффективных объявлений на job-порталах
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    Разработка стратегии поиска персонала
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    Базовая автоматизация откликов
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    Поиск кандидатов и сортировка резюме
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    Выбор наиболее подходящих кандидатов
                  </li>
                </ul>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Выбрать тариф
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Заказать тариф "Базовый"</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="name3">Имя</Label>
                        <Input
                          id="name3"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone3">Телефон</Label>
                        <Input
                          id="phone3"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                        Отправить заявку
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* Стандарт Плюс */}
            <Card className="p-6 hover:shadow-lg transition-shadow border-2 border-primary relative bg-card">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">Популярный</span>
              </div>
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Star" className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl text-foreground mb-2">Стандарт Плюс</h3>
                  <div className="text-3xl font-bold text-primary mb-4">50 000 ₽</div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground mb-6">
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    Все услуги тарифа "Базовый"
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    Первичное интервью с профессиональным HR
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    Список лучших кандидатов
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    Гарантия замены в течение месяца
                  </li>
                </ul>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Выбрать тариф
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Заказать тариф "Стандарт Плюс"</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="name4">Имя</Label>
                        <Input
                          id="name4"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone4">Телефон</Label>
                        <Input
                          id="phone4"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                        Отправить заявку
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* Премиум */}
            <Card className="p-6 hover:shadow-lg transition-shadow border-2 border-border bg-card">
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <div className="bg-purple-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Crown" className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="font-bold text-xl text-foreground mb-2">Премиум</h3>
                  <div className="text-3xl font-bold text-primary mb-4">150 000 ₽</div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground mb-6">
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    Все услуги тарифа "Стандарт Плюс"
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    Оценка компетенций кандидата
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    Психологический портрет сотрудника
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    Определение совместимости с командой
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    Советы по адаптации в коллективе
                  </li>
                </ul>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Выбрать тариф
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Заказать тариф "Премиум"</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="name5">Имя</Label>
                        <Input
                          id="name5"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone5">Телефон</Label>
                        <Input
                          id="phone5"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                        Отправить заявку
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Преимущества работы с нами */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Что вы получаете, работая с нами?</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center bg-card">
              <CardContent className="p-0">
                <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="font-semibold text-foreground mb-3">1) Оперативность</h3>
                <p className="text-muted-foreground text-sm">
                  Вы получите людей в соответствии со своим запросом настолько быстро, насколько это возможно
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center bg-card">
              <CardContent className="p-0">
                <div className="bg-green-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="font-semibold text-foreground mb-3">2) Профессионализм</h3>
                <p className="text-muted-foreground text-sm">
                  Наша задача - не только подобрать сотрудников, но и тщательно оценить компетенции и личностные качества
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center bg-card">
              <CardContent className="p-0">
                <div className="bg-purple-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Brain" className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="font-semibold text-foreground mb-3">3) Современный подход</h3>
                <p className="text-muted-foreground text-sm">
                  Мы используем AI-инструменты, основы психологии и аналитику для углубленной работы с кандидатами
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Часто задаваемые вопросы</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card rounded-lg border border-border">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  Почему вы берете деньги только за результат?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  Мы уверены в своих возможностях, и считаем, что наши клиенты должны платить только за качественно оказанную услугу.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card rounded-lg border border-border">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  Что будет если кандидат не подойдет?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  Мы предлагаем вам возможность не просто получить кандидата на интересующую вакансию, а заменить его в течение месяца, если он вам не подходит.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card rounded-lg border border-border">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  На какие специальности вы находите людей?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  Разные. Это могут быть профессионалы из строительной отрасли, сферы создания контента, дизайна, общепита или офисных специальностей. Все индивидуально, и мы рассматриваем любые заказы.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Контакты</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 text-center bg-card">
                <CardContent className="p-0">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Phone" className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Телефон</h3>
                  <p className="text-muted-foreground text-sm">+79011573066</p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center bg-card">
                <CardContent className="p-0">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Mail" className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground text-sm">hr@ka-drem.ru</p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center bg-card">
                <CardContent className="p-0">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="MapPin" className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Адрес</h3>
                  <p className="text-muted-foreground text-sm">г. Москва, ул. Ленина 10 оф. 32</p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center bg-card">
                <CardContent className="p-0">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Building2" className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">ИНН</h3>
                  <p className="text-muted-foreground text-sm">1800039295</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
                    Написать нам
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Написать нам</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name6">Имя</Label>
                      <Input
                        id="name6"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone6">Телефон</Label>
                      <Input
                        id="phone6"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      Отправить заявку
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">КАДРОВОЕ АГЕНТСТВО МЕЧТА</h3>
            <p className="text-muted-foreground mb-6">
              Профессиональный подбор персонала с использованием современных технологий
            </p>
            <div className="flex justify-center space-x-6">
              <a href="tel:+79011573066" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Phone" className="h-5 w-5" />
              </a>
              <a href="mailto:hr@ka-drem.ru" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Mail" className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
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