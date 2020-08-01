function add() {
  if(localStorage.mo_rui_er == undefined) {
    localStorage.mo_rui_er = parseInt(0);
  }
  localStorage.mo_rui_er ++;
  console.log("mo rui_er times: "+localStorage.mo_rui_er);
  reload();
}
