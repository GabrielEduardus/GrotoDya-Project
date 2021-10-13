function validate(){
    var product
    var qty = document.getElementById('acc-quantity').value
    var color = document.getElementById('acc-color').value
    var name = document.getElementById('acc-name').value
    var phone = document.getElementById('acc-phone').value
    var address = document.getElementById('acc-address').value

    if(document.getElementById("Vixian").checked) product = "Vixian"
    else if(document.getElementById("Kawasako").checked) product = "Kawasako"
    else product = ""
    if (product == ""){
        alert("Product must be choosen")
        document.getElementsByName("product").checked = false
    }

    if (qty == ""){
        alert("Please fill your quantity")
    }else if(qty <= 0){
        alert("Please fill above 0")
    }

    if (color == ""){
        alert("Please pick your color")
    }else {
        return true
    }

    if (name == ""){
        alert("Please fill your name")
    }else {
        return
    }

    if (phone == ""){
        alert("Please fill your phone number")
    }else {
        return
    }

    if (address == ""){
        alert("Please fill your address")
    }else {
        return
    }
}