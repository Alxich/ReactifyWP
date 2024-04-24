<?php
/**
 * Register all necessary files for pages like scripts styles etc.
 * Do not forget to initial that in fucntions.php (root directory)
 */

/**
 * Enqueue scripts and styles.
 */
function reactifywp_scripts()
{
    wp_enqueue_style( 'reactifywp-style', get_stylesheet_uri(), array(), _ReactifyWP_VERSION );
    wp_enqueue_script( 'reactifywp-scripts', get_template_directory_uri() . '/source/dist/js/app.js', array(), _ReactifyWP_VERSION, true );

    if ( is_singular() && comments_open() && get_option( 'thread_comments' ) )
    {

        wp_enqueue_script( 'comment-reply' );

    }

}

add_action('wp_enqueue_scripts', 'reactifywp_scripts');

?>