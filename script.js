document.addEventListener('DOMContentLoaded', function() {
    // Back to top button functionality
    const backToTopButton = document.getElementById('backToTop');
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopButton.style.display = 'flex';
            } else {
                backToTopButton.style.display = 'none';
            }
        });
        
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Resume button functionality
    const viewResumeButton = document.getElementById('viewResume');
    const resumeModal = document.getElementById('resumeModal');
    const closeModal = document.querySelector('.close-modal');
    const resumeFrame = document.getElementById('resumeFrame');
    
    // Resume PDF URL - replace with your actual resume URL
    const resumeUrl = "path/to/your/resume.pdf";
    
    if (viewResumeButton && resumeModal) {
        // Open modal when View Resume button is clicked
        viewResumeButton.addEventListener('click', function() {
            resumeFrame.src = resumeUrl;
            resumeModal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling while modal is open
        });
        
        // Close modal when X is clicked
        if (closeModal) {
            closeModal.addEventListener('click', function() {
                resumeModal.style.display = 'none';
                document.body.style.overflow = 'auto'; // Re-enable scrolling
            });
        }
        
        // Close modal when clicking outside of it
        window.addEventListener('click', function(event) {
            if (event.target === resumeModal) {
                resumeModal.style.display = 'none';
                document.body.style.overflow = 'auto'; // Re-enable scrolling
            }
        });
        
        // Close modal with Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && resumeModal.style.display === 'block') {
                resumeModal.style.display = 'none';
                document.body.style.overflow = 'auto'; // Re-enable scrolling
            }
        });
    }
});