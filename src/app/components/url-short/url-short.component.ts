import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UrlShortenerService } from '../../services/url-shortener.service';
import { CommonModule } from '@angular/common';
import { Interface } from 'readline';
import { HttpClientModule } from '@angular/common/http';
import { response } from 'express';

@Component({
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './url-short.component.html',
  styleUrl: './url-short.component.scss',
  standalone: true,
})
export class UrlShortComponent implements OnInit {
  longUrl: string = '';
  shortUrl: any;
  shortUrlDirect: any;
  // userData: any = {
  //   userEmail: "yogi@gmail.com",
  //   userName: "Yogesh",
  //   password: "1234566",
  //   cpassword: "123456",
  //   phone: "123456"
  // }


  constructor(private urlShortenerService: UrlShortenerService) { }
  ngOnInit(): void {
    console.log('URL Shortener Component Initialized');

  }

  add() {
    this.urlShortenerService.shortenUrl(this.longUrl)
      .subscribe({
        next: (response: any) => {
          this.shortUrlDirect = `http://localhost:8001/${response.id}`;
          // http://localhost:8001/gyfStEBA
          this.shortUrl = response;
          console.log('Short URL:', this.shortUrl);
        },
        error: (err) => {
          console.error('Error adding user:', err);
        }
      });
  }

}
