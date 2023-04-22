import React from 'react';
import css from './style.module.scss';
import SectionTitle from '../../components/SectionTitle';

function FAQ() {
  return (
    <div className={css.container}>
      <SectionTitle className={css.title} title="Frequently Asked Questions" />
      <h2>How do I upload an image of my car to a website for recognition?</h2>
      <p>
        To upload an image of your car to a website for recognition, you'll typically need to click on a button or link that says something like "Upload Image" or "Choose File". This will open a dialog box that allows you to select the image file from your computer. After you've selected the file, click on the "Upload" or "Submit" button to upload the image to the website's server for recognition.
      </p>
      <h2>Is it safe to upload images of my car to a website?</h2>
      <p>
        It's generally safe to upload images of your car to a website, as long as you trust the website and its security measures. Look for a lock icon in the address bar of your browser to confirm that the connection is secure. Also, make sure you trust the website before uploading any sensitive images, as they may be stored on the website's server.
      </p>
      <h2>What format should my image be in?</h2>
      <p>
        This website accepts common image formats such as JPEG, PNG, and GIF
      </p>
      <h2>How do I know if my image has been successfully uploaded?</h2>
      <p>
        Once you have selected your image, the website will display you a preview of the image or a message confirming that the upload was successful. If you don't see any confirmation message or preview, try refreshing the page or checking your internet connection.
      </p>
    </div>
  );
}

export default FAQ;
