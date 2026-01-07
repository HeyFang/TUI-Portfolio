document.addEventListener('DOMContentLoaded', () => {
    // Select all tab buttons and content sections
    const buttons = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Remove 'active' class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            
            // 2. Add 'active' class to the clicked button
            button.classList.add('active');

            // 3. Hide all content sections
            contents.forEach(content => content.classList.remove('active-content'));

            // 4. Get the target ID from the button's onclick attribute
            // (Parsing your existing HTML structure: onclick="openTab('projects')")
            const match = button.getAttribute('onclick').match(/'([^']+)'/);
            
            if (match && match[1]) {
                const targetId = match[1];
                const targetContent = document.getElementById(targetId);
                if (targetContent) {
                    targetContent.classList.add('active-content');
                }
            }
        });
    });
});

// Keep this empty function to prevent HTML inline errors if you keep the onclick="" in HTML
function openTab(id) { 
    // Logic is handled by EventListeners above
}
