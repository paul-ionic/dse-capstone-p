import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Deploy } from 'cordova-plugin-ionic/dist/ngx';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  deploy: any;
  liveUpdateId: string = 'TEST';
  updateAvailable: any;
  versionCurrent: string = 'TBD';

  constructor(private _deploy: Deploy, private activatedRoute: ActivatedRoute) { 
    const info = this._deploy.getConfiguration();
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  async getCurrVersion() {
    console.log('Calling getCurrVersion()');
    this.versionCurrent = 'Getting current version';
    let info2 = (await this._deploy.getCurrentVersion());
    if (info2) {
      console.log(info2.versionId);
      this.versionCurrent = info2.versionId;
    } else {
      console.log('No version found');
      this.versionCurrent = 'No version found';
    }
    console.log('Executed getCurrVersion()');
  }

  async loadInfo() {
    console.log('Calling loadInfo()');
    this.liveUpdateId = 'Getting current version';
      let info = (await this._deploy.getCurrentVersion());

      if (info) {
        console.log(info.buildId);
        this.liveUpdateId = info.buildId;
      } else {
        console.log('No version found');
        this.versionCurrent = 'No version found';
      }
      console.log('Executed loadInfo()');
    };

  testClicked(){
    console.log("testClicked");
    alert(`test ${this.loadInfo()}`)
  };

}

