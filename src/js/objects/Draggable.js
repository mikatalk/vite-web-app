// Add class to prevent page refresh
// user-is-dragging
export class Draggable {

  image = new Image();
  
  dragging = false;

  constructor (dragFromElements, dragTo, callBack) {
    
    this.dragFromElements = dragFromElements;
    this.dragTo = dragTo;
    this.callBack = callBack;

    this.image.id = 'draggable-image'
    // this.image.style.imageRendering = 'pixelated';

    console.log('Adding draggable');
    
    this.hideImage();
    
    document.body.appendChild(this.image);
    this.image.style.pointerEvents = 'none';
    
    dragFromElements.forEach((piece, index) => {
      console.log(' + draggable piece', piece);
      piece.addEventListener('pointerdown', this.dragStart);
      // dragTo.addEventListener('pointermove', this.dragMove);
      dragTo.addEventListener('pointerover', this.dragMove);
      document.body.addEventListener('pointermove', this.dragMove);
      
      piece.addEventListener('pointerup', this.dragStop);
      document.body.addEventListener('pointerup', this.dragStop);


    });
  }

  dragStart = (event) => {
    console.log(' + drag start', event.target);
    this.callBack('drag', { piece: event.target });
    this.dragging = true;
    this.image.src = event.target.src;
    this.dragMove(event);
    this.showImage();
  }
  
  dragMove = (event) => {
    if (!this.dragging) {
      return
    }
    this.image.style.left = event.pageX - this.image.width/2 + 'px';
    this.image.style.top = event.pageY - window.scrollY - this.image.width/2 + 'px';
    // console.log(' + drag move', event.pageX), event.pageY;
    
  }
  
  dragStop = (event) => {
    if (!this.dragging) {
      return
    }
    console.log(' + drag stop', event.target);
    this.dragging = false;
    this.hideImage();
    // this.showImage();
  }
  
  showImage () {
    this.image.style.display = 'block';
  }
  
  hideImage () {
    this.image.style.display = 'none';
  }
  
}