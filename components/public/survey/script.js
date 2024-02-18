var checked = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

document.addEventListener("DOMContentLoaded", function() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      const value = this.checked ? 1 : 0;
      console.log(`Checkbox ${this.value} is ${this.checked ? 'checked' : 'unchecked'}. Value: ${value}`);
      checked[this.value] = value;
      console.log(checked);
      // You can use the 'value' variable for further processing
    });
  });

  submitButton.addEventListener('click', function() {
    console.log('Submit button clicked');
    console.log('Checked array:', checked);
    // Perform further processing with the 'checked' array
    fetch(`/api?=${arr}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ checked: checked }) // send the checked array in the request body
    })
  });
});

