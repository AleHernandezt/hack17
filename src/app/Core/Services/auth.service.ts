import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { setCookie, getCookie, deleteCookie } from './cookies';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://your-api-url.com/api'; // Replace with your API URL
  private tokenCookieName = 'access_token';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Promise<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password })
      .toPromise()
      .then(response => {
        const token = response.token;
        setCookie(this.tokenCookieName, token);
        return token;
      })
      .catch(error => {
        console.error(error);
        return null;
      });
  }

  logout(): void {
    deleteCookie(this.tokenCookieName);
  }

  getToken(): string | null {
    return getCookie(this.tokenCookieName);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}