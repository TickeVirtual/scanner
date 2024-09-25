function domReady(fn){
    if(
        document.readyState === "complete" || 
        document.readyState === "interactive"
    )
    {

        setTimeout(fn, 1000);
    }
    else {

        document.addEventListener("DOMContentLoaded", fn)
    }
} 

domReady(function (){
    
    function onScanSuccess(decodeText, decodeResult) {
        
        alert("El codigo es: " + decodeText, decodeResult);
    }

    let htmlscanner = new Html5QrcodeScanner (
        "Mi lector de QR",
        {
            fps:10, qrbos:250 
        }
    );
    htmlscanner.render(onScanSuccess);
});

// fps: Sets the frames per second for video capture.

// qrbos: Sets the QR code detection boundary size.
