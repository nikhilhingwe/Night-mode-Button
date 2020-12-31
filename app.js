 document.querySelector('.checkbox').addEventListener('change',()=>{
      document.querySelectorAll('.night-mode-available').forEach(ele=>{
        ele.classList.toggle('night');
      })
    });