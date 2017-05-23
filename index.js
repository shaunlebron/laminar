CodeMirror.fromTextArea(document.getElementById("normal"), {
  theme: 'one-dark',
  readOnly: true,
});

// var editor = CodeMirror.fromTextArea(document.getElementById("tucked"), {
//   theme: 'one-dark',
//   readOnly: true,
// });

//
// editor.on("mousedown", function(cm, e) {
//   var pos = editor.coordsChar({left: e.clientX, top: e.clientY});
//   console.log("at", pos.line, ",", pos.ch);
//   // e.preventDefault(); // if you don't want the cursor to move here.
// });
