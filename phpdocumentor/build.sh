#!/bin/bash
# curl -O http://pear.php.net/go-pear.phar
# sudo php -d detect_unicode=0 go-pear.phar
# sudo pear channel-discover pear.phpdoc.org
# sudo php -d detect_unicode=0 go-pear.phar
git clone --depth 1 git@github.com:phpDocumentor/phpDocumentor2.git repo
phpdoc run -d ./repo -t ./doc --validate --ignore 'tests/*,vendor/*'
