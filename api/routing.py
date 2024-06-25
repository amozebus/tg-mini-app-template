from fastapi import APIRouter

r = APIRouter()

@r.get('/')
async def root():
    return {
        'start_message': "Telegram Mini App Template Bot",
        'alert_message': "Message from Telegram Mini App Template Bot"
    }