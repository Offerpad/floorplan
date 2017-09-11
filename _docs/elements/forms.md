---
title: Forms & Inputs
description: How forms and inputs are displayed on the OfferPad website.
---

{% example html %}
<form>
    <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" name="name" id="name" placeholder="Enter your name" />
    </div>
    <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" name="email" id="email" placeholder="Enter your email" />
    </div>
    <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" name="password" id="password" />
    </div>
    <div class="form-group">
        <label for="select">Select one</label>
        <select class="form-control" id="select" name="select">
            <option></option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
    </div>
    <div class="form-group">
        <div class="form-check">
            <label class="form-check__label">
                <input type="checkbox" class="form-check__input" />
                Check here
            </label>
        </div>
    </div>
    <button type="submit" class="btn btn--primary">Submit</button>
</form>
{% endexample %}

## Disabled

{% example html %}
<form>
    <fieldset disabled>
        <div class="form-group">
            <label for="disabledText">Name</label>
            <input type="text" class="form-control" name="disabledText" id="disabledText" placeholder="Enter your name" />
        </div>
        <div class="form-group">
            <label for="disabledSelect">Select one</label>
            <select class="form-control" id="disabledSelect" name="disabledSelect">
                <option></option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </div>
        <div class="form-check">
            <label class="form-check__label">
                <input type="checkbox" class="form-check__input" />
                Check here
            </label>
        </div>
        <button type="submit" class="btn btn--primary">Submit</button>
    </fieldset>
</form>
{% endexample %}

## Inline form

{% example html %}
<form class="form-inline">
    <label class="sr-only" for="inlineAddress">Home Address</label>
    <input type="text" class="form-control mr-s" id="inlineAddress" name="inlineAddress" placeholder="Enter your home address..." />
    <button type="submit" class="btn btn--primary">Continue</button>
</form>
{% endexample %}
