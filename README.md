# Monster-Library-Popup

this popup is very good becaus I made it by easy code by `HTML` `SCSS` `JS`

## What is this popup ?

[Popup](https://ibb.co/G7NFkSR)

## Links

<details>
<summary>Links</summary>
<p>

```html
<link rel="stylesheet" href="style.css" />
<script defer src="main.js"></script>
```

</p>
</details>

## HTML

<details>
<summary>HTML</summary>
<p>

```html
<div class="popup-grandfather" id="popupGrandfather">
  <div class="popup" id="popup">
    <div class="popup-header-parent">
      <p class="popup-title">Popup Title</p>
    </div>
    <div class="popup-body-parent">
      <p class="popup-body-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas omnis
        illum minus magni quia libero blanditiis optio eaque recusandae. Totam
        dignissimos sapiente dolorem voluptatum optio itaque, corporis doloribus
        sint! Quis.
      </p>
    </div>
    <div class="popup-footer-parent">
      <div class="close-btn">
        <a onclick="closePopup()" href="#"><span>Close</span></a>
      </div>
    </div>
  </div>
</div>
<button onclick="openPopup()" class="open-btn">Open Popup</button>
```

</p>
</details>

## SCSS

<details>
<summary>SCSS</summary>
<p>

```scss
// vars
$mainColor: #fe8a71;
$secondaryColor: rgba(0, 0, 0, 0.418);
$darkColor: #4a4e4d;
$white: #fff;
$radius: 8px;
$fontSize: 20px;
$mainSize: 10px;

// styles
.popup-grandfather {
  z-index: 2000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
  justify-content: center;
  transition: all 0.3s;

  align-items: center;
  background-color: $secondaryColor;
  .popup {
    background-color: $darkColor;
    color: $white;
    width: 55vw;
    transition: all 0.3s;
    padding: $mainSize;
    border-radius: $radius;

    transform: scale(0) !important;
    font-family: sans-serif;
    .popup-header-parent {
      padding: 0 $mainSize - 5;
      text-align: center;
      .popup-title {
        font-size: $fontSize + 3;
      }
    }

    .popup-body-parent {
      margin: $mainSize 0;
      .popup-body-text {
        font-size: $fontSize - 5;
        padding: 0 $mainSize;
      }
    }

    .popup-footer-parent {
      margin-top: $mainSize * 4;
      margin-bottom: $mainSize;
      .close-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      .close-btn a {
        text-decoration: none;
        border: 2px solid #010100;
        padding: 15px 45px;
        color: #000;
        text-transform: uppercase;
        letter-spacing: 2px;
        position: relative;
        display: inline-block;
      }

      span {
        position: relative;
        /* z-index coz when we put bg to before and after this span text will not be visible */
        z-index: 3;
      }

      /* Button 1 styles */

      .close-btn a::before {
        content: "";
        position: absolute;
        top: 5px;
        left: -2px;
        width: calc(100% + 6px);
        /*100% plus double the times left values*/
        height: calc(100% - 10px);
        background-color: $mainColor;
        transition: all 0.5s ease-in-out;
        transform: scaleY(1);
      }

      .close-btn a:hover::before,
      .btn-2 a:hover::before {
        transform: scaleY(0);
      }

      .close-btn a::after {
        content: "";
        position: absolute;
        left: 5px;
        top: -5px;
        width: calc(100% - 10px);
        /*100% plus double the times left values*/
        height: calc(100% + 10px);
        background-color: $mainColor;
        transition: all 0.5s ease-in-out;
        transform: scaleX(1);
      }

      .close-btn a:hover::after {
        transform: scaleX(0);
      }
    }
  }
}
// open-btn

.open-btn {
  padding: 10px 25px;
  background-color: $mainColor;
  border: none;
  border-radius: $radius;
  cursor: pointer;
  transition: 0.3s;
}

.open-btn:hover {
  background-color: transparent;
  border: 1px solid $mainColor;
}
```

</p>
</details>

## JavaScript

<details>
<summary>JS</summary>
<p>

````js
// Zoom Effect
const closePopup = () => {
  popup.style.transform = "scale(0)";
  setTimeout(() => {
    popupGrandfather.style.display = "none";
  }, 300);
};

const openPopup = () => {
  popupGrandfather.style.display = "flex";

  setTimeout(() => {
    popup.style.setProperty("transform", "scale(1)", "important");
  }, 200);
};
```

</p>
</details>
````
