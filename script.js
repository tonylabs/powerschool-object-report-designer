document.addEventListener("DOMContentLoaded", function () {
    var editor = grapesjs.init({
      container: "#gjs",
      components: "<div>Hello, GrapeJS!</div>",
      storageManager: false, // Disable storage
    });
  });