import json
import smtplib
import os
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
        
        sender_email = os.environ.get('EMAIL_ADDRESS')
        sender_password = os.environ.get('EMAIL_PASSWORD')
        
        if not sender_email or not sender_password:
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({
                    'error': 'Email configuration missing',
                    'details': 'EMAIL_ADDRESS or EMAIL_PASSWORD not configured'
                })
            }
        
        smtp_server = 'smtp.mail.ru' if 'mail.ru' in sender_email or 'inbox.ru' in sender_email or 'list.ru' in sender_email or 'bk.ru' in sender_email else 'smtp.yandex.ru'
        smtp_port = 465
        
        msg = MIMEMultipart()
        msg['From'] = sender_email
        msg['To'] = recipient_email
        msg['Subject'] = email_subject
        msg.attach(MIMEText(email_body, 'plain', 'utf-8'))
        
        try:
            server = smtplib.SMTP_SSL(smtp_server, smtp_port)
            server.login(sender_email, sender_password)
            server.send_message(msg)
            server.quit()
            
            print(f"Email successfully sent to {recipient_email}")
            print(f"Subject: {email_subject}")
            
        except Exception as e:
            print(f"Failed to send email: {str(e)}")
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({
                    'error': 'Failed to send email',
                    'details': str(e)
                })
            }
        
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