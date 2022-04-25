const { getMessagesService, getMessageService, insertMessageService, updateMessageService, deleteMessageService, deleteMessagesService } = require('../services/message.service.js')

const getMessagesController = async(req, res) => {
    const messages = await getMessagesService()
    res.status(201).json(messages)
}

const getMessageController = async(req, res) => {
    const id = req.params.id
    const message = await getMessageService(id)
    res.status(201).json(message)
}

const insertMessageController = async(req, res) => {
    const message = req.body
    const messageReturn = await insertMessageService(message)
    res.status(201).json(messageReturn)
}

const updateMessageController = async(req, res) => {
    const id = req.params.id
    const message = req.body
    const messageReturn = await updateMessageService(id, message)
    res.status(201).json(messageReturn)
}

const deleteMessageController = async(req, res) => {
    const id = req.params.id
    const messageReturn = await deleteMessageService(id)
    res.status(201).json(messageReturn)
}

const deleteMessagesController = async(req, res) => {
    const result = await deleteMessagesService()
    res.status(201).json(result)
}

module.exports = { getMessagesController, getMessageController, insertMessageController, updateMessageController, deleteMessageController, deleteMessagesController }