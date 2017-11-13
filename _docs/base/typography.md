---
title: Typography
description: Documentation and examples for typography used on the OfferPad website.
---

## Overview

Typography is a critical part of web design. The goals for text are to create a harmonious system that follows consistent rules, while also keeping considerations like accessibility in mind.

- By default, we start with a base font size of 16px. This is the browser default. All other font sizes, and really, all sizes in general, are based on this value. This is critical for accessibility. When a user changes their browser default to something else, the entire website will intelligently scale with it. To that end, the site's sizing uses the `rem` unit.
- To achieve this goal, we use a framework called [Typey](https://github.com/jptaranto/typey){:target="_blank"}. Typey provides the math to create a font system that is _rhythmic_, where font sizes and line-heights follow a harmonious pattern. As a Sass framework, Typey also provides us with mixins and functions to carry this approach throughout the site. For example, you can use a spacing mixin like `@include margin(1 0)` to add the exact amount of vertical spacing around an element that follows the pattern established by Typey.

## Font stacks

OfferPad uses a sans-serif font stack for most type, with the exception being code and other elements where a monospace font stack is more appropriate.

The typeface we use specifically is Roboto.

### Sans-serif

{% highlight css %}
font-family: "Roboto", "Helvetica Neue", Helvetica, sans-serif;
{% endhighlight %}

### Monospace

{% highlight css %}
font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
{% endhighlight %}

## Headings

You can apply these styles to any text element by using the appropriate matching class. For example, use the class `.h2` to emulate an `h2` style.

<div class="op-example">
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
</div>
{% highlight html %}
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
{% endhighlight %}

### Hero headings

These styles double the size of each heading class inside hero units and other similar patterns, for pronounced effects. Be mindful of their use in small devices.

<div class="op-example">
    <h1 class="hero-heading-1">Heading 1</h1>
    <h2 class="hero-heading-2">Heading 2</h2>
    <h3 class="hero-heading-3">Heading 3</h3>
    <h4 class="hero-heading-4">Heading 4</h4>
    <h5 class="hero-heading-5">Heading 5</h5>
    <h6 class="hero-heading-6">Heading 6</h6>
</div>
{% highlight html %}
<h1 class="display-1">Display 1</h1>
<h2 class="display-2">Display 2</h2>
<h3 class="display-3">Display 3</h3>
<h4 class="display-4">Display 4</h4>
<h5 class="display-5">Display 5</h5>
<h6 class="display-6">Display 6</h6>
{% endhighlight %}

## Lead paragraph

Add the `.lead` class to a paragraph to help it stand out, especially in introductory contexts.

<div class="op-example">
    <p class="lead">Hey, I'm a lead paragraph. Check me out!</p>
</div>
{% highlight html %}
<p class="lead">Hey, I'm a lead paragraph. Check me out!</p>
{% endhighlight %}

## Inline text

<div class="op-example">
    <p>You can use the mark tag to <mark>highlight</mark> text.</p>
    <p><del>This line of text is meant to be treated as deleted text.</del></p>
    <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
    <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
    <p><u>This line of text will render as underlined</u></p>
    <p><small>This line of text is meant to be treated as fine print.</small></p>
    <p><strong>This line rendered as bold text.</strong></p>
    <p><em>This line rendered as italicized text.</em></p>
    <p>Here is some <code>inline code</code>.</p>
</div>
{% highlight html %}
<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
<p><u>This line of text will render as underlined</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as italicized text.</em></p>
<p>Here is some <code>inline code</code>.</p>
{% endhighlight %}

## Blockquotes

As blockquotes can have additional uses besides their common form in text content, use `.blockquote` as a class for complete styling. It will increase the font size of child elements and add a border.

Add citations by wrapping them in a `<footer>` with class `.blockquote__footer`, and wrapping the citation source name with `<cite>`.

<div class="op-example">
    <blockquote class="blockquote">
        <p>Mollit do ipsum nisi eiusmod veniam dolore amet est amet officia laboris id irure nisi. Deserunt enim velit veniam velit qui eiusmod esse elit non do Lorem in anim.</p>
        <footer class="blockquote__footer">A person, <cite title="Title">Title</cite></footer>
    </blockquote>
</div>
{% highlight html %}
<blockquote class="blockquote">
    <p>Mollit do ipsum nisi eiusmod veniam dolore amet est amet officia laboris id irure nisi. Deserunt enim velit veniam velit qui eiusmod esse elit non do Lorem in anim.</p>
    <footer class="blockquote__footer">A person, <cite title="Title">Title</cite></footer>
</blockquote>
{% endhighlight %}

## Lists

There are four types of lists available: unstyled, unordered, ordered, and description (definition) lists.

### Unstyled lists

Unstyled lists, borrowed from Bootstrap, use the `.list--unstyled` class to remove padding and `list-style` from a list. This styling only applies to immediate child list items, so you'll need to add the class to nested lists as well.

<div class="op-example">
    <ul class="list--unstyled">
        <li>List item 1</li>
        <li>List item 2
            <ul class="list--unstyled">
                <li>List item A</li>
                <li>List item B</li>
            </ul>
        </li>
        <li>List item 3</li>
    </ul>
</div>
{% highlight html %}
<ul class="list--unstyled">
    <li>List item 1</li>
    <li>List item 2
        <ul class="list--unstyled">
            <li>List item A</li>
            <li>List item B</li>
        </ul>
    </li>
    <li>List item 3</li>
</ul>
{% endhighlight %}

### Unordered lists

<div class="op-example">
    <ul>
        <li>List item 1</li>
        <li>List item 2
            <ul>
                <li>List item A</li>
                <li>List item B</li>
            </ul>
        </li>
        <li>List item 3</li>
    </ul>
</div>
{% highlight html %}
<ul>
    <li>List item 1</li>
    <li>List item 2
        <ul>
            <li>List item A</li>
            <li>List item B</li>
        </ul>
    </li>
    <li>List item 3</li>
</ul>
{% endhighlight %}

### Ordered lists

<div class="op-example">
    <ol>
        <li>List item 1</li>
        <li>List item 2
            <ol>
                <li>List item A</li>
                <li>List item B</li>
            </ol>
        </li>
        <li>List item 3</li>
    </ol>
</div>
{% highlight html %}
<ol>
    <li>List item 1</li>
    <li>List item 2
        <ol>
            <li>List item A</li>
            <li>List item B</li>
        </ol>
    </li>
    <li>List item 3</li>
</ol>
{% endhighlight %}

### Descripton lists

<div class="op-example">
    <dl>
        <dt>Definition title 1</dt>
        <dd>Definition item 1</dd>
        <dt>Definition title 2</dt>
        <dd>Definition item 2</dd>
    </dl>
</div>
{% highlight html %}
<dl>
    <dt>Definition title 1</dt>
    <dd>Definition item 1</dd>
    <dt>Definition title 2</dt>
    <dd>Definition item 2</dd>
</dl>
{% endhighlight %}
