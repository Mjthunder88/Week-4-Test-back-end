const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneBtn")
const inputEmail = document.getElementById("inspiration")
const firstName = document.getElementById("first-name")
const lastName = document.getElementById("last-name")
const submitInfo = document.getElementById("submit-btn")
const form = document.querySelector(".input-container")

const updateForm = document.getElementById("update")
const updateEmail = document.getElementById("new-email")
const currentEmail = document.getElementById("current-email")

const baseUrl = "http://localhost:4000/api/"

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then((res) => {
        const fortuneData = res.data;
        console.log(fortuneData)
        alert(fortuneData)
    })
    .catch((err) => {

    } )
}

function createObj (event) {
    event.preventDefault()
    let bodyObj = {
        email: inputEmail.value,
        firstname: firstName.value,
        lastname: lastName.value,
    }
    console.log(bodyObj)
    storeEmail(bodyObj)
    inputEmail.value = ''
    firstName.value = ''
    lastName.value = ''
}


const storeEmail = (body) => {
    axios.post(`${baseUrl}email`, body)
    .then((res) => {
        let emailConfirm = res.data
        console.log(emailConfirm)
        alert(emailConfirm)
    })
    .catch((err) => {
        console.log(err)
    })
}




const updateEmailInfo = (event) => {
    event.preventDefault()
    let bodyObj = {
        oldEmail:  currentEmail.value,
        newEmail: updateEmail.value,
    }
    currentEmail.value = ''
    updateEmail.value = ''
    axios.put(`${baseUrl}email/`, bodyObj )
    .then((res) => {
        let updatedInfo = res.data
        alert(updatedInfo)
    })
    .catch((err) => {
        console.log(err)
    })
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
form.addEventListener('submit',createObj)
updateForm.addEventListener('submit', updateEmailInfo)
// make sure it can access this function trhough the index.js 