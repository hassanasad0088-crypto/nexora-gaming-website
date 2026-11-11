
const contactForm = document.getElementById("whatsappForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const student = document.getElementById("studentName").value.trim();
    const guardian = document.getElementById("guardianName").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const course = document.getElementById("course").value;
    const timing = document.getElementById("timing").value;
    const message = document.getElementById("message").value.trim();

    const academyNumber = "923001234567";

    const whatsappMessage =
        "NEW STUDENT ADMISSION INQUIRY\n\n" +
        "Student Name: " + student + "\n" +
        "Father / Guardian: " + guardian + "\n" +
        "Phone Number: " + phone + "\n" +
        "Email: " + (email || "Not provided") + "\n" +
        "Course: " + course + "\n" +
        "Class Timing: " + timing + "\n" +
        "Additional Message: " + (message || "None");

    const whatsappURL =
        "https://wa.me/" + academyNumber +
        "?text=" + encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");

});
