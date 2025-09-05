function submitFeedback() {
    const name = document.getElementById("name");
    const age = document.getElementById("age");
    const email = document.getElementById("email");
    const job = document.getElementById("job");
    const designation = document.getElementById("designation");
    const productType = document.getElementById("productType");
    const feedbackText = document.getElementById("feedbackText");
    const button = document.getElementById("submitBtn");
    const userInfo = document.getElementById("userInfo");

    // Attach click event properly
    button.onclick = submitFeedback;

    alert("Thank you for your valuable feedback");

    // Assign values instead of elements
    document.getElementById('userName').innerHTML = name.value;
    document.getElementById('userAge').innerHTML = age.value;
    document.getElementById('userEmail').innerHTML = email.value;
    document.getElementById('userJob').innerHTML = job.value;
    document.getElementById('userDesignation').innerHTML = designation.value;
    document.getElementById('userProductChoice').innerHTML = productType.value;
    document.getElementById('userFeedback').innerHTML = feedbackText.value;

    userInfo.style.display = 'block';
}

// Submit on pressing Enter
document.addEventListener('keydown', function(event) {
   if (event.key === 'Enter') {
     submitFeedback();
   }
});
