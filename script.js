document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.querySelector('.loader-container').style.display = 'none';
    document.querySelector('.first').classList.remove('hidden');
  }, 20000);
});
