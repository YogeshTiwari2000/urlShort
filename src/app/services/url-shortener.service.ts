import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UrlShortenerService {
  private apiUrl = 'https://urlbackend-qnzx.onrender.com/url'; // Your backend endpoint

  constructor(private http: HttpClient) { }

  shortenUrl(longUrl: string) {
    return this.http.post(this.apiUrl, { url: longUrl });
  }
}