export class Assets {
  
  static files = {};
  
  static loadImages (urls, onProgress, onComplete) {
    let progress = 0;
    for (let {name, url} of urls) {
      const image = new Image();
      image.onload = () => {
        progress += 1 / urls.length;
        onProgress(progress);
        if (progress == 1) {
          onComplete();
        }
      };
      image.src = url;
      Assets.files[name] = image;
    }
  }

  static getImage(name) {
    return Assets.files[name];
  }
}