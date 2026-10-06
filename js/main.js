
// ハンバーガーメニュー


const menuButton = document.getElementById("menu-button");
const globalNav = document.getElementById("global-nav");

if (menuButton && globalNav) {
  menuButton.addEventListener("click", () => {
    // メニューを開閉
    globalNav.classList.toggle("is-active");

    // 開閉状態を取得
    const isOpen = globalNav.classList.contains("is-active");

    // アクセシビリティ対応
    menuButton.setAttribute("aria-expanded", isOpen);

    // ボタンのラベルも変更
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "メニューを閉じる" : "メニューを開く"
    );
  });

  // ナビゲーションをクリックしたらメニューを閉じる
  const navLinks = globalNav.querySelectorAll("a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      globalNav.classList.remove("is-active");

      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "メニューを開く");
    });
  });
}