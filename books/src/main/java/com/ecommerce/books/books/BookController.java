package com.ecommerce.books.books;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path= "api/books")
public class BookController {

    private final BookService booksService;

    @Autowired
    public BookController(BookService booksService) {
        this.booksService = booksService;
    }

    @GetMapping
	public List<Book> getBooks(){
		return booksService.getBooks();
	}
    
    @PostMapping
    public void newBook(@RequestBody Book book) {
        booksService.addnewBook(book);
    }

    @DeleteMapping(path="{bookId}")
    public void deleteBook(@PathVariable("bookId") Long bookId){
        booksService.deleteBook(bookId);
    }

    @PutMapping(path = "{bookId}")
    public void updateBook(
        @PathVariable("bookId") Long bookId,
        @RequestParam(required = false) String title,
        @RequestParam(required = false) String author,
         @RequestParam(required = false) String description,
        @RequestParam(required = false) Number price,
        @RequestParam(required = false) String photourl
    ){
        booksService.updateBook(bookId,title,author,description,price,photourl);
    }

}

