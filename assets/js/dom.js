const dom = {
  create(
    content = false,
    type = 'div',
    parent = false,
    className = false
  ) {
    const el = document.createElement(type);
    if (content) el.innerHTML = content;
    if (className) el.className = className;
    if (parent) parent.append(el);

    return el;
  },
  createDropDown(content = false, type = 'select', parent = false, className = false) {
    const el = document.createElement(type);
    if (content) {
      for (let i = 0; i < content.length; i++) {
        let option = this.create(content[i].name, 'option', el);
        option.value = i;
      }
    }
    if (className) el.className = className;
    if (parent) parent.prepend(el);
  },
  createCard(content = false, type = 'div', parent = false, className = false) {
    const el = this.create(false, type, parent, 'card');
    el.setAttribute('data-name', content.name);
    let front = this.create(false, 'div', el, 'front');
    let fImg = this.create(false, 'img', front);
    fImg.src = content.front;

    let back = this.create(false, 'div', el, 'back');
    let bImg = this.create(false, 'img', back);
    bImg.src = content.back;
    return el;
  }
}