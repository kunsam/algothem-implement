import * as THREE from 'three';


export default class FontManager{
  public static fontLoader: THREE.FontLoader = new THREE.FontLoader();
  public static frontMap: Map<string, THREE.Font> = new Map();
  public static registerdFrontPathMap: Map<string, string> = new Map();
  public static getFontAsync(type: string): Promise<THREE.Font> {
    if (FontManager.frontMap.has(type)) {
      return Promise.resolve(FontManager.frontMap.get(type)!);
    }
    const path = FontManager.registerdFrontPathMap.get(type);
    if (!path) {
      throw new Error('Dont Exist this font type');
    }
    return new Promise(res => {
      this.fontLoader.load(path, (result) => {
        res(result);
        FontManager.frontMap.set(type, result);
      });
    });
  }

  public static getFont (type: string) {
    return FontManager.frontMap.get(type) as THREE.Font;
  }
  
  public static registerFont(name: string, path: string) {
    FontManager.registerdFrontPathMap.set(name, path);
  }

}
