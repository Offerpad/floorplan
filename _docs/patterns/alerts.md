---
title: Alerts
description: Alert indicators and banners
---

## Basic banners

<div class="op-example">
    <div class="c-alert c-alert--neutral">
        This is an informational message.
    </div>
    <div class="c-alert c-alert--success">
        This is a positive alert.
    </div>
    <div class="c-alert c-alert--warning">
        This is a high-importance, low-urgency alert.
    </div>
    <div class="c-alert c-alert--danger">
        This is a high-importance, high-urgency alert.
    </div>
    <div class="c-alert c-alert--special">
        This is a branded alert.
    </div>
</div>
{% highlight html %}
<div class="c-alert c-alert--neutral">
    This is an informational message.
</div>
<div class="c-alert c-alert--success">
    This is a positive alert.
</div>
<div class="c-alert c-alert--warning">
    This is a high-importance, low-urgency alert.
</div>
<div class="c-alert c-alert--danger">
    This is a high-importance, high-urgency alert.
</div>
<div class="c-alert c-alert--special">
    This is a branded alert.
</div>
{% endhighlight %}

## Multiple elements

<div class="op-example">
    <div class="c-alert c-alert--neutral">
        <p><strong>We're working on renewing your offer.</strong></p>
        <p>The OfferPad team is working on an offer renewal. We'll send you an email when it's ready.</p>
    </div>
    <div class="c-alert c-alert--success">
        <p><strong>Congratulations!</strong> You've accepted our offer.</p>
    </div>
    <div class="c-alert c-alert--warning">
        <p><strong>This offer is expired</strong>.</p>
        <p>Renewing your expired offer is simple: just click below and get a new offer from us in your inbox.</p>
        <button class="c-button c-button--primary u-margin-b-m">Renew offer</button>
    </div>
    <div class="c-alert c-alert--danger">
        <p><strong>Oh no!</strong> There was an issue processing your offer renewal.</p>
        <p>Please contact us to renew your offer.</p>
    </div>
    <div class="c-alert c-alert--special">
        <h3 class="c-alert__heading u-text-lowercase">Don't forget about our Free Local Move</h3>
        <p>Moving to a new home within 50 miles of this one? Learn more about our Free Local Move program.</p>
        <button class="c-button c-button--primary u-margin-b-m">See details</button>
    </div>
</div>
{% highlight html %}
<div class="c-alert c-alert--neutral">
    <p><strong>We're working on renewing your offer.</strong></p>
    <p>The OfferPad team is working on an offer renewal. We'll send you an email when it's ready.</p>
</div>
<div class="c-alert c-alert--success">
    <p><strong>Congratulations!</strong> You've accepted our offer.</p
</div>
<div class="c-alert c-alert--warning">
    <p><strong>This offer is expired</strong>.</p>
    <p>Renewing your expired offer is simple: just click below and get a new offer from us in your inbox.</p>
    <button class="c-button c-button--primary u-margin-b-m">Renew offer</button>
</div>
<div class="c-alert c-alert--danger">
    <p><strong>Oh no!</strong> There was an issue processing your offer renewal.</p>
    <p>Please contact us to renew your offer.</p>
</div>
<div class="c-alert c-alert--special">
    <h3 class="c-alert__heading u-text-lowercase">Don't forget about our Free Local Move</h3>
    <p>Moving to a new home within 50 miles of this one? Learn more about our Free Local Move program.</p>
    <button class="c-button c-button--primary u-margin-b-m">See details</button>
</div>
{% endhighlight %}
