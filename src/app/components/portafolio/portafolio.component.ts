import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {
  SalesImgs = [
    {img: "assets/ventas/1.jpg"},
    {img: "assets/ventas/2.jpg"},
    {img: "assets/ventas/3.jpg"},
    {img: "assets/ventas/4.jpg"},
    {img: "assets/ventas/5.jpg"},
    {img: "assets/ventas/6.jpg"},
    {img: "assets/ventas/7.jpg"},
    {img: "assets/ventas/8.jpg"},
    {img: "assets/ventas/9.jpg"},
    {img: "assets/ventas/10.jpg"},
  ];

  RestoImgs = [
    {img: "assets/resto/1.jpg"},
    {img: "assets/resto/2.jpg"},
    {img: "assets/resto/3.jpg"},
    {img: "assets/resto/4.jpg"},
    {img: "assets/resto/5.jpg"},
    {img: "assets/resto/6.jpg"},
    {img: "assets/resto/7.jpg"},
    {img: "assets/resto/8.jpg"},
    {img: "assets/resto/9.jpg"},
    {img: "assets/resto/10.jpg"},
  ];

  WebImgs = [
    {img: "assets/web/1.jpg"},
    {img: "assets/web/2.jpg"},
    {img: "assets/web/3.jpg"},
    {img: "assets/web/4.jpg"},
    {img: "assets/web/5.jpg"},
    {img: "assets/web/6.jpg"},
  ];

  Herramientas = [
    {img: "assets/herramientas/1.jpg"},
    {img: "assets/herramientas/2.jpg"},
    {img: "assets/herramientas/3.jpg"},
    {img: "assets/herramientas/4.jpg"},
    {img: "assets/herramientas/5.jpg"},
    {img: "assets/herramientas/6.jpg"},
    {img: "assets/herramientas/7.jpg"},
    {img: "assets/herramientas/8.jpg"},
    {img: "assets/herramientas/9.jpg"},
    {img: "assets/herramientas/10.jpg"},
    {img: "assets/herramientas/11.jpg"},
    {img: "assets/herramientas/12.jpg"},
    {img: "assets/herramientas/13.jpg"},
  ];
  constructor() { }
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

  imagesSlider = {
    speed:500,
    slidesToShow:1,
    slidesToScroll:1,
    cssEase:'linear',
    fade:true,
    autoplay: true,
    draggable:true,
    prevArrow:'.client-feedback .prev-arrow',
    nextArrow:'.client-feedback .next-arrow',
    asNavFor:".thumbs",
  };
  thumbnailsSlider = {
    arrows:false,
    speed:500,
    slidesToShow:2,
    slidesToScroll:1,
    cssEase:'linear',
    autoplay: true,
    centerMode:true,
    draggable:false,
    focusOnSelect:true,
    asNavFor:".feedback",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
        }
      }
    ]
   };


   imagesSlider2 = {
    speed:500,
    slidesToShow:1,
    slidesToScroll:1,
    cssEase:'linear',
    fade:true,
    autoplay: true,
    draggable:true,
    prevArrow:'.client-feedback .prev-arrow',
    nextArrow:'.client-feedback .next-arrow',
    asNavFor:".thumbs2",
  };
  thumbnailsSlider2 = {
    arrows:false,
    speed:500,
    slidesToShow:2,
    slidesToScroll:1,
    cssEase:'linear',
    autoplay: true,
    centerMode:true,
    draggable:false,
    focusOnSelect:true,
    asNavFor:".feedback2",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
        }
      }
    ]
   };

   imagesSlider3 = {
    speed:500,
    slidesToShow:1,
    slidesToScroll:1,
    cssEase:'linear',
    fade:true,
    autoplay: true,
    draggable:true,
    prevArrow:'.client-feedback .prev-arrow',
    nextArrow:'.client-feedback .next-arrow',
    asNavFor:".thumbs3",
  };
  thumbnailsSlider3 = {
    arrows:false,
    speed:500,
    slidesToShow:2,
    slidesToScroll:1,
    cssEase:'linear',
    autoplay: true,
    centerMode:true,
    draggable:false,
    focusOnSelect:true,
    asNavFor:".feedback3",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
        }
      }
    ]
   };
   
  ngOnInit(): void {
  }
}
