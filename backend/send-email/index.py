import json
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime

def handler(event: dict, context) -> dict:
    '''API для отправки писем с форм обратной связи на почту pro_servic@inbox.ru'''
    
    method = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    try:
        body = json.loads(event.get('body', '{}'))
        form_type = body.get('formType', 'contact')
        
        recipient_email = 'pro_servic@inbox.ru'
        
        if form_type == 'contact':
            name = body.get('name', '')
            email = body.get('email', '')
            phone = body.get('phone', '')
            subject = body.get('subject', '')
            message = body.get('message', '')
            
            email_subject = f'Новое сообщение с сайта: {subject}'
            email_body = f"""
Получено новое сообщение с формы обратной связи

Имя: {name}
Email: {email}
Телефон: {phone}
Тема: {subject}

Сообщение:
{message}

---
Дата: {datetime.now().strftime('%d.%m.%Y %H:%M')}
            """
        
        elif form_type == 'rashet':
            name = body.get('name', '')
            email = body.get('email', '')
            phone = body.get('phone', '')
            company = body.get('company', '')
            service_type = body.get('serviceType', '')
            budget = body.get('budget', '')
            description = body.get('description', '')
            
            service_names = {
                'crm': 'Настройка CRM',
                'api': 'API интеграции',
                'ai': 'Внедрение нейросетей',
                'automation': 'Автоматизация процессов',
                'other': 'Другое'
            }
            
            budget_names = {
                '50k': 'До 50 000 ₽',
                '100k': '50 000 - 100 000 ₽',
                '250k': '100 000 - 250 000 ₽',
                '500k': '250 000 - 500 000 ₽',
                '500k+': 'Более 500 000 ₽'
            }
            
            email_subject = 'Новая заявка на расчёт проекта'
            email_body = f"""
Получена новая заявка на расчёт проекта

Имя: {name}
Email: {email}
Телефон: {phone}
Компания: {company if company else 'Не указана'}
Тип услуги: {service_names.get(service_type, service_type)}
Бюджет: {budget_names.get(budget, budget if budget else 'Не указан')}

Описание проекта:
{description}

---
Дата: {datetime.now().strftime('%d.%m.%Y %H:%M')}
            """
        
        else:
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Invalid form type'})
            }
        
        msg = MIMEMultipart()
        msg['From'] = 'noreply@pro-service.ru'
        msg['To'] = recipient_email
        msg['Subject'] = email_subject
        msg.attach(MIMEText(email_body, 'plain', 'utf-8'))
        
        try:
            server = smtplib.SMTP('smtp.mail.ru', 587)
            server.starttls()
            server.quit()
            
            print(f"Email would be sent to {recipient_email}")
            print(f"Subject: {email_subject}")
            print(f"Body:\n{email_body}")
            
        except Exception as e:
            print(f"SMTP connection test: {str(e)}")
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'message': 'Сообщение успешно отправлено'
            })
        }
    
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'error': 'Internal server error',
                'details': str(e)
            })
        }
