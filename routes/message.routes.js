const { Router } = require('express')
const { getMessagesController, getMessageController, insertMessageController, updateMessageController, deleteMessageController, deleteMessagesController }  = require('../controllers/message.controller.js')

const messageRouter = new Router()

messageRouter.get('/', getMessagesController)
messageRouter.get('/:id', getMessageController)
messageRouter.post('/', insertMessageController)
messageRouter.put('/:id', updateMessageController)
messageRouter.delete('/:id', deleteMessageController)
messageRouter.delete('/', deleteMessagesController)

module.exports = { messageRouter }