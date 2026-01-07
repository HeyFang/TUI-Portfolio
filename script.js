function openTab(tabName) {
    // 1. Hide all content
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active-content'));

    // 2. Remove "active" visual from all buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // 3. Show the specific tab content
    document.getElementById(tabName).classList.add('active-content');

    // 4. Highlight the specific button (Requires finding the button that called this)
    // A simple way is to pass 'event' or use ID matching. 
    // For simplicity, we loop through buttons to match text or ID logic.
    // In this simple version, the HTML onclick handles the visual state if we passed 'this'.
    // Let's make it robust:
}

// Better event listener approach:
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.tab-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            buttons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            // Hide all contents
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active-content'));
            
            // Show target content (extract id from onclick or data attribute)
            // Note: In the HTML above, I used onclick. Let's fix that logic here for cleaner code.
            const targetId = button.getAttribute('onclick').match(/'([^']+)'/)[1];
            document.getElementById(targetId).classList.add('active-content');
        });
    });
});
