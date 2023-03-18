      let  fastcount = 00;
      let slowcount = 00;
      let ft = document.getElementById("Start");
      let st = document.getElementById("Stop");
      let rt = document.getElementById("Reset");
      let mm = document.getElementById("minute");
      let ss = document.getElementById("second");
      var interval;
      ft.onclick = start;
      st.onclick = stop;
      rt.onclick = reset;
      function start() {
        clearInterval(interval);
        interval = setInterval(timer, 10);
      }
      function timer() {
        fastcount++;

        if (fastcount <= 9) {
          ss.innerText = "0" + fastcount;
        }
        if (fastcount > 9) {
          ss.innerText = fastcount;
        }
        if (slowcount <= 9) {
          mm.innerText = "0" + slowcount;
        }
        if (slowcount > 9) {
          mm.innerText = slowcount;
        }
        if (fastcount > 99) {
          fastcount = 0;
          slowcount++;
          mm.innerText = slowcount;
        }
      }

      function stop() {
        clearInterval(interval);
      }
      function reset() {
        clearInterval(interval);
        fastcount = 0;
        slowcount = 0;
        ss.innerText = "0" + fastcount;
        mm.innerText = "0" + slowcount;
      }
