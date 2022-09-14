function download() {
  var ERROR_LINK = "/error.html";
  var ANDROID_LINK =
    "https://expo.dev/@cheng-alvin/chill-and-chat-mobile-app?serviceType=classic&distribution=expo-go";

  if (navigator.userAgent.indexOf("Android") != -1)
    window.location = ANDROID_LINK;

  if (navigator.userAgent.indexOf("like Mac") != -1)
    // Will add app store link soon...
    window.location = ERROR_LINK;
  else window.location = ERROR_LINK;
}
