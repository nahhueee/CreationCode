import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public innerWidth: any;
  Marcas = [
    {img: "assets/marcas/1.jpg"},
    {img: "assets/marcas/2.jpg"},
    {img: "assets/marcas/3.jpg"},
    {img: "assets/marcas/4.jpg"},
    {img: "assets/marcas/9.jpg"},
    {img: "assets/marcas/6.jpg"},
    {img: "assets/marcas/7.jpg"},
    {img: "assets/marcas/8.jpg"},
    {img: "assets/marcas/5.jpg"},
    {img: "assets/marcas/10.jpg"},
    {img: "assets/marcas/11.jpg"},
    {img: "assets/marcas/12.jpg"},
    {img: "assets/marcas/13.jpg"},
    {img: "assets/marcas/14.jpg"},
  ];

  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
  this.innerWidth = window.innerWidth;
  }
  
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  slideConfig = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false,
          infinite: true,
          arrows: false,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          centerPadding: '40px',
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          infinite: true,
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          centerPadding: '40px',
        }
      }
    ]
  };

}
