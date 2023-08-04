// Sample initial discussions
const initialDiscussions = [
    "Welcome to the ChatGPT Improvement Forum!",
    "What do you think are the key areas where ChatGPT can be improved?",
];

// Function to display discussions
// Function to save discussions to Local Storage
function saveDiscussionsToLocalStorage(discussions) {
    localStorage.setItem("discussions", JSON.stringify(discussions));
}

// Function to load discussions from Local Storage
// Function to display discussions
function displayDiscussions(discussions) {
    const discussionContainer = document.getElementById("discussions");
    discussionContainer.innerHTML = discussions.map(discussion => `<p>${discussion}</p>`).join("");
}

// Function to load discussions from the server
function loadDiscussionsFromServer() {
    fetch("/discussions")
        .then(response => response.json())
        .then(data => {
            discussions = data;
            displayDiscussions(discussions);
        })
        .catch(error => console.error("Error loading discussions:", error));
}

// Function to save discussions to the server
function saveDiscussionsToServer(discussions) {
    fetch("/discussions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(discussions),
    })
    .catch(error => console.error("Error saving discussions:", error));
}

// Function to handle form submission
function submitDiscussion(event) {
    event.preventDefault();
    const messageInput = document.getElementById("message");
    const message = messageInput.value.trim();
    if (message !== "") {
        discussions.push(message);
        messageInput.value = "";
        displayDiscussions(discussions);
        saveDiscussionsToServer(discussions); // Save updated discussions to the server
    }
}

// Event listeners
document.getElementById("discussion-form").addEventListener("submit", submitDiscussion);

// Load discussions on page load
let discussions = [];
loadDiscussionsFromServer();
