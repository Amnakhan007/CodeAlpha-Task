document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();

    if (dob > today) {
        document.getElementById('result').innerText = "The date of birth cannot be in the future.";
        return;
    }

    const age = today.getFullYear() - dob.getFullYear();
    const month = today.getMonth() - dob.getMonth();
    const day = today.getDate() - dob.getDate();

    let adjustedAge = age;
    if (month < 0 || (month === 0 && day < 0)) {
        adjustedAge--;
    }

    document.getElementById('result').innerText = `Your age is ${adjustedAge} years.`;
});

