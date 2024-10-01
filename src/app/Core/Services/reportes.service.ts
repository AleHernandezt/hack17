import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { appSettings } from '../../settings/appsettings';
import { getCookieHeader } from '../../custom/getCookieHeader';

@Injectable({
  providedIn: 'root',
})
export class ReportesService {
  private apiUrl = `${appSettings.apiUrl}medication`; // URL de tu API

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const { headers } = getCookieHeader();
    return new HttpHeaders(headers);
  }

  getMostRequiredMedications(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getMostRequired`, {
      headers: this.getHeaders(),
    });
  }

  getMostDonatedMedications(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getMostDonated`, {
      headers: this.getHeaders(),
    });
  }

  getMedicationsExpired(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getExpired`, {
      headers: this.getHeaders(),
    });
  }

  getMedicationsExpiredSoon(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getExpireSoon`, {
      headers: this.getHeaders(),
    });
  }

  getMedicationsUrgency(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getUrgency`, {
      headers: this.getHeaders(),
    });
  }

  getMedicationsByCommunity(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getMostRequeriedByCommunity`, {
      headers: this.getHeaders(),
    });
  }
}
