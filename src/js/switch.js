
  document.addEventListener('DOMContentLoaded', (event) => {
    const toggleSwitch = document.getElementById('customSwitch1');

    toggleSwitch.addEventListener('change', function() {
      if (this.checked) {
        console.log("Switch is ON");
      } else {
        console.log("Switch is OFF");
      }
    });
  });
