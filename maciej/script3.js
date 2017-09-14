$(document).ready(function(){
    // Path to images folder
    var folder1 = "gfx/motoryzacja/";
    var folder2 = "gfx/militaria/";
    // Make ajax call for images
    $.ajax({
        // From
        url : folder1,
        // If call is successful (directory can be read)
        success: function (data) {
            // Get all files (ajax sees them as anchor object with href)
            $(data).find("a").attr("href", function (i, val) {
                // If the file is an image
                if( val.match(/\.(jpe?g|png|gif)$/) ) {
                    // Add it in the proper place on the page 
                    $("#motoryzacjaPage").append( "<img class=\"flyingImage\" src='"+ folder1 + val +"'>" );
                } 
            });
        }
    });

    $.ajax({
        // From
        url : folder2,
        // If call is successful (directory can be read)
        success: function (data) {
            // Get all files (ajax sees them as anchor object with href)
            $(data).find("a").attr("href", function (i, val) {
                // If the file is an image
                if( val.match(/\.(jpe?g|png|gif)$/) ) {
                    // Add it in the proper place on the page 
                    $("#militariaPage").append( "<img class=\"flyingImage\" src='"+ folder2 + val +"'>" );
                } 
            });
        }
    });

    $('body').on('click','.flyingImage',function(e){
        e.stopImmediatePropagation();
        console.log(e.target.src);
        $("body").append( "<div class=\"cont100\"><img class=\" flyingImageZoom\" src='"+ e.target.src + "'></div>" );
    });
    $('body').on('click','.flyingImageZoom',function(e){
        e.stopImmediatePropagation();
        $(e.target).parent().remove();
    });
});