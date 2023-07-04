const input = document.querySelector('#input');
const paragraph = document.querySelector('#paragraph');

const updateParagraph = (evt) => {
  paragraph.textContent = evt.target.value;
};

const debounce = (callee, timeoutMs) => {
  return function perform(...args) {
    let previousCall = this.lastCall

    this.lastCall = Date.now()

    if (previousCall && this.lastCall - previousCall <= timeoutMs) {
      clearTimeout(this.lastCallTimer)
    }

    this.lastCallTimer = setTimeout(() => callee(...args), timeoutMs)
  }
};

const debouncedHandle = debounce(updateParagraph, 300);

input.addEventListener('input', debouncedHandle);