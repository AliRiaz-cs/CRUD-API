function validationForms() {
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const phone = document.getElementById('phone').value
    const address = document.getElementById('address').value

    if (!name) {
        alert('Name is Required');
        return false
    }

    if (!email) {
        alert('Email Address is Required');
        return false
    }

    if (!phone) {
        alert('Phone No is Required');
        return false
    }

    if (!address) {
        alert('Address is Required');
        return false
    }

    return true

}

function showData() {
    let employeeList = JSON.parse(localStorage.getItem('employeeList')) || []
   
    let html = ""
    employeeList.forEach((item, index) => {
        html += "<tr>";
        html += "<td>" + item.name + "</td>";
        html += "<td>" + item.email + "</td>";
        html += "<td>" + item.phone + "</td>";
        html += "<td>" + item.address + "</td>";
      
        html += `<td>
            <button class="btn btn-info" onclick="updateData(${index})">edit</button>
            <button class="btn btn-danger" onclick="deleteData(${index})">delete</button>
        </td>`;
        html += "</tr>"
    })

    document.querySelector('tbody').innerHTML = html
}

window.addEventListener('DOMContentLoaded', showData)

function add() {
    if (validationForms() === true) {

        const name = document.getElementById('name').value
        const email = document.getElementById('email').value
        const phone = document.getElementById('phone').value
        const address = document.getElementById('address').value

        let employeeList = JSON.parse(localStorage.getItem('employeeList')) || []

        employeeList.push({
            name: name,
            email: email,
            phone: phone,
            address: address
        })

        localStorage.setItem('employeeList', JSON.stringify(employeeList))
        showData()

        document.getElementById('name').value = ""
        document.getElementById('email').value = ""
        document.getElementById('phone').value = ""
        document.getElementById('address').value = ""

    }
}

function deleteData(index) {

    let employeeList = JSON.parse(localStorage.getItem('employeeList')) || []

    employeeList.splice(index, 1)

    localStorage.setItem('employeeList', JSON.stringify(employeeList))

    showData()

}

function updateData(index) {
    document.getElementById("submit").style.display = 'none';
    document.getElementById("update").style.display = 'block';

    let employeeList = JSON.parse(localStorage.getItem('employeeList')) || []

    document.getElementById("name").value = employeeList[index].name;
    document.getElementById("email").value = employeeList[index].email;

    document.getElementById("phone").value = employeeList[index].phone;

    document.getElementById("address").value = employeeList[index].address;


    document.querySelector("#update").onclick = function () {
        employeeList[index].name = document.getElementById("name").value;
        employeeList[index].email = document.getElementById("email").value;
        employeeList[index].phone = document.getElementById("phone").value;
        employeeList[index].address = document.getElementById("address").value;

        localStorage.setItem('employeeList', JSON.stringify(employeeList))
        showData();

        document.getElementById("submit").style.display = 'block';
        document.getElementById("update").style.display = 'none';
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("address").value = "";
    }
}
