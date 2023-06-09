export class Draggable {

  image = new Image();
  
  dragging = false;

  constructor (dragFromElements, dragTo, callBack) {
    
    this.dragFromElements = dragFromElements;
    this.dragTo = dragTo;
    this.callBack = callBack;
    
    // // create a hotspot to track pointer events
    // this.hotspot.id = 'draggable-hotspot';
    // document.body.appendChild(this.hotspot);

    // add id for css
    this.image.id = 'draggable-image';
    this.image.draggable = false;
    document.body.appendChild(this.image);
    
    this.hideImage();
    
    dragFromElements.forEach((piece, index) => {
      piece.addEventListener('pointerdown', this.dragStart);

      document.body.addEventListener('touchmove', this.touchMove);
      document.body.addEventListener('mousemove', this.dragMove);

      document.body.addEventListener('touchup', this.dragStop);
      document.body.addEventListener('touchend', this.dragStop);
      document.body.addEventListener('touchcancel', this.dragStop);

      document.body.addEventListener('mouseleave', this.dragStop);
      document.body.addEventListener('mouseup', this.dragStop);
    });
  }

  dragStart = (event) => {
    console.log(' + drag start',  event.pageY);
    this.callBack('drag', { piece: event.target });
    this.dragging = true;
    this.image.src = event.target.src;
    // this.dragMove(event);
    this.showImage();
    // event.stopPropagation();
    // event.preventDefault();

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
  }

  dragMove = (event) => {
    if (!this.dragging) {
      return
    }
    console.log('MOVE',  event)
    // event.stopPropagation();
    // event.preventDefault();
    const { width } = this.dragTo.getBoundingClientRect();
    const size = width / 2.1;
    this.image.style.width = this.image.style.height = size + 'px';
    this.image.style.top = event.pageY - window.scrollY - size/2 + 'px';
    this.image.style.left = event.pageX - size/2 + 'px';    
  }
  
  dragStop = (event) => {
    if (!this.dragging) {
      return
    }
    // event.stopPropagation();
    // event.preventDefault();
    console.log(' + drag stop');
    this.dragging = false;
    this.hideImage();
    // this.showImage();
    navigator.vibrate(120);
  }
  
  showImage () {
    this.image.style.display = 'block';
    // this.hotspot.style.display = 'block';
    // this.hotspot.style.pointerEvents = 'all';
    document.body.style.overflow = 'hidden';
    // this.dragFromElements.forEach(a => a.style.pointerEvents = 'none');
  }
  
  hideImage () {
    this.image.style.display = 'none';
    // this.hotspot.style.display = 'none';
    // this.hotspot.style.pointerEvents = 'none';
    document.body.style.overflow = 'auto';
    // this.dragFromElements.forEach(a => a.style.pointerEvents = 'all');
  }
  
}