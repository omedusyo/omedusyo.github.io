// TODO: God have mercy on my soul


// examples
// var doc = {
//   length: 5,
//   cursor: [4, 5],
//   content: ['w', 'o', 'r', 'l', 'd', ' '],
// };

var emptyDoc = {
  length: 0,
  cursor: ['-inf', 'inf'],
  content: [],
};

// conventions:
// position of elements are just indices in the array 0, 1, 2, 3, 4
//
// cursor position is a pair of neighbouring element positions [0,1], [1,2], [3,4]
// or in the case of beginning or end
// the positions are [-inf, 0] or [4,inf]
//
// to move the cursor at (x, y) one step to the right is just (x +1, y + 1)
//   where -inf + 1 := 0 and inf + 1
// to move the cursor at (x, y) one step to the left is just

// var newDoc = move_right(doc).cursor;
// var newDoc = move_right(move_right(doc)).cursor;
// var newDoc = move_right(move_right(move_right(doc))).cursor;
// console.log(newDoc);
//
// doc -> doc
function move_right(doc) {
  const { length, cursor: [i, j] } = doc;
  if (i === '-inf') {
    if (j === 'inf') {
      // this is basically the empty document, so length === 0
      return {...doc, cursor: ['-inf', 'inf']};
    } else {
      return {...doc, cursor: [0, j + 1 == length ? 'inf' : j + 1]};
    }
  } else {
    if (j === 'inf') {
      return {...doc, cursor: [i, j]};
    } else {
      if (j + 1 === length) {
        return {...doc, cursor: [i + 1, 'inf']};
      } else {
        return {...doc, cursor: [i + 1, j + 1]};
      }
    }
  }
}


// doc -> doc
function move_left(doc) {
  const { length, cursor: [i, j] } = doc;
  if (i === '-inf') {
    if (j === 'inf') {
      // this is basically the empty document, so length === 0
      return {...doc, cursor: ['-inf', 'inf']};
    } else {
      return {...doc, cursor: ['-inf', 0]};
    }
  } else {
    if (i === 0) {
      return {...doc, cursor: ['-inf', j === 'inf' ? 0 : j - 1]};
    } else {
      return {...doc, cursor: [i - 1, j === 'inf' ? length - 1 : j - 1]};
    }
  }
}

// doc -> doc
function move_end(doc) {
  const { length } = doc;
  if (length === 0) {
    return doc;
  } else {
    return { ...doc, cursor: [length - 1, 'inf'] };
  }
}

// doc -> doc
function move_start(doc) {
  const { length } = doc;
  if (length === 0) {
    return doc;
  } else {
    return { ...doc, cursor: ['-inf', 0] };
  }
}

// TODO: rofl... the complexity
// immutable insertion
// array(a) -> index -> a -> array
function insert_into_array(xs, i0, a) {
  var ys = xs.slice(0, i0);
  ys.push(a);
  for (let i = i0; i < xs.length; i++) {
    ys.push(xs[i]);
  }
  return ys
}

// var xs = ['a', 'b', 'c', 'd'];
// var xs = [];
// console.log(xs);
// var ys = insert_into_array(xs, 0, 123);
// console.log(ys);
// console.log(xs);

// this changes the position of the cursor also
// doc -> char -> doc
function insert_char({ length, cursor: [i, j], content }, char) {
  return move_right({
    length: length + 1,
    cursor: [i, i === '-inf' ? 0 : i + 1],
    content: insert_into_array(content, i === '-inf' ? 0 : i + 1, char),
  });
}

// TODO: I'm going to hell for this
function delete_from_array(xs, i) {
  const pre0 = xs.slice(0, i + 1);
  const pre = pre0.splice(0, pre0.length - 1); // this surprisingly works for empty xs
  const post = xs.slice(i + 1);
  return pre.concat(post);
}

// doc -> doc
function backspace(doc) {
  const { length, cursor: [i, j], content } = doc;
  if (i === '-inf') {
    return doc;
  } else {
    return {
      length: length - 1,
      cursor: [i === 0 ? '-inf' : i - 1, j === 'inf' ? 'inf' : j - 1],
      content: delete_from_array(content, i),
    };
  }
}

// doc -> doc
function line_break(doc) {
  // TODO
  return doc;
}


function createCursor() {
  const cursorDOM = document.createElement('div');
  cursorDOM.classList.add('cursor');
  return cursorDOM;
}

function renderElement(el) {
  if (el === ' ') {
    // console.log("RENDERING WH");
    const elDOM = document.createElement('span');
    elDOM.classList.add('element-whitespace');
    elDOM.innerHTML = ' ';
    return elDOM;
  } else {
    const elDOM = document.createElement('div');
    elDOM.classList.add('doc-element');
    elDOM.innerHTML = el;
    return elDOM;
  }
}

function renderDoc(docDOM, {cursor: [i0, j0], content}) {
  docDOM.innerHTML = '';
  if (i0 === '-inf') {
    docDOM.append(createCursor());
    content.forEach(el => {
      docDOM.append(renderElement(el));
    });
  } else {
    content.forEach((el, i) => {
      docDOM.append(renderElement(el));
      if (i === i0) {
        docDOM.append(createCursor());
      }
    });
  }
}

function init() {
  var docDOM = document.getElementById('doc');
  let doc = emptyDoc;

  document.addEventListener('keyup', e => {
    // console.log(e.keyCode);
    if (65 <= e.keyCode && e.keyCode <= 90) {
      // basic character... A, B, ..., Z
      // console.log(String.fromCharCode(e.keyCode));
      doc = insert_char(doc, String.fromCharCode(e.keyCode));
    } else if (e.keyCode === 32) {
      // SPACE
      // console.log('space!!');
      doc = insert_char(doc, ' ');
    } else if (e.keyCode === 37) {
      // LEFT
      // console.log('left!!');
      doc = move_left(doc);
    } else if (e.keyCode === 39) {
      // RIGHT
      // console.log('right!!');
      doc = move_right(doc);
    } else if (e.keyCode === 8) {
      // BACKSPACE
      doc = backspace(doc);
    } else if (e.keyCode === 13) {
      // ENTER
      doc = line_break(doc);
    }
    renderDoc(docDOM, doc);
  });
  renderDoc(docDOM, doc);
}

init();

