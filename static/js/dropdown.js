
let drop = [false, false, false, false, false];
openDropdown('1')

function openDropdown(id) {
  id = id.replace(/\s+/g, "");
  drop.forEach((el, i) => {
    if (i + 1 == id) {
      if (el) {
        $(`#dropBtn-${id}`).removeClass("text-secondary");
        $(`#drop-${id}`)
          .removeClass("border-secondary shadow-lg shadow-secondary/25")
          .addClass("border-title ");
        $(`#dropcontent-${id}`).addClass("hidden");
        $(`#dropArrow-${id}`).removeClass("dropIconActive");
        drop[id - 1] = !el
      } else {
        $(`#dropBtn-${id}`).addClass("text-secondary");
        $(`#drop-${id}`)
          .addClass("border-secondary shadow-lg shadow-secondary/25")
          .removeClass("border-title ");
        $(`#dropcontent-${id}`).removeClass("hidden").addClass("block");
        $(`#dropArrow-${id}`).addClass("dropIconActive");
        drop[id - 1] = !el
      }
    } else {
      $(`#dropBtn-${i + 1}`).removeClass("text-secondary");
      $(`#drop-${i + 1}`)
        .removeClass("border-secondary shadow-lg shadow-secondary/25")
        .addClass("border-title ");
      $(`#dropcontent-${i + 1}`).addClass("hidden");
      $(`#dropArrow-${i + 1}`).removeClass("dropIconActive");
        drop[i] = false
    }
  });
};

