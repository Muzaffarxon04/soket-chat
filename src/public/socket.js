const socket = io()
/**/
/**
 * 'http://192.168.1.102:3000'
 * Save a new note
 * @param {string} title note title
 * @param {string} describtion note describtion
 */



const saveNote = (title, describtion) => {
    socket.emit("client:newnote", {
        title,
        describtion,
    })
    
}

const deleteNote = (id) => {
  socket.emit('client:deletenote', id)
}

const getNote = (id) => {
    socket.emit('client:getnote', id)
  }

  const updateNote = (id, title, describtion) => {
    socket.emit('client:updatenote', {
        id,
        title,
        describtion
    })
  }
socket.on("server:newnote", appendNote)
      

socket.on("server:loadnotes", renderNotes)

socket.on('server:selectednote', note => {
const title = document.querySelector("#title")
const describtion = document.querySelector("#describtion")

title.value = note.title,
describtion.value = note.describtion

savedId = note.id

})