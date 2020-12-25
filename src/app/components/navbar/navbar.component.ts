import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  mobile: boolean = false;

  constructor(private _bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
    if (window.screen.width < 768) { // 768px portrait
      this.mobile = true;
    }
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheet);
  }

}

@Component({
  selector: 'bottom-sheet',
  templateUrl: './bottom-sheet.html',
})
export class BottomSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheet>, private iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('whatsapp', sanitizer.bypassSecurityTrustResourceUrl('assets/images/WhatsApp.svg'));
    iconRegistry.addSvgIcon('gmaps', sanitizer.bypassSecurityTrustResourceUrl('assets/images/Google_Maps_icon.svg'));
    iconRegistry.addSvgIcon('email', sanitizer.bypassSecurityTrustResourceUrl('assets/images/email.svg'));
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}