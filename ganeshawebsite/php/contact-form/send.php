<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {  // Assurez-vous que la requête est une requête POST
  $to = 'alexis.degraeve@hotmail.com';
  $subject = 'Contact from contact form';
  $message = "From: " . htmlspecialchars($_POST['firstName']) . " " . htmlspecialchars($_POST['lastName']) . "\n";
  $message .= "Email: " . htmlspecialchars($_POST['email']) . "\n";
  $message .= "Subject: " . htmlspecialchars($_POST['subject']) . "\n";
  $message .= "Message: \n" . htmlspecialchars($_POST['message']);
  $headers = 'From: contact_form@ganesha.ovh';

  if (mail($to, $subject, $message, $headers)) {
    echo json_encode(['status' => 'success', 'message' => 'Your message has been sent.']);
  } else {
    echo json_encode(['status' => 'error', 'message' => 'There was a problem sending your contact message']);
  }
} else {
  echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}
?>
