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
  liveUpdateId: any;
  updateAvailable: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  private async loadDeployInfo() 
  {
      const info = await this.deploy.getCurrentVersion();
  
      if (info) {
        this.liveUpdateId = info.buildId;
      }    
  
      const updateCheck = await this.deploy.checkForUpdate();
  
      console.log(updateCheck);
  
      if (updateCheck.available) {
        this.updateAvailable = updateCheck.build;
      }    
    };

  testClicked(){
    console.log("testClicked");
    alert(`test ${this.loadDeployInfo()}`)
  };

}

