/**
 * hamburger.js
 *
 * Mobile Menu Hamburger
 * =====================
 * A hamburger menu for mobile websites
 *
 * Created by Thomas Zinnbauer YMC AG  |  http://www.ymc.ch
 * Date: 21.05.13
 */

//Open the menu
function openMenu() {

    jQuery('#content').css('min-height', jQuery(window).height());

    jQuery('nav').css('opacity', 1);
    jQuery('nav').css('z-index', 2);
    jQuery('nav').css('height', '100%');
    jQuery('nav').css('width', '70%');

    //set the width of primary content container -> content should not scale while animating
    var contentWidth = jQuery('#content').width();

    //set the content with the width that it has originally
    jQuery('#content').css('width', contentWidth);

    //display a layer to disable clicking and scrolling on the content while menu is shown
    jQuery('#contentLayer').css('display', 'block');

    //disable all scrolling on mobile devices while menu is shown
    jQuery('#container').bind('touchmove', function (e) {
        e.preventDefault()
    });

    //set margin for the whole container with a jquery UI animation
    jQuery("#container").animate({ "marginLeft": ["70%", 'easeOutExpo'] }, {
        duration: 700
    });

};

function removeMenu() {
        //enable all scrolling on mobile devices when menu is closed
        jQuery('#container').unbind('touchmove');

        //set margin for the whole container back to original state with a jquery UI animation
        jQuery("#container").animate({ "marginLeft": ["-1", 'easeOutExpo'] }, {
            duration: 700,
            complete: function () {
                jQuery('#content').css('width', 'auto');
                jQuery('#contentLayer').css('display', 'none');
                jQuery('nav').css('opacity', 0);
                jQuery('nav').css('z-index', 0);
                jQuery('#content').css('min-height', 'auto');

            }
        });

        jQuery('#content').css('width', 'auto');
        jQuery('#contentLayer').css('display', 'none');
        jQuery('nav').css('opacity', 0);
        jQuery('nav').css('z-index', 0);
        jQuery('nav').css('height', '0%');
        jQuery('nav').css('width', '0%');
        jQuery('#content').css('min-height', 'auto');
}

//jQuery(document).ready(function () {

//    //Open the menu
//    function openMenu() {

//        jQuery('#content').css('min-height', jQuery(window).height());

//        jQuery('nav').css('opacity', 1);

//        //set the width of primary content container -> content should not scale while animating
//        var contentWidth = jQuery('#content').width();

//        //set the content with the width that it has originally
//        jQuery('#content').css('width', contentWidth);

//        //display a layer to disable clicking and scrolling on the content while menu is shown
//        jQuery('#contentLayer').css('display', 'block');

//        //disable all scrolling on mobile devices while menu is shown
//        jQuery('#container').bind('touchmove', function (e) {
//            e.preventDefault()
//        });

//        //set margin for the whole container with a jquery UI animation
//        jQuery("#container").animate({ "marginLeft": ["70%", 'easeOutExpo'] }, {
//            duration: 700
//        });

//    };

//    //close the menu
//    jQuery("#contentLayer").click(function () {

//        //enable all scrolling on mobile devices when menu is closed
//        jQuery('#container').unbind('touchmove');

//        //set margin for the whole container back to original state with a jquery UI animation
//        jQuery("#container").animate({ "marginLeft": ["-1", 'easeOutExpo'] }, {
//            duration: 700,
//            complete: function () {
//                jQuery('#content').css('width', 'auto');
//                jQuery('#contentLayer').css('display', 'none');
//                jQuery('nav').css('opacity', 0);
//                jQuery('#content').css('min-height', 'auto');

//            }
//        });
//    });

//});