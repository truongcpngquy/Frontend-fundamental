function openImage(imgElement) {
    const overlay = document.getElementById("imageOverlay");
    const largeImage = document.getElementById("largeImage");
    largeImage.src = imgElement.src;
    overlay.style.display = "flex";
  }

  function closeImage() {
    document.getElementById("imageOverlay").style.display = "none";
  }