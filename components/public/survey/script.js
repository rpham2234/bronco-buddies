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
});