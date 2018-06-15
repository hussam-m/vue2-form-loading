# vue2-form-loading

## Installation

```bash
npm install --save vue2-form-loading
```

## Usage
```js
import Vue from 'vue'
import formLoading from 'vue2-form-loading'
Vue.use(formLoading)
```

#### Basic form

```html
<form v-loading action="..."  method="post">
  <input type="text" name="" value="">
  <input type="submit" value="Send">
</form>
```

#### With custom loading text

```html
<form v-loading="'loading...'" action="..."  method="post">
  <input type="text" name="" value="">
  <input type="submit" value="Send">
</form>
```

#### Using Bulma

```html
<form v-loading="{class:'is-loading'}" action="..."  method="...">
    .
    .
    .
    <button type="submit" class="button is-primary is-fullwidth">Send</button>
</form>
```
