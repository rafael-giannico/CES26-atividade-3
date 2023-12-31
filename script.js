$(document).ready(function() {
    let selectedNode = null;
    let nodeIdCounter = 2;

    $(".tree").on("click", ".node", function(event) {
        event.stopPropagation();

        if (selectedNode) {
            $(selectedNode).removeClass("selected");
        }

        selectedNode = this;
        $(this).addClass("selected");
    });

    $("#remove").click(function() {
        if (selectedNode && !$(selectedNode).hasClass("root")) {
            $(selectedNode).remove();
            selectedNode = null;
        }
    });

    $("#addChild").click(function() {
        if (selectedNode) {
            const newNode = $(`<div class="node" data-id="${nodeIdCounter++}">Novo Nó<div class="children"></div></div>`);
            $(selectedNode).find("> .children").append(newNode);
        }
    });

    $("#processTextChange").click(function() {
        if (selectedNode) {
            const newText = $("#changeText").val();
            $(selectedNode).contents().first()[0].nodeValue = newText;
        }
    });
});
