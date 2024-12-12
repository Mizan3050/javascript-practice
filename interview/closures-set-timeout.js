function timer() {
  for (var i = 0; i <= 5; i++) {
    function close(t) {
      setTimeout(() => {
        console.log(t);
      }, t * 100);
    }
    close(i)
  }
}
timer();
