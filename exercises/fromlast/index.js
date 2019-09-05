// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  let play = list.head
  let ffw = list.head

  for (let ffwHeadStart = 0; ffwHeadStart <= n; ffwHeadStart++) {
    ffw = ffw.next
  }

  // or, instead of for loop above:
  // while (n > 0) {
  //   ffw = ffw.next
  //   n--
  // }

  while (ffw) {
    play = play.next
    ffw = ffw.next
  }

  // if you have lines 22-26 active, change while loop in 28-31 to:
  // while (ffw.next) {
  //   play = play.next
  //   ffw = ffw.next
  // }

  return play
}

module.exports = fromLast;
