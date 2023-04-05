// section 7 -8

// section 7
// contoh 1
// Use Case 1
const modal = document.querySelector('.modal');

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modal.classList.remove('show');
  }
});
// Use Case 2
const form = document.querySelector('form');

form.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    form.submit();
  }
});
// contoh 2
const inputForm = document.querySelector('#input-form');
const input = document.querySelector('#input');
const charCount = document.querySelector('#char-count');

input.addEventListener('input', () => {
  charCount.innerText = input.value.length;
});

// section 8
// contoh 1
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function(event) {
    const isChecked = event.target.checked;

    const label = event.target.nextElementSibling;
    if (isChecked) {
      label.textContent = 'Checked';
    } else {
      label.textContent = 'Unchecked';
    }
  });
});

// contoh 2
const selectBox = document.querySelector('#mySelect');

selectBox.addEventListener('change', function(event) {
  const selectedValue = event.target.value;

  if (selectedValue === 'fruit') {
    const options = ['Apple', 'Banana', 'Orange'];
    addOptions(options);
  } else if (selectedValue === 'vegetable') {
    const options = ['Carrot', 'Tomato', 'Potato'];
    addOptions(options);
  } else {
    clearOptions();
  }
});

function addOptions(options) {
  clearOptions();
  options.forEach(function(option) {
    const newOption = document.createElement('option');
    newOption.textContent = option;
    selectBox.appendChild(newOption);
  });
}

function clearOptions() {
  selectBox.innerHTML = '';
}