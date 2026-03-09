fetch("components/navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;

    const toggle = document.querySelector('.mobile-nav-toggle');

    if (toggle) {
      toggle.addEventListener('click', function () {
        document.body.classList.toggle('mobile-nav-active');

        this.classList.toggle('bi-list');
        this.classList.toggle('bi-x');
      });
    }
  });