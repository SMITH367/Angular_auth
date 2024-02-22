import { Component} from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterLink } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, RouterLink, NgFor, NgIf],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})

export class DashboardComponent {

}
