import {Component, OnInit, ViewContainerRef} from '@angular/core';
import { Location } from "@angular/common";
import {ModalDialogOptions, ModalDialogService} from "nativescript-angular";
import {BrowseRootComponent} from "~/app/browse-root/browse-root.component";
import {SearchRootComponent} from "~/app/search-root/search-root.component";

@Component({
  selector: 'ns-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css'],
  moduleId: module.id,
})
export class FeatureComponent implements OnInit {

  constructor(private modalService: ModalDialogService, private viewContaienrRef: ViewContainerRef) { }

  ngOnInit() {
  }

  openModalBrowse(): void {

    const options: ModalDialogOptions = {
      fullscreen: true,
      viewContainerRef: this.viewContaienrRef
    };

    this.modalService.showModal(BrowseRootComponent, options);
  }

  openModalSearch(): void {

    const options: ModalDialogOptions = {

      fullscreen:true,
      viewContainerRef: this.viewContaienrRef
    };

    this.modalService.showModal(SearchRootComponent, options);
  }

}
