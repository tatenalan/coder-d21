const mongoose = require('mongoose')
const { Schema } = mongoose


// Usamos un objeto Schema para definir una lista de propiedades del documento/collection.
// Tambien usamos un modelo constructor para poder crear instancias de los documentos/collections.
const Message = mongoose.model('Message', new Schema(
    {
        author: {
            id:String,
            firstName:String,
            lastName:String,
            age: Number,
            alias: String,
            avatar: String,
        },
        date: { type: String, default: new Date().toLocaleString() },
        text: String
    }))

const getMessages = async() => await Message.find();
const getMessage = async(id) => await Message.findOne({id});
const insertMessage = async(message) => await Message.create(message);
const updateMessage = async(id, message) => await Message.updateOne({_id:id}, {$set: message});
const deleteMessage = async(id) => await Message.deleteOne({id});
const deleteMessages = async(messages) => await Message.deleteMany(messages);

module.exports = { getMessages, getMessage, insertMessage, updateMessage, deleteMessage, deleteMessages }
