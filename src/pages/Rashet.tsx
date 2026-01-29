import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Rashet = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    budget: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/5aa211f8-63e2-45a9-8862-7b4bad878f2e', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'rashet',
          ...formData
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success('Заявка отправлена!', {
          description: 'Мы свяжемся с вами в ближайшее время'
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          serviceType: "",
          budget: "",
          description: "",
        });
      } else {
        toast.error('Ошибка отправки', {
          description: 'Попробуйте позже или позвоните нам'
        });
      }
    } catch (error) {
      console.error('Submit error:', error);
      toast.error('Ошибка отправки', {
        description: 'Проверьте соединение с интернетом'
      });
    } finally {
      setIsSubmitting(false);
    }
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
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20 inline-block mb-4">
              Расчёт проекта
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Получите <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">предварительную оценку</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Расскажите о вашем проекте, и мы подготовим коммерческое предложение
            </p>
          </div>

          <Card className="border-border/50 shadow-xl">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Заявка на расчёт</CardTitle>
              <CardDescription>
                Заполните форму, и наш менеджер свяжется с вами в течение 24 часов
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center">
                      <Icon name="User" className="mr-2 h-4 w-4 text-primary" />
                      Ваше имя *
                    </Label>
                    <Input
                      id="name"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                      className="border-border/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center">
                      <Icon name="Mail" className="mr-2 h-4 w-4 text-primary" />
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ivan@example.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      className="border-border/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center">
                      <Icon name="Phone" className="mr-2 h-4 w-4 text-primary" />
                      Телефон *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 982 124 25-28"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      required
                      className="border-border/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="flex items-center">
                      <Icon name="Building" className="mr-2 h-4 w-4 text-primary" />
                      Компания
                    </Label>
                    <Input
                      id="company"
                      placeholder="ООО «Ваша компания»"
                      value={formData.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                      className="border-border/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="serviceType" className="flex items-center">
                      <Icon name="Sparkles" className="mr-2 h-4 w-4 text-primary" />
                      Тип услуги *
                    </Label>
                    <Select value={formData.serviceType} onValueChange={(value) => handleChange("serviceType", value)}>
                      <SelectTrigger id="serviceType" className="border-border/50">
                        <SelectValue placeholder="Выберите услугу" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="crm">Настройка CRM</SelectItem>
                        <SelectItem value="api">API интеграции</SelectItem>
                        <SelectItem value="ai">Внедрение нейросетей</SelectItem>
                        <SelectItem value="automation">Автоматизация процессов</SelectItem>
                        <SelectItem value="other">Другое</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget" className="flex items-center">
                      <Icon name="DollarSign" className="mr-2 h-4 w-4 text-primary" />
                      Бюджет проекта
                    </Label>
                    <Select value={formData.budget} onValueChange={(value) => handleChange("budget", value)}>
                      <SelectTrigger id="budget" className="border-border/50">
                        <SelectValue placeholder="Укажите примерный бюджет" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="50k">До 50 000 ₽</SelectItem>
                        <SelectItem value="100k">50 000 - 100 000 ₽</SelectItem>
                        <SelectItem value="250k">100 000 - 250 000 ₽</SelectItem>
                        <SelectItem value="500k">250 000 - 500 000 ₽</SelectItem>
                        <SelectItem value="500k+">Более 500 000 ₽</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="flex items-center">
                    <Icon name="FileText" className="mr-2 h-4 w-4 text-primary" />
                    Описание проекта *
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Расскажите подробнее о вашем проекте, задачах и целях..."
                    value={formData.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                    required
                    rows={6}
                    className="border-border/50 resize-none"
                  />
                </div>

                <div className="flex gap-4">
                  <Button type="submit" size="lg" className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90" disabled={isSubmitting}>
                    <Icon name="Send" className="mr-2 h-5 w-5" />
                    {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                  </Button>
                  <Button type="button" size="lg" variant="outline" onClick={() => navigate('/contacts')}>
                    <Icon name="MessageSquare" className="mr-2 h-5 w-5" />
                    Контакты
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Быстрый ответ</h3>
                <p className="text-sm text-muted-foreground">Ответим в течение 24 часов</p>
              </CardContent>
            </Card>

            <Card className="border-accent/20 bg-gradient-to-br from-accent/5 to-transparent">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Конфиденциальность</h3>
                <p className="text-sm text-muted-foreground">Ваши данные в безопасности</p>
              </CardContent>
            </Card>

            <Card className="border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-transparent">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="FileText" className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Бесплатная оценка</h3>
                <p className="text-sm text-muted-foreground">Расчёт стоимости бесплатно</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rashet;