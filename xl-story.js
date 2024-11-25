document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('myVideo');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play(); // Start video when it enters view
            } else {
                video.pause(); // Pause video when it exits view
            }
        });
    }, { threshold: 0.5 }); // 50% of the video must be visible to play

    observer.observe(video);
});