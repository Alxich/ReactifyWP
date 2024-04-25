<?php
/**
 * That files help to change some function of plugins or wordpress.
 * Be carefully in changing some functions.
 * Do not forget to initial that in functions.php (root directory)
 */

/**
 *  Switch default core markup for search form, comment form, and comments
 *  to output valid HTML5.
 */
add_theme_support(

    'html5',

    array(

        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',

    )

);

/**
 *  Register new menus for theme
 */
function register_my_menus()
{

    register_nav_menus(

        array(

            'Primary Header' => __( 'Primary Header' ),
            'Primary Footer' => __( 'Primary Footer' )

        )

    );

}

add_action( 'init', 'register_my_menus' );

/**
 *   Add option page for default values of page,footer,header,etc.
 */
if( function_exists( 'acf_add_options_page' ) )
{

    $args = array(

        'page_title' => 'Theme settings',
        'menu_title' => '',
        'menu_slug' => 'Options',
        'post_id' => 'options',

    );

    acf_add_options_page( $args );

}

/**
 *   Allow loading and read svg format of images
 */
function cc_mime_types( $mimes )
{

    $mimes['svg'] = 'image/svg';

    return $mimes;

}

add_filter( 'upload_mimes', 'cc_mime_types' );

/**
 *   Remove <p> and <br/> from Contact Form 7
 */
add_filter( 'wpcf7_autop_or_not', '__return_false' );

/**
 *   Add excerpts support to pages in WordPres admin panel
 */
function wpexplorer_excerpt_length( $length ) {
    $length = 85;
    return $length;
}
add_filter( 'excerpt_length', 'wpexplorer_excerpt_length', PHP_INT_MAX );

/**
 *   Add thumbnails support to categories in WordPres
 */
if(function_exists('add_theme_support')) {
	add_theme_support('category-thumbnails');
}

?>