function download() {
  var ANDROID_LINK =
    "https://expo.dev/@cheng-alvin/chill-and-chat-mobile-app?serviceType=classic&distribution=expo-go";
  var IOS_LINK = "https://apps.apple.com/au/app/chill-chat/id6443742617";

  if (navigator.userAgent.indexOf("Android") != -1)
    window.location = ANDROID_LINK;
  else window.location = IOS_LINK;
}
