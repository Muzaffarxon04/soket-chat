const notesList = document.querySelector("#notes")

let savedId = ''

const noteUI = (note) => {

    const div = document.createElement('div')
    

    div.innerHTML = `
    <div class="card card-body rounded-2 mb-2 animate__animated animate__fadeInUp">
        <div class="d-flex justify-content-between">
            <h5 class="card-title">${note.title}</h5>
            <div class="btn-wrapper">
                <button class="btn btn-danger delete" data-id="${note.id}">delete</button>
                <button class="btn btn-secondary update" data-id="${note.id}">update</button>
            </div> 

        </div>
        <p>${note.describtion}</p>
    </div>

    `
const btndelete = div.querySelector(".delete")
const btnupdate = div.querySelector(".update")


btndelete.addEventListener('click', () => {
    deleteNote(btndelete.dataset.id)
})

btnupdate.addEventListener('click', () => {
getNote(btnupdate.dataset.id)
})

return div
}

const renderNotes = notes => {
    notesList.innerHTML = '';
 notes.forEach((note) => {
    notesList.append(noteUI(note))
 });
}
const appendNote = note => {
    notesList.append(noteUI(note))
}