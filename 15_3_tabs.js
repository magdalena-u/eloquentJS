const buttons = document.querySelectorAll('button');
const arrayTab = [...document.querySelectorAll('tab-panel div')];
const divTabs = arrayTab.map(div => div.getAttribute('data-tabname'));

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const currentTab = document.querySelector('.show');
        const currentBtn = document.querySelector('.active');

        if (currentTab) {
            currentTab.classList.remove('show');
            currentBtn.classList.remove('active');
        }

        const attribute = button.getAttribute('data-tabname');
        const index = divTabs.indexOf(attribute);

        arrayTab[index].classList.add('show');
        button.classList.add('active');
    });
});
