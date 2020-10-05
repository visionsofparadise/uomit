# μomit

A typescript omit utility.

## Features

- returns an object with keys and values omitted from a given object
- type safe.
- smallest possible size and lightest cpu load

## Usage

### install

> npm i uomit

### import

> import uomit from 'uomit'

### use μomit

Give μomit an object and the desired keys to omit.

>     const object = {
>     	a: 'a',
>     	b: 'b',
>     	c: 'c'
>     };
>
>     const result = uomit(object, ['b']);
>
>     expect(result).toStrictEqual({
>     	a: 'a',
>     	c: 'c'
>     });
