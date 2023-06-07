export class Assets {
  
  static files = {};
  
  static loadImages (urls, onProgress, onComplete) {
    let progress = 0;
    const updateProgress = () => {
      progress += 1 / urls.length
      onProgress(progress);
      if (progress == 1) {
        onComplete();
      }
    }
    for (let {name, url} of urls) {
      const image = new Image();
      image.src = url;
      image.onload = updateProgress;
      Assets.files[name] = image;
    }
  }

  static getImage(name) {
    return files[name];
  }
}