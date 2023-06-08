export class Assets {
  
  static files = {};
  
  static loadImages (urls, onProgress, onComplete) {
    console.log('loading...', urls)
    let progress = 0;
    for (let {name, url} of urls) {
      const image = new Image();
      image.onload = () => {
        progress += 1 / urls.length;
        onProgress(progress);
        console.log(' - progress:', progress)
        if (progress == 1) {
          console.log(' - done:', progress)
          onComplete();
        }
      };
      image.src = url;
      Assets.files[name] = image;
    }
  }

  static getImage(name) {
    return files[name];
  }
}