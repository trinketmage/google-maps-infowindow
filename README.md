# Google maps InfoWindow

This library is design to easily add InfoWindow on Google Maps using html and CSS.
It supports by default CSS `animation` and `transition` for animation, but also accepts user controlled animations through any Tween library.
Transition behavior is highly inspired by @vuejs/transition.

## Examples
* [basic](https://codepen.io/trinketmage/full/ZMvrLM)
* [basic animated](https://codepen.io/trinketmage/full/KxZQvR)
* [{{ mustache }}](https://codepen.io/trinketmage/full/wEpmKx/)
* [all examples](https://codepen.io/collection/DxdgML/)

## Dependencies
* [Google Maps](https://developers.google.com/maps/documentation/javascript/tutorial)

## Usage

### Setting

```html
<div id="popup" class="infowindow-content">
  <p class="close-cta">01011</p>
</div>
<div id="map"></div>
```
```js
var map
var center = {lat: 48.864716, lng: 2.349014}
map = new google.maps.Map(document.getElementById('map'), {
  center: center,
  zoom: 13,
  styles: mapStyle
});
var marker = new google.maps.Marker({
  position: center,
  map: map
})
var element = document.body.querySelector('#popup')
```

### API
```js
new GoogleMapsInfowindow({
  marker: marker,
  content: element
})
```
