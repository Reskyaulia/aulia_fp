<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $address = htmlspecialchars($_POST['address']);
    $payment = htmlspecialchars($_POST['payment']);

    // Logika untuk memproses pembelian
    // Misalnya, simpan data ke database atau kirim email konfirmasi

    echo "Terima kasih, $name. Pembelian Anda dengan metode pembayaran $payment telah diterima.";
}
?>
