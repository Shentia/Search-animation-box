/**
 * @author Ahmadreza Shamimi
 * @email [shentiaspirit@hotmail.com]
 * @create date 2021-10-06 23:30:56
 * @modify date 2021-10-06 23:58:55
 * @desc [https://github.com/shentia]
 */

const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});
