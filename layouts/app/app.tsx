

// import '../static/antd.min.css';
import "./app.less"
import * as React from 'react'
import AppScene from "../scene/scene";
import { App, AppCanvas } from "./app-interface";
import { EventManager, AppEventType } from "../../src/core/event-manager";
import FontManager from "../../src/view/font/font-manager";



export default class AppLayout extends React.Component<{ onSceneLoaded: (a: App) => void }, any> {

  public app: App;

  constructor(props: any) {
    super(props);
    this.app = {
      eventManager: new EventManager(),
    };
    this.state = {
      sceneLoaded: false,
    }
  }

  componentWillMount() {
    FontManager.registerdFrontPathMap.set('helv', '/static/helv-font.json');
  }

  public onSceneLoaded = (canvas: AppCanvas) => {
    this.app.canvas = canvas;
    this.renderFrame();
    this.setState({ sceneLoaded: true });

    this.props.onSceneLoaded(this.app);

  }

  public renderFrame() {
    if (!this.app.canvas) {
      return;
    }
    // 相机情况根据节点数量进行调整
    // 网格helper更新为叶节点下面的位置
    requestAnimationFrame( this.renderFrame.bind(this) );
    const { renderer, scene, camera } = this.app.canvas;
    renderer.render( scene, camera );
    this.app.eventManager.emit(AppEventType.renderFrame, this.app);
  }

  render() {
    const { sceneLoaded } = this.state;
    return (
      <div id="AppLayout">
        {
          sceneLoaded ? 
            React.Children.map(this.props.children, (child: any) =>
              {
                return React.cloneElement(child, { app: this.app });
              }
            )
           : null
        }
        <AppScene onDidMount={this.onSceneLoaded.bind(this)}/>
      </div>
    )
  }
}