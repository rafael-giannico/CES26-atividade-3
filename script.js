$(document).ready(function() {
    let selectedElement = null;

    // Selecionar elemento com o mouse
    $('#domTree').on('click', 'div', function(e) {
        e.stopPropagation(); // Para evitar a propagação do evento para elementos pai

        if (selectedElement) {
            $(selectedElement).removeClass('selected');
        }

        selectedElement = this;
        $(selectedElement).addClass('selected');
    });

    // Remover elemento
    $('#remove').click(function() {
        if (selectedElement) {
            $(selectedElement).remove();
            selectedElement = null;
        }
    });

    // Adicionar filho ao elemento selecionado
    $('#add').click(function() {
        if (selectedElement) {
            $(selectedElement).append('<div>Novo Elemento</div>');
        }
    });

    // Mudar propriedades do elemento (neste caso, apenas o texto)
    $('#applyChange').click(function() {
        if (selectedElement) {
            const newValue = $('#changeProp').val();
            $(selectedElement).text(newValue);
        }
    });
});