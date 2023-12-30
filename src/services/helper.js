export function truncateText(text, limit = 50) {
    if (text.length <= limit) {
        return text; // Return the original text if it's within the limit
    } else {
        // Truncate the text and add an ellipsis (...) at the end
        return text.slice(0, limit) + '...';
    }
}