import { moveElTo, show, hide, addStyleTo } from "./helpers";

class CursorAnimation {
  constructor() {
    this.endX = 0;
    this.endY = 0;
    this.delay = 8;
    this.startAgain = false;
    this._x = 0;
    this._y = 0;
  }

  startEnterState = (dot, element, offset = [0, 0]) => {
    show(dot, element);
    this.animation(element, offset);
  };

  startMoveState = (e, dot, element, offset = [0, 0]) => {
    this.endX = e.pageX;
    this.endY = e.pageY;
    moveElTo(dot, [this.endX, this.endY]);

    if (this.startAgain === true) {
      this.startAgain = false;
      this.animation(element, offset);
    }
  };

  animation = (el, offset = [0, 0]) => {
    this._x += (this.endX - this._x) / this.delay;
    this._y += (this.endY - this._y) / this.delay;

    moveElTo(el, [this._x + offset[0], this._y + offset[1]]);

    let id = requestAnimationFrame(() => this.animation(el, offset));
    // * it's something better than setInterval()
    if (Math.round(this._x) === this.endX && this.endX !== 0) {
      cancelAnimationFrame(id);
      this.startAgain = true;
    }
  };

  startLeaveState = (...elements) => {
    hide(...elements);
  };
}

export class RedCircleAnimation extends CursorAnimation {
  constructor(dot, element) {
    super();
    this.dot = dot;
    this.element = element;
  }

  startUpState = () => {
    addStyleTo(this.element, "background-color", "#ff00001a");
  };
  startDownState = () => {
    addStyleTo(this.element, "background-color", "#dc2626");
  };

  startOverState = (e) => {
    if (e.target.nodeName === "BUTTON") {
      this.element.style.transform = "translate(-50%, -50%) scale(1.5)";
    } else {
      this.element.style.transform = "translate(-50%, -50%) scale(1)";
    }
  };
}

export class BatmanAnimation extends CursorAnimation {
  constructor(dot, element, batman) {
    super();
    this.dot = dot;
    this.element = element;
    this.batman = batman;
  }

  startClickState = () => {
    if (this.batman.getAttribute("src") === "/imgs/source-cutout.png") {
      this.batman.setAttribute("src", "/imgs/source.gif");
      setTimeout(() => {
        this.batman.setAttribute("src", "/imgs/source-cutout.png");
      }, 6000);
    }
  };
}

export class CloudAnimation extends CursorAnimation {
  constructor(dot, lighteningCloud) {
    super();
    this.lighteningCloud = lighteningCloud;
    this.dot = dot;
  }

  generateBurnMark = () => {
    let img = document.createElement("img");
    img.setAttribute("src", "/imgs/burnMark.png");
    img.setAttribute(
      "style",
      `left: ${this._x + 53}px; top:${
        this._y + -49
      }px; position: absolute; width: 20px;`
    );
    document.body.append(img);
  };

  startClickState = () => {
    if (this.lighteningCloud.getAttribute("src").includes("lightening.png")) {
      this.lighteningCloud.setAttribute("src", "imgs/lightening.gif");

      setTimeout(() => {
        this.generateBurnMark();
        this.lighteningCloud.setAttribute("src", "imgs/lightening.png");
      }, 1000);
    }
  };

  startOverState = (e) => {
    if (e.target.nodeName === "BUTTON") {
      hide(this.dot);
      this.lighteningCloud.setAttribute("src", "imgs/cuteCloud.gif");
    } else {
      show(this.dot);
      this.lighteningCloud.setAttribute("src", "imgs/lightening.png");
    }
  };
}
