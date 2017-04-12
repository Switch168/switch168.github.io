/**
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
 * http://stackoverflow.com/questions/21741841/detecting-ios-android-operating-system
 * @returns {String}
 */
window.onload = function() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
        document.getElementById("android").style.display = "block";
        //return "Android";
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        // iOS detection from: http://stackoverflow.com/a/9039885/177710
        document.getElementById("ios").style.display = "block";
    } else {
        document.getElementById("android").style.display = "inline-block";
        document.getElementById("ios").style.display = "inline-block";
    }
}