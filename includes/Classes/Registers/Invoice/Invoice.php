<?php
namespace FluentProfile\Classes\Registers\Invoice;

class Invoice
{
    public function generateInvoice ($newStatus, $submission) {

        if (function_exists('wpFluentForm')) {

            if ($newStatus == 'paid' || $newStatus == 'pending' || $newStatus == 'processing') {

                $pdf  = new \FluentFormPdf\Classes\Templates\InvoiceTemplate(wpFluentForm());

                $settings = wpFluent()->table('fluentform_form_meta')
                    ->where('form_id', $submission->form_id)
                    ->where('meta_key','_pdf_feeds')
                    ->first();

                $formSettings = json_decode($settings->value, true);

                $emailAttachments = $pdf->generatePdf($submission->id, $formSettings, 'I');
                $name    = "nadim";
                $email   = get_option('admin_email');
                $message = "Congratulations! Your donations has been " . $newStatus;

                //php mailer variables
                //$to      = get_option('admin_email');
                $to      = 'nadimcse.official@gmail.com';
                $subject = "Fluent Profile Donation Receipt";
                $headers = 'From: ' . $email . "\r\n" .
                    'Reply-To: ' . $email . "\r\n";

                $pdfPath = WP_CONTENT_DIR. '/uploads/';
                $pdfName = $formSettings['name'].'_donation'.$submission->id.'.pdf';

                $pdf = fopen($pdfPath.$pdfName, 'w');
                fwrite($pdf, $emailAttachments);
                fclose($pdf);

                $attachments = array($pdfPath.$pdfName);
                $sent = wp_mail($to, $subject, strip_tags($message), $headers, $attachments);

                if ($sent) {
                    if (file_exists($pdfPath.$pdfName)) {
                        unlink($pdfPath.$pdfName);
                    }
                    return true;
                }//message sent!
                else {
                    return "problem";
                }//message wasn't sent
            }
        }

    }
}