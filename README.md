#jquery.appendAt.js

This jQuery plugin lets you append content to the DOM at a specific position amongst a node's children, or somewhere at random.  This function is 0-indexed.

##appendAt()
    $('ul').appendAt('<li>NEW!</li>', 3); // nb: 0-indexed!

##appendAtRandom()
    $('ul').appendAtRandom('<li>NEW</li>'); // nb: each insertion is random if there are multiple <ul>s

##Example
[Example on JSFiddle](http://jsfiddle.net/pete_otaqui/MvWPh/2/)

Given this example HTML:

```html
<ul id="list">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
</ul>
<ul id="list">
    <li>A</li>
    <li>B</li>
    <li>C</li>
</ul>
```

You can insert some content at a specific place:

```javascript
$('ul').appendAt('<li>NEW!</li>', 2);
```

Will result in:

```html
<ul id="list">
    <li>One</li>
    <li>Two</li>
    <li>NEW!</li>
    <li>Three</li>
</ul>
<ul id="list">
    <li>A</li>
    <li>B</li>
    <li>NEW!</li>
    <li>C</li>
</ul>
```

Extra bonus - you can insert content at random.  Each insertion will be at a possibly different random position.  This code:

```javascript
$('ul').appendAtRandom('<li>NEW!</li>');
```

Will result in something like:

```html
<ul id="list-1">
    <li>NEW!</li>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
</ul>
<ul id="list-2">
    <li>A</li>
    <li>B</li>
    <li>C</li>
    <li>NEW!</li>
</ul>
```


