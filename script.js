document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.querySelector('.loader-container').style.display = 'none';
    document.querySelector('.content').classList.remove('hidden');
  }, 10000);
});