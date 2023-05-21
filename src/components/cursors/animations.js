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

  startMoveState = (e) => {
    this.endX = e.pageX;
    this.endY = e.pageY;
    moveElTo(this.dot, [this.endX, this.endY]);

    if (this.startAgain === true) {
      this.startAgain = false;
      this.animation(this.element);
    }
  };

  animation = (el, delay = [0, 0]) => {
    this._x += (this.endX - this._x) / this.delay;
    this._y += (this.endY - this._y) / this.delay;

    moveElTo(el, [this._x + delay[0], this._y + delay[1]]);

    let id = requestAnimationFrame(() => this.animation(el, delay));
    // * it's something better than setInterval()
    if (Math.round(this._x) === this.endX && this.endX !== 0) {
      cancelAnimationFrame(id);
      this.startAgain = true;
    }
  };

  startLeaveState = () => {
    hide(this.dot, this.element);
  };
}

export class RedCircleAnimation extends CursorAnimation {
  constructor(dot, element) {
    super();
    this.dot = dot;
    this.element = element;
  }

  startEnterState = () => {
    show(this.dot, this.element);
    this.animation(this.element);
  };

  startUpState = () => {
    addStyleTo(this.element, "background-color", "#ff00001a");
  };
  startDownState = () => {
    addStyleTo(this.element, "background-color", "#dc2626");
  };
}

export class BatmanAnimation extends CursorAnimation {
  constructor(dot, element, batman) {
    super();
    this.dot = dot;
    this.element = element;
    this.batman = batman;
  }

  startEnterState = () => {
    show(this.dot, this.element);
    this.batman.setAttribute("src", "/imgs/source-cutout.png");
    this.animation(this.element);
  };

  startClickState = () => {
    if (this.batman.getAttribute("src") === "/imgs/source-cutout.png") {
      this.batman.setAttribute("src", "/imgs/source.gif");
      setTimeout(() => {
        this.batman.setAttribute("src", "/imgs/source-cutout.png");
      }, 6000);
    }
  };

  startLeaveState = () => {
    hide(this.dot, this.element);
  };
}

export class CloudAnimation extends CursorAnimation {
  constructor(lighteningCloud, cuteCloud) {
    super();
    this.lighteningCloud = lighteningCloud;
    this.cuteCloud = cuteCloud;
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

  isElCute = (el) => {
    if (el.getAttribute("data-cute")) {
      return true;
    } else {
      return false;
    }
  };

  startCuteCloudState = () => {
    this.cuteCloud.setAttribute("data-show", "true");
    this.lighteningCloud.setAttribute("data-show", "false");
    moveElTo(this.lighteningCloud, [-150, 0]);
  };

  startLighteningCloudState = () => {
    this.lighteningCloud.setAttribute("data-show", "true");
    this.cuteCloud.setAttribute("data-show", "false");
    moveElTo(this.cuteCloud, [-150, 0]);
  };

  startEnterState = () => {
    moveElTo(this.lighteningCloud, [this.endX + 17, this.endY + -150]);
    this.animation(this.lighteningCloud, [17, -150]);
  };

  startMoveState = (e) => {
    this.endX = e.pageX;
    this.endY = e.pageY;
    if (e.target.getAttribute("data-cute")) {
      if (this.cuteCloud.getAttribute("data-show") === "false") {
        this.startCuteCloudState();
        this.lighteningCloud.setAttribute("src", "imgs/cuteCloud.gif");
      }
      this.cloud = this.cuteCloud;
    } else {
      if (this.lighteningCloud.getAttribute("data-show") === "false") {
        this.startLighteningCloudState();
        this.lighteningCloud.setAttribute("src", "imgs/lightening.png");
      }
    }
    if (this.startAgain === true) {
      this.startAgain = false;
      this.animation(this.lighteningCloud, [17, -150]);
    }
  };

  startClickState = () => {
    if (
      this.lighteningCloud.getAttribute("data-show") === "true" &&
      this.lighteningCloud.getAttribute("src").includes("lightening.png")
    ) {
      this.lighteningCloud.setAttribute("src", "imgs/lightening.gif");

      setTimeout(() => {
        this.generateBurnMark();
        this.lighteningCloud.setAttribute("src", "imgs/lightening.png");
      }, 1000);
    }
  };

  startLeaveState = () => {
    this.lighteningCloud.setAttribute("data-show", "false");

    moveElTo(this.lighteningCloud, [-150, 0]);
    this.lighteningCloud.setAttribute("data-show", "false");

    moveElTo(this.cuteCloud, [-150, 0]);
  };
}
