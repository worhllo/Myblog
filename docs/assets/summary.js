// JavaScript plugin for displaying AI summaries

function displaySummary(text) {
    // Assuming we have some AI service that provides summaries
    const summary = aiService.getSummary(text);
    document.getElementById('summary').textContent = summary;
}

// Example usage:
const exampleText = "Your long content goes here...";
displaySummary(exampleText);