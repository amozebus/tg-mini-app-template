import dotenv from 'dotenv'
dotenv.config()

import { Telegraf, Markup } from 'telegraf'
import ky from 'ky'

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN)

const sc_url = "https://github.com/amozebus/tg_mini_app_template"

const api = 'http://' + process.env.API_URL

bot.start(async (ctx) => {
    const endpoint = '/'
    const response = await ky.get(`${api}${endpoint}`).json()

    await ctx.reply(response['start_message'], Markup.inlineKeyboard(
        [
            Markup.button.webApp("Open web app", process.env.WEB_APP_URL),
            Markup.button.url("Source code", sc_url),
        ],
    ))
})

bot.launch()