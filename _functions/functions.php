<?php

/**
 * @param $string
 * @return string
 * 
 *  But : sécuriser une chaine de caractères
 */
function str_secur($string) {
    return trim(htmlspecialchars($string));
}