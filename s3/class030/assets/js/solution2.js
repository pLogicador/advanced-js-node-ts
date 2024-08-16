// Solution 2
// Gets the current date and selects the <h1> element inside the container
const currentDate = new Date();
const headerTitle = document.querySelector('.container h1');

// Formats the date in Brazilian Portuguese with full style
const formattedDateTime = currentDate.toLocaleString('pt-BR', {
    dateStyle: 'full',
    //timeStyle: 'short'   // Uncomment if you want to include the time
});

// Sets the content of the <h1> with the formatted date
headerTitle.innerHTML = formattedDateTime;
