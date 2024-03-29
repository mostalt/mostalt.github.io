window.addEventListener("load", function () {
  console.log("INIT");

  if (window.Telegram.WebApp) {
    window.Telegram.WebApp.ready();

    Telegram.WebApp.MainButton.setParams({
      text_color: "#fff",
      text: "Main Button",
      color: "#6a0dad",
      is_active: true,
      is_visible: true,
    }).onClick(() => console.log("Main Button Clicked"));
    console.log("READY");
    console.log(window.Telegram.WebApp.initData, "init data");
  } else {
    console.log("WebApp is undefined");
  }
});
