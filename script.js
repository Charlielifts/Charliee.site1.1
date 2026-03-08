const menuIcon = document.querySelector('#menu-icon');
const navlinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navlinks.classList.toggle('active');
}

const cvBtn = document.getElementById('download-cv');
if (cvBtn) {
    cvBtn.addEventListener('click', () => {
        const cvUrl = 'cv.pdf';
        fetch(cvUrl, { method: 'HEAD' })
            .then(res => {
                if (res.ok) {
                    window.location.href = cvUrl;
                } else {
                    alert('CV is not available');
                }
            })
            .catch(() => {
                alert('CV is not available');
            });
    });
}