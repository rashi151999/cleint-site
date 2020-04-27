const password=document.getElementById('password')
const confirm_password=document.getElementById('confirm_password')
cnfPassword=()=>{
    if(password.value!=confirm_password.value){
        alert("Password and confirm should be same!")
        document.getElementById('errorMessage').innerHTML="Password and confirm should be same!"
    }
}

document.getElementById("submit_signup").addEventListener('click',(e)=>{
    e.preventDefault()
    cnfPassword() 
    return 
})