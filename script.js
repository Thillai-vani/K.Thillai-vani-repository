// Optional: Simple alert on form submission
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for your message, Thillaivani will get back to you soon!");
    this.reset();
});
