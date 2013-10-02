/* Comprobamos que hemos cargado este script */
console.log('Cargado correctamente');

/* Dropdown de notificaciones en jJeftBar */
$('.jLeftBar .ui.dropdown')
  .dropdown({
    transition : 'scale'
  })
;

/* Acordeón de jLeftBar joinitys */
$('.jLeftBar .ui.accordion')
  .accordion()
;