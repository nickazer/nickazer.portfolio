// function showAbout() {
//     document.getElementById('sec3').style.display = 'block';
//     document.getElementById('sec2').style.display = 'none';
// }

function conNumber() {
    let contNum = document.getElementById('contactNum')
    if (!/^(09|639)\d{9}$/.test(contNum.value)) {
        alert(`${contNum.value} Not valid! \n Please enter a valid contact number. Thank you! `);
        document.getElementById('contactNum').focus();
        return false;
    }
    else {
        let clientInfo = [];
        let contactDetails = {
            id: Date.now(),
            name: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            contactNumber: document.getElementById('contactNum').value,
            subjectRequest: document.getElementById('subjetRequest').value,
            details: document.getElementById('details').value
        };

        clientInfo = localStorage.getItem('clientData') ? JSON.parse(localStorage.getItem('clientData')) : [];

        clientInfo.push(contactDetails);
        localStorage.setItem("clientData", JSON.stringify(clientInfo));
        console.table(clientInfo);

        let clientData = document.querySelectorAll(`input[name = 'cinfo']`);
        for (var c of clientData) {
            c.value = '';
        }
        document.getElementById('details').value = '';
        alert('Succesfully submitted. Thank you. \n Our team will contact you.')
        return false;
    }
}
