const { getMessages, getMessage, insertMessage, updateMessage, deleteMessage, deleteMessages } = require('../models/message.model.js')

const getMessagesService = async() => {
    return await getMessages()
}

const getMessageService = async(id) => {
    return await getMessage(id)
}

const insertMessageService = async(message) => {
    return await insertMessage(message)
}

const updateMessageService = async(id, message) => {
    return await updateMessage(id, message)
}

const deleteMessageService = async(message) => {
    return await deleteMessage(message)
}

const deleteMessagesService = async() => {
    return await deleteMessages()
}


module.exports = { getMessagesService, getMessageService, insertMessageService, updateMessageService, deleteMessageService, deleteMessagesService }