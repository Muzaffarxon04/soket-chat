const noteForm = document.querySelector("#noteForm")
const title = document.querySelector("#title")
const describtion = document.querySelector("#describtion")

noteForm.addEventListener('submit', e => {
   
    e.preventDefault()


if (savedId) {
    updateNote(savedId, title.value, describtion.value) 

} else {
    saveNote(title.value, describtion.value) 
}

title.value = ''
describtion.value = ''

title.focus()
})
