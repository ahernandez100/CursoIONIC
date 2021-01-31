import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  
  componentes: Componente[] = [
    {
      icon: 'magnet',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alert',
      name: 'Alerta',
      redirectTo: '/alert'
    },
    {
      icon: 'person',
      name: 'Avatar',
      redirectTo: '/avatar'
    }, {
      icon: 'radio-button-off',
      name: 'Button',
      redirectTo:'/button'

    },
    {
      icon: 'card-outline',
      name: 'Card',
      redirectTo:'/card'
    },
    {
      icon: 'checkmark-circle',
      name: 'CheckBox',
      redirectTo:'/check'
    },
    {
      icon: 'calendar-outline',
      name: 'Datetime',
      redirectTo:'/datetime'
    },
    {
      icon: 'car-outline',
      name: 'Fab',
      redirectTo:'/fab'
    },
    {
      icon: 'bookmark',
      name: 'Inifinte-Sroll',
      redirectTo:'/infinite-scroll'
    },
    {
      icon: 'albums',
      name: 'Input',
      redirectTo:'/input'
    },
    {
      icon: 'list',
      name: 'List',
      redirectTo:'/list'
    },
    {
      icon: 'archive',
      name: 'itemSliding',
      redirectTo:'/item-sliding'
    },
    {
      icon: 'list',
      name: 'listReorde',
      redirectTo:'/list-reorder'
    },
    {
      icon: 'refresh',
      name: 'loading',
      redirectTo:'/loading'
    },
    {
      icon: 'menu',
      name: 'menu',
      redirectTo:'/menu'
    },
    {
      icon: 'albums',
      name: 'modal',
      redirectTo:'/modal'
    },
    {
      icon: 'barcode',
      name: 'popover',
      redirectTo:'/popover'
    },
    {
      icon: 'barcode',
      name: 'progressbar',
      redirectTo:'/progressbar'
    },
    {
      icon: 'refresh',
      name: 'refresh',
      redirectTo:'/refresh'
    },



  ]

  constructor() { }

  ngOnInit() {
  }

}

interface Componente { 
  icon: string;
  name: string;
  redirectTo: string;

}
