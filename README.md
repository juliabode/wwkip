# wwkip

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.12.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.


## Host File

<VirtualHost 127.0.0.6:80>
    ##ServerAdmin webmaster@dummy-host2.example.com
    DocumentRoot "C:/xampp/htdocs/wwkip/app"
    Alias /bower_components C:/xampp/htdocs/wwkip/bower_components
    Alias /styles C:/xampp/htdocs/wwkip/.tmp/styles
    <Directory "C:/xampp/htdocs/wwkip/app">
    </Directory>
    ##ErrorLog "logs/dummy-host2.example.com-error.log"
    ##CustomLog "logs/dummy-host2.example.com-access.log" common
</VirtualHost>