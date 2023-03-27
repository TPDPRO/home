export default class RotateControl extends THREE.EventDispatcher {
  constructor(object, domElement) {
    super();

    this.object = object;
    this.domElement = domElement;
    this.enabled = true;

    // Create a button element for the control
    this.container = document.createElement("div");
    this.container.classList.add("editor-rotate-container");

    for (let i = 0; i < this.#directionKeys.length; i++) {
      this.button = document.createElement("button");
      this.button.classList.add("editor-rotate-control-button");
      this.button.setAttribute("data-rotate-direction", this.directionKeys[i]);

      if (this.#fa_icon_check()) {
        this.icon = document.createElement("i");
        this.icon.classList.add(
          "fa fa-chevron-circle-up editor-rotate-control-button-icon"
        );
        this.button.appendChild(this.icon);
      } else {
        // No Icon Set
        this.icon = document.createElement("div");
        this.icon.classList.add("editor-rotate-control-button-icon");
        this.icon.innerText("editor-rotate-control-button-icon");
        this.button.appendChild(this.icon);
        console.warn("FontAwesome not detected!");
      }

      // Bind the event push to dom
      this.button.addEventListener("click", this.onButtonClick.bind(this));
      this.container.appendChild(this.button);
    }
  }

  #directionKeysXY = ["-xy", "y", "yx", "x", "menu", "x-y", "-y", "-x-y", "-x"];
  #directionKeys_XZ = ["-xz", "z", "zx", "x", "menu", "x-z", "-z", "-x-z", "-x"];


  menu = {
    orientation: "-xy",
    available_orientations: ["-xy"],
    s: 1,
  };
  onButtonClick(event) {
    event.preventDefault();
    // Rotate the object by 90 degrees around the y-axis
    this.object.rotateY(Math.PI / 360);
    // Dispatch a custom event to signal that the object has been rotated
    this.dispatchEvent({ type: "rotate", angle: Math.PI / 2 });
  }

  generatePatterns() {
    const axes = ["-xy", "-yx", "-xz", "-zx", "-yz", "-zy"];
    const directions = ["y", "yx", "x", "-y", "-x-y", "-x"];
    const patterns = [];
  
    axes.forEach((axis) => {
      const pattern = [];
      pattern.push(axis);
      pattern.push("y");
      pattern.push("yx");
      pattern.push("x");
      pattern.push("menu");
      pattern.push("x-y");
      pattern.push("-y");
      pattern.push("-x-y");
      pattern.push("-x");
  
      let startIndex = 1;
      let endIndex = 2;
      let current = "yx";
  
      while (endIndex < 8) {
        for (let i = startIndex; i <= endIndex; i++) {
          pattern[i] = current;
          current = getNextDirection(current, directions);
        }
  
        current = getNextDirection(current, directions);
        startIndex += 2;
        endIndex += 2;
      }
  
      patterns.push(pattern);
    });
  
    return patterns;
  }
  
  getNextDirection(current, directions) {
    const currentIndex = directions.indexOf(current);
  
    if (currentIndex === directions.length - 1) {
      return directions[0];
    } else {
      return directions[currentIndex + 1];
    }
  }
  

  #fa_icon_check() {
    let span = document.createElement("span");

    span.className = "fa";
    span.style.display = "none";
    document.body.insertBefore(span, document.body.firstChild);

    function css(element, property) {
      return window.getComputedStyle(element, null).getPropertyValue(property);
    }

    if (css(span, "font-family") !== "FontAwesome") {
      return false;
    }
    return true;
  }
}
