window.addEventListener("load", function () {
  console.log("INIT");

  if (window.Telegram.WebApp) {
    window.Telegram.WebApp.ready();
    console.log("READY");
  } else {
    console.log("WebApp is undefined");
  }
});
