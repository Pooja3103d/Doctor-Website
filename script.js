document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedback-form');
    const feedbackList = document.getElementById('feedback-list');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const comment = document.getElementById('comment').value;
        
        if (name.trim() === '' || comment.trim() === '') {
            alert('Please enter both your name and feedback.');
            return;
        }
        
        const feedbackItem = document.createElement('div');
        feedbackItem.classList.add('feedback-item');
        
        feedbackItem.innerHTML = `
            <strong>${name}  </strong>

            <p>${comment}</p>
        `;
        
        feedbackList.appendChild(feedbackItem);
        
        // Clear the form
        form.reset();
    });
});
