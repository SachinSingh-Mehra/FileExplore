var ps;
userId = 15;

if (userId == null) {
    debugger
    window.location = "/account/login";
}

$(document).ready(function() {
        $('#content-container').load('View/Home/index.html', function(response, status, xhr) {
            if (status == "error") {
                $('#content-container').html("<p>Error: " + xhr.status + " " + xhr.statusText + "</p>");
            } else {
                console.log("Home content loaded successfully");

                if (!$("link[href='Styles/Home/filemanager.css']").length) {
                    $('<link>')
                        .appendTo('head')
                        .attr({
                            type: 'text/css',
                            rel: 'stylesheet',
                            href: 'Styles/Home/filemanager.css'
                        });
                    console.log("Home CSS loaded successfully");
                }

                $.getScript("Js/Home/index.js", function() {
                    console.log("Home JS loaded successfully");
                });
                $.getScript("Js/Shared/folderfileevent.js", function() {
                    console.log("folderfileevent JS loaded successfully");
                });
            }
        });

    
});

    $('#load-file-manager').click(function() {
        var container  = document.getElementById('content-container');
        container.innerHTML = '';
        $('#content-container').load('View/FileManager/index.html', function(response, status, xhr) {
            if (status == "error") {
                $('#content-container').html("<p>Error: " + xhr.status + " " + xhr.statusText + "</p>");
            } else {
                console.log("File Manager content loaded successfully");
            }
        });
    });
    $('#load-user').click(function() {
        var container  = document.getElementById('content-container');
        container.innerHTML = '';
        $('#content-container').load('View/User/index.html', function(response, status, xhr) {
            if (status == "error") {
                $('#content-container').html("<p>Error: " + xhr.status + " " + xhr.statusText + "</p>");
            } else {
                $.getScript("Js/User/sub-user.js", function() {
                });
            }
        });
    });

function SignOut() {
    localStorage.clear();
    window.location = "/account/login";
    return false;
}

jQuery('body').bind('click', function (e) {
    if (jQuery(e.target).closest('.collapse.navbar-collapse').length == 0) {
        console.log(e);
        var opened = jQuery('.navbar-collapse').hasClass('collapse show');
        if (opened === true) {
            jQuery('.navbar-collapse').collapse('hide');
        }
    }
});

$(document).on('shown.bs.collapse', '.accordion', function (e) {
    debugger;
    $(e.target).prev('.card-header').addClass('accordion-opened');
    if ($(e.target).find('.sc-body').length) {
        resizeforAllTab('sc-container');
    }
});

$(document).on('hide.bs.collapse', '.accordion', function (e) {
    $(this).find('.card-header').not($(e.target)).removeClass('accordion-opened');
});

function resizeforAllTab(elementId) {
    debugger;
    var el = $("#" + elementId);
    el.height(($(document).height()) - (el.offset().top + 1 + $('.footer-cloud').height()));

    ps = new PerfectScrollbar("#" + elementId, {
        wheelSpeed: 2,
        wheelPropagation: true,
        minScrollbarLength: 20
    });
    debugger;
    onScrollforAllTab(elementId);
    if (target == '#All') {
        getAllFiles(0, '#All');
    }
    else if (target == '#Images') {
        getAllFiles(0, '#Images');
    }
    else if (target == '#Videos') {
        getAllFiles(0, '#Videos');
    }
    else if (target == '#Documents') {
        getAllFiles(0, '#Documents');
    }
    else if (target == '#Others') {
        getAllFiles(0, '#Others');
    }

}