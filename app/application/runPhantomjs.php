<?php
echo exec('phantomjs rasterize.js http://127.0.0.6/#/print test.pdf A4', $out, $return);

$url = "application/test.pdf";
echo $url;