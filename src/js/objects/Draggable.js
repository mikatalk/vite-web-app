export class Draggable {

  image = new Image();
  
  dragging = false;

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
      // piece.addEventListener('pointerdown', this.dragStart);
      piece.addEventListener('mousedown', this.dragStart);
      piece.addEventListener('touchstart', this.touchStart);
      // document.addEventListener('touchstart', e => e.preventDefault(), false);

      document.addEventListener('touchmove', this.touchMove);
      document.addEventListener('mousemove', this.dragMove);

      document.addEventListener('touchup', this.dragStop);
      document.addEventListener('touchend', this.dragStop);
      document.addEventListener('touchcancel', this.dragStop);
      document.isTrusted = true;

      document.addEventListener('mouseleave', this.dragStop);
      document.addEventListener('mouseup', this.dragStop);
    });
  }

  touchStart = (event) => {
    event.stopPropagation();
    event.preventDefault();
    const [touch] = event.touches;
    this.dragStart(touch);
  }
  dragStart = (event) => {
    // event.stopPropagation();
    // event.preventDefault();
    this.callBack('drag', { piece: event.target });

    this.dragging = true;
    this.image.src = event.target.src;
    this.showImage();

    const { width } = this.dragTo.getBoundingClientRect();
    const size = width / 2.1;
    this.image.style.width = this.image.style.height = size + 'px';
    this.image.style.top = event.pageY - window.scrollY - size/2 + 'px';
    this.image.style.left = event.pageX - size/2 + 'px';  
    this.image.focus()
  }
  
  touchMove = (event) => {
    const [touch] = event.touches;
    this.dragMove(touch);
    event.stopPropagation();
    event.preventDefault();
  }

  dragMove = (event) => {
    if (!this.dragging) {
      return
    }
    // event.stopPropagation();
    // event.preventDefault();

    {
      const { width } = this.dragTo.getBoundingClientRect();
      const size = width / 2.1;
      this.image.style.width = this.image.style.height = size + 'px';
      this.image.style.top = event.pageY - window.scrollY - size/2 + 'px';
      this.image.style.left = event.pageX - size/2 + 'px'; 
    }
   
    {
      const { x, y } = this.getDropPosition(event);
      this.callBack('move', { x, y });
    }

   
  }
  
  dragStop = (event) => {
    if (!this.dragging) {
      return
    }
    event.preventDefault(); 
    event.stopPropagation(); 
    
    const { x, y } = this.getDropPosition(event);
    this.callBack('drop', { x, y });
    this.dragging = false;
    this.hideImage();
    navigator.vibrate(60);
  }
  
  getDropPosition (event) {
    const mouseX = event.pageX;
    const mouseY = event.pageY - window.scrollY;
    const margin = 5; // account for the 5px margin on the frame
    const { left, top, width, height} = this.dragTo.getBoundingClientRect();
    const x = (mouseX - left) / (width - margin * 2);
    const y = (mouseY - top) / (height - margin * 2);
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
    document.body.style.touchAction = 'unset';
  }
}