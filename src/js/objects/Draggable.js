import { Cell } from "./Cell";

export class Draggable {

  image = new Image();

  pieceId = '';
  
  lastX = -1;
  lastY = -1;

  startX = -1;
  startY = -1;

  constructor (dragFromElements, dragTo, callBack) {
    
    this.dragFromElements = dragFromElements;
    this.dragTo = dragTo;
    this.callBack = callBack;
    
    this.image.id = 'draggable-image';
    this.image.draggable = false;
    this.image.style.imageRendering = 'pixelated';
    this.image.style.position = 'fixed';
    document.body.appendChild(this.image);
    
    this.hideImage();
    
    dragFromElements.forEach((piece, index) => {
      piece.addEventListener('mousedown', this.dragStart);
      piece.addEventListener('touchstart', this.touchStart);

      document.addEventListener('touchmove', this.touchMove);
      document.addEventListener('mousemove', this.dragMove);

      document.addEventListener('touchup', this.dragStop);
      document.addEventListener('touchend', this.dragStop);
      document.addEventListener('touchcancel', this.dragStop);

      document.addEventListener('mouseleave', this.dragStop);
      document.addEventListener('mouseup', this.dragStop);
    });
  }

  touchStart = (event) => {
    event.stopPropagation();
    event.preventDefault();
    const [touch] = event.touches;
    if (!('pageX' in event)) {
      event.pageX = touch.pageX;
      event.pageY = touch.pageY;
    }
    this.dragStart(event);
  }
  dragStart = (event) => {
    if (this.dragging) {
      return
    }
    this.pieceId = event.target.id;
    this.callBack('drag', { pieceId: this.pieceId });

    this.image.src = event.target.src;
    this.showImage();

    const { width } = this.dragTo.getBoundingClientRect();
    const size = width / 2.1;
    this.image.style.width = this.image.style.height = size + 'px';
    this.image.style.top = event.pageY - window.scrollY - size/2 + 'px';
    this.image.style.left = event.pageX - size/2 + 'px';  
    this.image.focus();

    const { x, y } = this.getDropPosition(event);
    this.startX = x;
    this.startY = y;
  }
  
  touchMove = (event) => {
    const [touch] = event.touches;
    if (!('pageX' in event)) {
      event.pageX = touch.pageX;
      event.pageY = touch.pageY;
    }
    this.dragMove(event);
  }

  dragMove = (event) => {
    if (!this.dragging) {
      return
    }
    const { width } = this.dragTo.getBoundingClientRect();
    const size = width / 2.2;
    this.image.style.width = this.image.style.height = size + 'px';
    this.image.style.top = event.pageY - window.scrollY - size/2 + 'px';
    this.image.style.left = event.pageX - size/2 + 'px'; 
    const { x, y } = this.getDropPosition(event);
    this.lastX = x;
    this.lastY = y;
    this.callBack('move', { x, y, pieceId: this.pieceId });
  }

  dragStop = (event) => {
    if (!this.dragging) {
      return
    }
    event.preventDefault(); 
    event.stopPropagation(); 
    // if (Math.hypot(this.lastX - this.startX, this.lastY - this.startY) < 1) {
    if (this.lastX === -1 && this.lastY === -1) {
      console.log('ROTATE');
      this.callBack('rotate', {
        x: this.lastX,
        y: this.lastY,
        pieceId: this.pieceId
      });
      this.pieceId = null;
      this.hideImage();
    } else {
      this.callBack('drop', {
        x: this.lastX,
        y: this.lastY,
        pieceId: this.pieceId
      });
      this.pieceId = null;
      this.hideImage();
      navigator.vibrate(60);
      // reset for next round to detect tap to rotate
    }
    this.lastX = this.lastY = -1;
  }

  getDropPosition (event) {
    const mouseX = event.pageX;
    const mouseY = event.pageY - window.scrollY;
    // account for the margins on the frame
    const marginX = 10;
    const marginY = 5;
    const { left, top, width, height} = this.dragTo.getBoundingClientRect();
    const x = (mouseX - left - marginX) / (width - marginX * 2);
    const y = (mouseY - top - marginY) / (height - marginY * 2);
    return { x, y };
  }

  showImage () {
    this.image.style.display = 'block';
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
  }
  
  hideImage () {
    this.image.style.display = 'none';
    document.body.style.overflow = 'auto';
    document.body.style.touchAction = Cell.UNSET;
  }

  get dragging () {
    return this.pieceId !== null && this.pieceId !== ''
  }
}