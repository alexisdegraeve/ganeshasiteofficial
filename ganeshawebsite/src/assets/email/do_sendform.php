<?php
  if (isset($_REQUEST['e_texte'])) {   
    $to = 'alexis.degraeve@hotmail.com';
    $subject = 'Contact from contact form';
    $message = "From: " . $_REQUEST['e_name'] . "\n";
    $message .= "Email: " . $_REQUEST['e_email'] . "\n";
    $message .= "Message: \n" . $_REQUEST['e_texte'];
    $header = 'From: contact_form@yourdomain.com';
    
    if (mail($to, $subject, $message, $header)) {
      echo 'Your message has been sent.'; 
    } else {
      echo 'There was a problem sending your contact message';
    }
    
    die();     
  }
?>