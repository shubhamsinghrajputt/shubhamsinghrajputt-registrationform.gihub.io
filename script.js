const firstName = document.getElementById('validationCustom01')
const lastName = document.getElementById('validationCustom02')
const userName = document.getElementById('validationCustomUsername')
const cityName = document.getElementById('validationCustom03')
const stateName = document.getElementById('validationCustom04')
const zipNumber = document.getElementById('validationCustom05')
const agreementCheck = document.getElementById('invalidCheck')
const checkBox = document.getElementById('invalidCheck')

const checkingData = () => {
    let cheker = false

    let fName = firstName.value
    let sName = lastName.value
    let user = userName.value
    let city = cityName.value
    let state = stateName.value
    let zip = Number(zipNumber.value)
    let check = checkBox.checked

    if(fName.length >= 2){
        document.getElementById('fName-valid-msg').style.display = 'block'
        document.getElementById('fName-invalid-msg').style.display = 'none'
    }else{
        document.getElementById('fName-invalid-msg').style.display = 'block'
        document.getElementById('fName-valid-msg').style.display = 'none'
        cheker = true
    }
    if(sName.length >= 2){
        document.getElementById('sName-valid-msg').style.display = 'block'
        document.getElementById('sName-invalid-msg').style.display = 'none'
    }else{
        document.getElementById('sName-invalid-msg').style.display = 'block'
        document.getElementById('sName-valid-msg').style.display = 'none'
        cheker = true
    }

    const regx = /^([a-zA-Z0-9])+@(gmail)+.(com)+$/
    if(user.match(regx)){
        document.getElementById('email-valid-msg').style.display = 'block'
        document.getElementById('email-invalid-msg').style.display = 'none'
    }else{
        document.getElementById('email-invalid-msg').style.display = 'block'
        document.getElementById('email-valid-msg').style.display = 'none'
        cheker = true
    }

    if(city.length >= 4){
        document.getElementById('city-valid-msg').style.display = 'block'
        document.getElementById('city-invalid-msg').style.display = 'none'
    }else{
        document.getElementById('city-invalid-msg').style.display = 'block'
        document.getElementById('city-valid-msg').style.display = 'none'
        cheker = true
    }

    if(state.length >= 4){
        document.getElementById('state-valid-msg').style.display = 'block'
        document.getElementById('state-invalid-msg').style.display = 'none'
    }else{
        document.getElementById('state-invalid-msg').style.display = 'block'
        document.getElementById('state-valid-msg').style.display = 'none'
        cheker = true
    }

    if(zip != 0){
        document.getElementById('zip-valid-msg').style.display = 'block'
        document.getElementById('zip-invalid-msg').style.display = 'none'
    }else{
        document.getElementById('zip-invalid-msg').style.display = 'block'
        document.getElementById('zip-valid-msg').style.display = 'none'
        cheker = true
    }


    if(cheker==false){
        alert('Name:'+' '+fName +' '+ sName +'\nUser Name: '+ user +'\nCity: '+ city +'\nState: '+ state +'\nZip code: '+ zip + '\ncheckBox checked: ' + check)
        location.reload(true)
    }
    
}

const chekingValidation = () =>{
    const fName = firstName.value
    const sName = lastName.value
    const user = userName.value
    const city = cityName.value
    const state = stateName.value
    const zip = Number(zipNumber.value)
    const check = checkBox.checked

    if(fName.length >= 2){
        document.getElementById('fName-valid-msg').style.display = 'block'
        document.getElementById('fName-invalid-msg').style.display = 'none'
    }else{
        document.getElementById('fName-invalid-msg').style.display = 'block'
        document.getElementById('fName-valid-msg').style.display = 'none'
    }
    if(sName.length >= 2){
        document.getElementById('sName-valid-msg').style.display = 'block'
        document.getElementById('sName-invalid-msg').style.display = 'none'
    }else{
        document.getElementById('sName-invalid-msg').style.display = 'block'
        document.getElementById('sName-valid-msg').style.display = 'none'
    }

    const regx = /^([a-zA-Z0-9])+@(gmail)+.(com)+$/
    if(user.match(regx)){
        document.getElementById('email-valid-msg').style.display = 'block'
        document.getElementById('email-invalid-msg').style.display = 'none'
    }else{
        document.getElementById('email-invalid-msg').style.display = 'block'
        document.getElementById('email-valid-msg').style.display = 'none'
    }

    if(city.length >= 4){
        document.getElementById('city-valid-msg').style.display = 'block'
        document.getElementById('city-invalid-msg').style.display = 'none'
    }else{
        document.getElementById('city-invalid-msg').style.display = 'block'
        document.getElementById('city-valid-msg').style.display = 'none'
    }

    if(state.length >= 2){
        document.getElementById('state-valid-msg').style.display = 'block'
        document.getElementById('state-invalid-msg').style.display = 'none'
    }else{
        document.getElementById('state-invalid-msg').style.display = 'block'
        document.getElementById('state-valid-msg').style.display = 'none'
    }

    if(zip != 0){
        document.getElementById('zip-valid-msg').style.display = 'block'
        document.getElementById('zip-invalid-msg').style.display = 'none'
    }else{
        document.getElementById('zip-invalid-msg').style.display = 'block'
        document.getElementById('zip-valid-msg').style.display = 'none'
    }
}