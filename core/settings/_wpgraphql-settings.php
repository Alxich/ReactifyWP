<?php

/**
 * If WPGraphQL is not active, show the admin notice
 */
function init()
{
    /**
     * If WPGraphQL is not active, show the admin notice
     */
    if (!class_exists('WPGraphQL')) {
        add_action('admin_init', __NAMESPACE__ . '\show_admin_notice');
    }
}

add_action('init', __NAMESPACE__ . '\init');

/**
 * Show admin notice to admins if this plugin is active but either ACF and/or WPGraphQL
 * are not active
 *
 * @return bool
 */

 function show_admin_notice()
 {
     /**
      * For users with lower capabilities, don't show the notice
      */
     if (!current_user_can('manage_options')) {
         return false;
     }
 
     add_action(
         'admin_notices',
         function () {
 ?>
         <div class="error notice">
             <p><?php _e(
                     'WPGraphQL must be active for ReactifyWP to work',
                     'cactus-gqltc'
                 ); ?></p>
         </div>
 <?php
         }
     );
 
     return true;
 } 
