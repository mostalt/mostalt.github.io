window.addEventListener("load", function () {
  console.log("INIT");

  if (window.Telegram.WebApp) {
    window.Telegram.WebApp.ready();
    window.Telegram.WebApp.initData("INIT");
    Telegram.WebApp.MainButton.setParams({
      text_color: "#fff",
      text: "Main Button",
      color: "#6a0dad",
      is_active: true,
      is_visible: true,
    }).onClick(() => console.log("Main Button Clicked"));
    console.log("READY");
  } else {
    console.log("WebApp is undefined");
  }
});
