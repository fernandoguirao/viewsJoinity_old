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

/* Modal buscador */
$('.jSearchModal .ui.modal')
  .modal()
;

$('.jSearchBtn').click(function(){
  $('.jSearchModal.ui.modal').modal('show')
  ;
})

/* Tabs buscador */
$('.jSearchModal .filter.menu .item')
  .tab()
;