function handleUpload(buttonIndex) {
  const fileInput = document.getElementById(`upload${buttonIndex}`);

  // Check if a file is selected
  if (fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const uploadedImg = document.createElement("img");
      uploadedImg.src = e.target.result;
      uploadedImg.classList.add("uploaded-img");

      // Replace the upload button with the uploaded image
      const button = document.getElementById(`upload${buttonIndex}`);
      button.parentNode.replaceChild(uploadedImg, button);
    };

    // Read the uploaded file as URL
    reader.readAsDataURL(fileInput.files[0]);
  }
}
