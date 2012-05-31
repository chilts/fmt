# fmt - Command Line Output Formatting #

## Example ##

```
var fmt = require('fmt');

fmt.sep();
fmt.title('The Truth about Cats');
fmt.field('Name', 'Felix');
fmt.field('Description', 'Regal. Mysterious with a wise look in her eyes.');
fmt.field('Legs', 4);
fmt.title('The Truth about Dogs');
fmt.field('Name', 'Fido');
fmt.field('Description', 'Bouncy. Out there, shiny, long brown coat.');
fmt.field('Legs', 2);
fmt.sep();
fmt.title('A List');
fmt.li('item 1');
fmt.li('the second item');
fmt.li('the third and final item');
fmt.separator();
```

Has the output:

```
===============================================================================
--- The Truth about Cats ------------------------------------------------------
Name                 : Felix
Description          : Regal. Mysterious with a wise look in her eyes.
Legs                 : 4
--- The Truth about Dogs ------------------------------------------------------
Name                 : Fido
Description          : Bouncy. Out there, shiny, long brown coat.
Legs                 : 2
===============================================================================
--- A List --------------------------------------------------------------------
* item 1
* the second item
* the third and final item
===============================================================================
```

## Usage ##

### fmt.separator() (alias: fmt.sep()) ###

Makes a double line on the screen which is 79 chars long.

### fmt.line() ###

Makes a line on the screen which is 79 chars long.

### fmt.title(title) ###

Renders a title with three '-', then the title, then more (until the 79th char).

### fmt.field(key, value) ###

Renders a line with a key and then the value, but with the key padded to 20 chars so that each field lines up.

(Ends)
