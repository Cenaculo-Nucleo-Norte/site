function show(contentId, element) {
    // 1. Hide all content sections
    document.querySelectorAll('.container-main').forEach(div => {
        div.style.display = 'none';
    });

    // 2. Show the targeted section
    const target = document.getElementById(contentId);
    if (target) target.style.display = 'block';

    // 3. Update the 'active' class on the buttons
    document.querySelectorAll('.tabs button').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // If 'element' is passed (from the click), highlight it
    if (element) {
        element.classList.add('active');
    }
}

// Handle initial state on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set the first tab as active by default (optional)
    const firstTab = document.querySelector('.tabs button');
    if (firstTab) {
        // This assumes your onclick looks like: show('home', this)
        firstTab.click(); 
    }
});