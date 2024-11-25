const clearable = {
  mounted(el) {
    const clearBtn = document.createElement('button');
    clearBtn.innerHTML = 'Clear';
    clearBtn.style = `
      position: relative; 
      left: 10px;
      padding: 1rem 2rem;
      background-color: #fff;
      border: #ccc 1px solid;
      border-radius: 8px;
      font-size: 20px;
      margin-right: 76px;
      `;
    clearBtn.addEventListener('click', () => {
      el.value = '';
      el.dispatchEvent(new Event('input'));
      el.focus();
    });
    el.parentNode.insertBefore(clearBtn, el.nextSibling);
  },
};

export default clearable;
