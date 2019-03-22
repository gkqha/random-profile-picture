import md5 from "md5";
import chroma from "chroma-js";
window.onload = function() {
  document.getElementById("submit").addEventListener("click", () => {
    Submit();
  });
  function Submit() {
    // const inputMd5 = md5(document.getElementById("input").value).toString();
    // const outputMd5 = inputMd5 + inputMd5.substring(0, 16);
    // const color = [[]];
    // const num = -1;
    // for (let i = 0; i < 48; i += 3) {
    //   const subColor = [255, 255, 255];
    //   if (parseInt(outputMd5[i], 16) % 2 == 0) {
    //     subColor[0] = Math.round((parseInt(outputMd5[i], 16) * 255) / 15);
    //     subColor[1] = Math.round((parseInt(outputMd5[i + 1], 16) * 255) / 15);
    //     subColor[2] = Math.round((parseInt(outputMd5[i + 2], 16) * 255) / 15);
    //   }
    //   if (i % 12 == 0) {
    //     num++;
    //     color.push([]);
    //   }
    //   color[num].push(subColor);
    // }
    const inputMd5 = md5(document.getElementById("input").value).toString();
    const colorMd5 = inputMd5.substring(0, 6);
    const colorList = [3];
    colorList[0] = changeColor(colorMd5, 0);
    colorList[1] = changeColor(colorMd5, 1);
    colorList[2] = changeColor(colorMd5, 2);
    draw(colorList);
  }
  function changeColor(md5, times) {
    let [h, s, l] = chroma(`#${md5}`).hsl();
    h = h + times * 30;
    if (h > 360) {
      h = h - 360;
    }
    return chroma({ h: h, s: s * 0.8, l: l }).hex();
  }
  function draw(colorList) {
    // const ctx = document.getElementById("canvas").getContext("2d");
    // ctx.save();
    // ctx.scale(32, 32);
    // for (var i = 0; i < 4; i++) {
    //   for (var j = 0; j < 4; j++) {
    //     ctx.fillStyle =
    //       "rgb(" +
    //       color[i][j][0] +
    //       "," +
    //       color[i][j][1] +
    //       "," +
    //       color[i][j][2] +
    //       ")";
    //     ctx.fillRect(j * 1, i * 1, 1, 1);
    //   }
    // }
    // ctx.restore();
    for (let i = 0; i < colorList.length; i++) {
      let cls = document.getElementsByClassName(`cls_${i}`);
      for (let item of cls) {
        item.setAttribute("fill", colorList[i]);
      }
    }
  }
};
