const express = require('express')
const app = express()
const socketIO = require('socket.io')
app.use(express.static(__dirname + '/public'))

let { v4: uuid } = require('uuid');
let PORT = process.env.PORT || 3000

app.get('/ok', (req,res) =>{
    res.send('ok')
})

const server = app.listen(PORT, () => console.log(`server ${PORT}`))
const io = socketIO(server)

let notes = []


io.on('connection', (socket) => {
    
    socket.emit('server:loadnotes', notes)
    
    socket.on('client:newnote', (newNote) => {
        let note = { ...newNote, id: uuid() }
        notes.unshift(note)
        io.emit('server:newnote', note) //io
    })
    
    socket.on('client:deletenote', (noteId) => {
        notes = notes.filter(note => note.id !== noteId)
        io.emit('server:loadnotes', notes) //io
    });
    
    socket.on('client:getnote', (noteId) => {
        let note = notes.find(note => note.id == noteId)
        socket.emit('server:selectednote', note)
    })
    
    socket.on('client:updatenote', updateNote => {
        notes = notes.map(note => {
            if (note.id === updateNote.id) {
                note.title = updateNote.title
                note.describtion = updateNote.describtion
            }
            
            return note
        })
        io.emit("server:loadnotes", notes) //io
    })
    
})

