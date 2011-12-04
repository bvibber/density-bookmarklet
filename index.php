<?php

function trimLines($str) {
    $lines = explode("\n", $str);
    $lines = array_map('trim', $lines);
    return implode("\n", $lines);
}

$source = trimLines(file_get_contents('bookmarklet-sizes.js'));

$url = 'javascript:' . rawurlencode($source);
?>
<h1>Density bookmarklet</h1>

<h2>Right-click and bookmark this link:</h2>

<p><a href="<?php print htmlspecialchars($url) ?>">High-density images</a></p>

<h2>Or copy-paste this text into an edited bookmark:</h2>

<p>
<input value="<?php print htmlspecialchars($url) ?>">
</p>
