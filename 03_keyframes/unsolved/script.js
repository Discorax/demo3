const progressBar = document.getElementById("progressbar");

progressBar.addEventListener('click', function() {
  document.getElementById("orangeBar").animate(
    [
      { width: '1%' },
      { width: '100%' }
    ], {
      duration: 3000,
      iterations: 1,
      fill: 'forwards'
        }
  );
});
