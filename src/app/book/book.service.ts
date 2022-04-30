import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Book } from './book';
import { BookDetail } from './bookDetail';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl: string = environment.baseUrl + 'books';

  constructor(private http:HttpClient) { }

  getBooks(): Observable<BookDetail[]> {
    return this.http.get<BookDetail[]>(this.apiUrl);
  }

}
