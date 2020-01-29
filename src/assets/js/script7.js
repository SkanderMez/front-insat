/*<![CDATA[*/
var htmlDiv = document.getElementById("rs-plugin-settings-inline-css");
var htmlDivCss = "";
if (htmlDiv) {
  htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
} else {
  var htmlDiv = document.createElement("div");
  htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
  document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
} /*]]>*/
