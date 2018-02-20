---
title: Forms & Inputs
description: How forms and inputs are displayed on the OfferPad website.
---

<div class="op-example">
    <form>
        <div class="c-form-group">
            <label for="name">Name</label>
            <input type="text" class="c-form-control" name="name" id="name" placeholder="Enter your name" />
        </div>
        <div class="c-form-group">
            <label for="email">Email address</label>
            <input type="email" class="c-form-control" name="email" id="email" placeholder="Enter your email" />
        </div>
        <div class="c-form-group">
            <label for="password">Password</label>
            <input type="password" class="c-form-control" name="password" id="password" />
        </div>
        <div class="c-form-group">
            <label for="select">Select one</label>
            <select class="c-form-control" id="select" name="select">
                <option></option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </div>
        <div class="c-form-group">
            <div class="c-form-check">
                <label class="c-form-check__label">
                    <input type="checkbox" class="c-form-check__input" />
                    Check here
                </label>
            </div>
        </div>
        <button type="submit" class="btn btn--primary">Submit</button>
    </form>
</div>
{% highlight html %}
<form>
    <div class="c-form-group">
        <label for="name">Name</label>
        <input type="text" class="c-form-control" name="name" id="name" placeholder="Enter your name" />
    </div>
    <div class="c-form-group">
        <label for="email">Email address</label>
        <input type="email" class="c-form-control" name="email" id="email" placeholder="Enter your email" />
    </div>
    <div class="c-form-group">
        <label for="password">Password</label>
        <input type="password" class="c-form-control" name="password" id="password" />
    </div>
    <div class="c-form-group">
        <label for="select">Select one</label>
        <select class="c-form-control" id="select" name="select">
            <option></option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
    </div>
    <div class="c-form-group">
        <div class="c-form-check">
            <label class="c-form-check__label">
                <input type="checkbox" class="c-form-check__input" />
                Check here
            </label>
        </div>
    </div>
    <button type="submit" class="btn btn--primary">Submit</button>
</form>
{% endhighlight %}

## Disabled

<div class="op-example">
    <form>
        <fieldset disabled>
            <div class="c-form-group">
                <label for="disabledText">Name</label>
                <input type="text" class="c-form-control" name="disabledText" id="disabledText" placeholder="Enter your name" />
            </div>
            <div class="c-form-group">
                <label for="disabledSelect">Select one</label>
                <select class="c-form-control" id="disabledSelect" name="disabledSelect">
                    <option></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div class="c-form-check">
                <label class="c-form-check__label">
                    <input type="checkbox" class="c-form-check__input" />
                    Check here
                </label>
            </div>
            <button type="submit" class="btn btn--primary">Submit</button>
        </fieldset>
    </form>
</div>
{% highlight html %}
<form>
    <fieldset disabled>
        <div class="c-form-group">
            <label for="disabledText">Name</label>
            <input type="text" class="c-form-control" name="disabledText" id="disabledText" placeholder="Enter your name" />
        </div>
        <div class="c-form-group">
            <label for="disabledSelect">Select one</label>
            <select class="c-form-control" id="disabledSelect" name="disabledSelect">
                <option></option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </div>
        <div class="c-form-check">
            <label class="c-form-check__label">
                <input type="checkbox" class="c-form-check__input" />
                Check here
            </label>
        </div>
        <button type="submit" class="btn btn--primary">Submit</button>
    </fieldset>
</form>
{% endhighlight %}

## Inline form

<div class="op-example">
    <form class="c-form-inline">
        <label class="sr-only" for="inlineAddress">Home Address</label>
        <input type="text" class="c-form-control mr-s" id="inlineAddress" name="inlineAddress" placeholder="Enter your home address..." />
        <button type="submit" class="btn btn--primary">Continue</button>
    </form>
</div>
{% highlight html %}
<form class="c-form-inline">
    <label class="sr-only" for="inlineAddress">Home Address</label>
    <input type="text" class="c-form-control mr-s" id="inlineAddress" name="inlineAddress" placeholder="Enter your home address..." />
    <button type="submit" class="btn btn--primary">Continue</button>
</form>
{% endhighlight %}

## Custom checkboxes & radio buttons

<div class="op-example">
    <form>
        <h3>Free local move?</h3>
        <div class="c-form-group" role="radiogroup">
            <div class="c-form-check-icon">
                <input type="radio" name="freeLocalMove" id="freeLocalMoveYes" aria-hidden="true" />
                <label for="freeLocalMoveYes">
                    Yes, I need it!
                </label>
            </div>
            <div class="c-form-check-icon">
                <input type="radio" name="freeLocalMove" id="freeLocalMoveNo" aria-hidden="true" />
                <label for="freeLocalMoveNo">
                    Not needed
                </label>
            </div>
        </div>
        <h3>Available options</h3>
        <div class="c-form-group">
            <div class="c-form-check-icon">
                <input type="checkbox" name="availOptions" id="availOptions1" />
                <label for="availOptions1">
                    Option A
                </label>
            </div>
            <div class="c-form-check-icon">
                <input type="checkbox" name="availOptions" id="availOptions2" />
                <label for="availOptions2">
                    Option B
                </label>
            </div>
            <div class="c-form-check-icon">
                <input type="checkbox" name="availOptions" id="availOptions3" />
                <label for="availOptions3">
                    Option C
                </label>
            </div>
        </div>
    </form>
</div>

{% highlight html %}
<form>
    <h3>Free local move?</h3>
    <div class="c-form-group">
        <div class="c-form-check-icon">
            <input type="radio" name="freeLocalMove" id="freeLocalMoveYes"/>
            <label for="freeLocalMoveYes">
                Yes, I need it!
            </label>
        </div>
        <div class="c-form-check-icon">
            <input type="radio" name="freeLocalMove" id="freeLocalMoveNo"/>
            <label for="freeLocalMoveNo">
                Not needed
            </label>
        </div>
    </div>
    <h3>Available options</h3>
    <div class="c-form-group">
        <div class="c-form-check-icon">
            <input type="checkbox" name="availOptions" id="availOptions1" />
            <label for="availOptions1">
                Option A
            </label>
        </div>
        <div class="c-form-check-icon">
            <input type="checkbox" name="availOptions" id="availOptions2" />
            <label for="availOptions2">
                Option B
            </label>
        </div>
        <div class="c-form-check-icon">
            <input type="checkbox" name="availOptions" id="availOptions3" />
            <label for="availOptions3">
                Option C
            </label>
        </div>
    </div>
</form>
{% endhighlight %}
