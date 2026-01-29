import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contacts = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.");
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-border shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button onClick={() => navigate('/')} className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Icon name="Cpu" className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">ПРО-СЕРВИС</h1>
                <p className="text-xs text-muted-foreground">IT Solutions</p>
              </div>
            </button>
            <Button variant="outline" onClick={() => navigate('/')}>
              <Icon name="Home" className="mr-2 h-4 w-4" />
              На главную
            </Button>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20 inline-block mb-4">
              Свяжитесь с нами
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Мы всегда <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">на связи</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Напишите нам, и мы ответим в ближайшее время
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card className="border-border/50 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="MapPin" className="mr-2 h-5 w-5 text-primary" />
                    Адрес
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Россия, г. Москва<br />
                    ул. Примерная, д. 123, офис 45
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Phone" className="mr-2 h-5 w-5 text-primary" />
                    Телефон
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="tel:+79991234567" className="text-muted-foreground hover:text-primary transition-colors">
                    +7 (999) 123-45-67
                  </a>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Mail" className="mr-2 h-5 w-5 text-primary" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="mailto:info@pro-service.ru" className="text-muted-foreground hover:text-primary transition-colors">
                    info@pro-service.ru
                  </a>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Clock" className="mr-2 h-5 w-5 text-primary" />
                    График работы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Пн-Пт: 9:00 - 18:00<br />
                    Сб-Вс: Выходной
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center">
                    <Icon name="MessageCircle" className="mr-2 h-5 w-5 text-primary" />
                    Мессенджеры
                  </h3>
                  <div className="flex gap-3">
                    <Button variant="outline" size="icon" className="hover:bg-primary/10 hover:border-primary">
                      <Icon name="MessageCircle" className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="hover:bg-primary/10 hover:border-primary">
                      <Icon name="Send" className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="hover:bg-primary/10 hover:border-primary">
                      <Icon name="Phone" className="h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-3">
              <Card className="border-border/50 shadow-xl">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl">Напишите нам</CardTitle>
                  <CardDescription>
                    Заполните форму обратной связи, и мы ответим в течение 24 часов
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center">
                        <Icon name="User" className="mr-2 h-4 w-4 text-primary" />
                        Ваше имя *
                      </Label>
                      <Input
                        id="name"
                        placeholder="Как к вам обращаться?"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                        className="border-border/50"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="flex items-center">
                          <Icon name="Mail" className="mr-2 h-4 w-4 text-primary" />
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                          className="border-border/50"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="flex items-center">
                          <Icon name="Phone" className="mr-2 h-4 w-4 text-primary" />
                          Телефон
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+7 (999) 123-45-67"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          className="border-border/50"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="flex items-center">
                        <Icon name="FileText" className="mr-2 h-4 w-4 text-primary" />
                        Тема сообщения *
                      </Label>
                      <Input
                        id="subject"
                        placeholder="О чём вы хотите спросить?"
                        value={formData.subject}
                        onChange={(e) => handleChange("subject", e.target.value)}
                        required
                        className="border-border/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="flex items-center">
                        <Icon name="MessageSquare" className="mr-2 h-4 w-4 text-primary" />
                        Сообщение *
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Расскажите подробнее о вашем вопросе или предложении..."
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        required
                        rows={6}
                        className="border-border/50 resize-none"
                      />
                    </div>

                    <div className="flex gap-4">
                      <Button type="submit" size="lg" className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90">
                        <Icon name="Send" className="mr-2 h-5 w-5" />
                        Отправить сообщение
                      </Button>
                      <Button type="button" size="lg" variant="outline" onClick={() => navigate('/rashet')}>
                        <Icon name="Calculator" className="mr-2 h-5 w-5" />
                        Расчёт проекта
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
