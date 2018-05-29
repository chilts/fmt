var fmt = require('../fmt.js');

fmt.arrow('Deploying ...');
fmt.indent('Found 20 files:');
fmt.spacer();

var files = [
    'filename1.txt',
    'doc.doc',
    'image.jpg',
    'document.pdf',
]
for(var i = 0; i < files.length; i++) {
    fmt.li(files[i], true);
}

fmt.spacer();

fmt.msg('Quote:', true);
fmt.quoteblock(
  [
    'Another quote by someone famous',
    'who lived in the past, but the',
    'quote is about the internet.',
    ' - Abe Lincoln',
  ].join('\n'),
  true
);

fmt.spacer();

fmt.arrow('Building ...');
fmt.indent('Package is 32,001 bytes.');

fmt.spacer();

fmt.arrow('Finished');
