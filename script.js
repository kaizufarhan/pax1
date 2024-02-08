let yesCount = parseInt(localStorage.getItem('yesCount')) || 0;
let noCount = parseInt(localStorage.getItem('noCount')) || 0;

document.getElementById('yesCount').textContent = yesCount;
document.getElementById('noCount').textContent = noCount;
document.getElementById('totalCount').textContent = yesCount + noCount;

function recordVote(vote) {
    let feedbackMessage = "";

    if (vote === 'yes') {
        yesCount++;
        feedbackMessage = "You voted 'Yes'!";
    } else if (vote === 'no') {
        noCount++;
        feedbackMessage = "You voted 'No'!";
    }

    // Update the counts in local storage
    localStorage.setItem('yesCount', yesCount.toString());
    localStorage.setItem('noCount', noCount.toString());

    // Update the counts in the dropdown
    document.getElementById('yesCount').textContent = yesCount;
    document.getElementById('noCount').textContent = noCount;
    document.getElementById('totalCount').textContent = yesCount + noCount;

    // Display feedback message
    showFeedbackMessage(feedbackMessage);
}

function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('open');
}

function resetCounter() {
    yesCount = 0;
    noCount = 0;

    // Update the counts in local storage
    localStorage.setItem('yesCount', '0');
    localStorage.setItem('noCount', '0');

    // Update the counts in the dropdown
    document.getElementById('yesCount').textContent = yesCount;
    document.getElementById('noCount').textContent = noCount;
    document.getElementById('totalCount').textContent = yesCount + noCount;

    // Display reset message
    showFeedbackMessage("Counters have been reset!");
}

function showFeedbackMessage(message) {
    const feedbackElement = document.getElementById('feedbackMessage');
    feedbackElement.textContent = message;
    feedbackElement.style.display = 'block';

    // Hide the message after 5 seconds
    setTimeout(() => {
        feedbackElement.style.display = 'none';
    }, 3000);
}
