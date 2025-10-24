// mostra ano atual nos 3 rodapés
document.addEventListener('DOMContentLoaded', () => {
    const ano = new Date().getFullYear();
    document.getElementById('ano')?.append(ano);
    document.getElementById('ano2')?.append(ano);
    document.getElementById('ano3')?.append(ano);

    // menu toggles
    const menus = [
        { btn: '#btn-menu', nav: '#nav' },
        { btn: '#btn-menu-2', nav: '#nav2' },
        { btn: '#btn-menu-3', nav: '#nav3' },
    ];
    menus.forEach(pair => {
        const b = document.querySelector(pair.btn);
        const n = document.querySelector(pair.nav);
        if (!b || !n) return;
        b.addEventListener('click', () => {
            const open = b.getAttribute('aria-expanded') === 'true';
            b.setAttribute('aria-expanded', String(!open));
            n.setAttribute('aria-hidden', String(open));
        });
    });

    // validação simples do form de cadastro
    const form = document.getElementById('form-cadastro');
    if (form) {
        form.addEventListener('submit', (e) => {
            if (!form.checkValidity()) {
                e.preventDefault();
                alert('Preencha os campos obrigatórios corretamente.');
            } else {
                e.preventDefault(); // remover se for enviar de verdade
                alert('Formulário validado (demo).');
                form.reset();
            }
        });
    }
});
