/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { BookListComponent } from './book-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Editorial } from 'src/app/editorial/editorial';
import { Book } from '../book';
import { BookService } from '../book.service';
import { BookDetail } from '../bookDetail';

describe('BookListComponent', () => {
 let component: BookListComponent;
 let fixture: ComponentFixture<BookListComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ BookListComponent ],
     providers: [ BookService ]
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(BookListComponent);
   component = fixture.componentInstance;

   let editorial = new Editorial(
     faker.datatype.number(),
     faker.lorem.sentence()
   );
   component.books = [
     new BookDetail(
       faker.datatype.number(),
       faker.lorem.sentence(),
       faker.lorem.sentence(),
       faker.lorem.sentence(),
       faker.image.imageUrl(),
       faker.date.past(),
       editorial,
       [],[]
     ),
   ];
   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });

 it('should have an img element ', () => {
   expect(debug.query(By.css('img')).attributes['alt']).toEqual(
     component.books[0].name
   );
 });

});
