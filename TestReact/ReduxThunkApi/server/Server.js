
const Apis='https://api.androidhive.info/contacts/?fbclid=IwAR2okcesBe9xFsiIYVz7EspkWq0O-H0XOD3VwrcQdMZ7y0ec5eedAUXX94U'

export function getRespone() {
    return fetch(Apis)
        .then(respone => respone.json())
        .then(responJson => responJson.contacts)
        .catch((error)=>{
            
        })
}