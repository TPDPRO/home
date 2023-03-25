<?php
spl_autoload_register(function ($class) {
    $class_path = dirname(__FILE__) . '/php-markdown/' . str_replace('\\', DIRECTORY_SEPARATOR, ltrim($class, '\\')) . '.php';
    require $class_path;
});

use Michelf\MarkdownExtra;

function github_md_file($fs_path)
{
    $url_name = "https://raw.githubusercontent.com/TPDPRO/home/master/tpdpro/{$fs_path}";
    $ext = pathinfo($fs_path);

    // Extension must be set and the extension type must be .md
    if (!empty($ext['extension']) && $ext['extension'] === 'md') {
        $ch_session = curl_init();

        curl_setopt($ch_session, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch_session, CURLOPT_URL, $url_name);

        $result_url = curl_exec($ch_session);

        if (!empty($result_url)) {
            return "<section class='features section git-md' id='" . basename($url_name) . "'>\n" .
                MarkdownExtra::defaultTransform($result_url)
                . "\n</section>";
        }

        return "<--! No GitMD File found at {$fs_path} -->";
    }
    return "<--! File not of type md {$fs_path} -->";
}
