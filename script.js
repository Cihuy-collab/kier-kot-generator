$(document).ready(function() {
    $('#generateBtn').click(function() {
        const url = $('#urlInput').val();
        const color = $('#colorInput').val() || '#000000';

        if (!url) {
            alert('Mohon masukkan URL!');
            return;
        }

        $('#qrcode').empty();

        // Generate QR code using qrcode.js
        const qrcode = new QRCode(document.getElementById("qrcode"), {
            text: url,
            width: 256,
            height: 256,
            colorDark: color,
            colorLight: "#333333",
            correctLevel: QRCode.CorrectLevel.H,
        });

        $('#downloadBtn').show();
    });

    $('#downloadBtn').click(function() {
        const canvas = document.querySelector("#qrcode canvas");
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'qrcode.png';
        link.click();
    });
});
