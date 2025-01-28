function showService(serviceId) {
    // Hide all service content
    document.querySelectorAll('.service-content').forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all service links
    document.querySelectorAll('.services-list a').forEach(link => {
        link.classList.remove('active');
    });

    // Show selected service content
    document.getElementById(serviceId).classList.add('active');

    // Add active class to clicked link
    document.querySelector(`a[href="#${serviceId}"]`).classList.add('active');
}

// Show default service (web development) on page load
document.addEventListener('DOMContentLoaded', function() {
    showService('web-development');
});