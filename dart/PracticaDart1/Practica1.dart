import 'dart:ffi';

class Cliente {
  late int _dni;
  late String name;
  String? email;
  int? telf;
  int? cardNum;

  Cliente.dniName(this._dni, this.name);
  Cliente.all(this._dni, this.name, this.email, this.telf, this.cardNum);

  int getDni(){
    return this._dni;
  }
  String getName(){
    return this.name;
  }
  String? getEmail(){
    return this.email;
  }
  int? getTelf(){
    return this.telf;
  }
  int? getCardNum(){
    return this.cardNum;
  }


  int setDni(int dni){
    return this._dni = dni;
  }
  String setName(String name){
    return this.name = name;
  }
  String? setEmail(String email){
    return this.email = email;
  }
  int? setTelf(int telf){
    return this.telf = telf;
  }
  int? setCardNum(int cardNum){
    return this.cardNum = cardNum;
  }


  @override
  String toString() {
    if (this.email == null){
      return 'Cliente(${this._dni}, ${this.name})';
    } else {

    return 'Cliente(${this._dni}, ${this.name}, ${this.email}, ${this.telf}, ${this.cardNum})';
    }
  }
}



class Tipo{
  late int id;
  late String title;
  late String author;
  late int yearPub;
  bool isBorrowed = false;
  late String? dniClient = null;

  Tipo();
  Tipo.idTitle(this.id, this.title){
    author = ""; 
    yearPub = 0000;

  }
  Tipo.all(this.id, this.title, this.author, this.yearPub, this.isBorrowed, this.dniClient);

  getId(){
    return this.id;
  } 
  getTitle(){
    return this.title;
  }
  getAuthor(){
    return this.author;
  }
  getYearPub(){
    return this.yearPub;
  }
  getIsBorrowed(){
    return this.isBorrowed;
  }
  getDniClient(){
    return this.dniClient;
  }


  setId(int id){
    return this.id = id;
  }
  setTitle(String title){
    return this.title = title;
  }
  setAuthor(String author){
    return this.author = author;
  }
  setYearPub(int yearPub){
    return this.yearPub = yearPub;
  }
  setIsBorrowed(bool isBorrowed){
    return this.isBorrowed = isBorrowed;
  }
  setDniClient(String? dniClient){
    return this.dniClient = dniClient;
  }

  @override
  String toString() {
    return '${this.runtimeType}(${this.id}, ${this.title}, ${this.author}, ${this.yearPub}, ${this.isBorrowed}, ${this.dniClient})';
  }

  void borrow(String dni) {
    if (!isBorrowed){
      setIsBorrowed(true);
      setDniClient(dni);
    } else {
      print("el libro ya esta prestado");
    }
  }

  void returnBook(){
    if (isBorrowed){
      setIsBorrowed(false);
      setDniClient(null);
    } else {
      print("el libro no esta prestado");
    }
  }
  bool Borrowed(){
    if (isBorrowed){
      return true;
    } else {
      return false;
    }
  }
  void compareTo(Tipo a) {
    if (a.runtimeType == this.runtimeType) {
      
        print(this.yearPub.compareTo(a.getYearPub()));
      
    }
    print("no son del mismo tipo");
  }

}

class Libro extends Tipo{
  late int numPages;
  late String gender;
  Libro(int id, String title, String author, int yearPub, bool isBorrowed, String? dniClient) : super.all(id, title, author, yearPub, isBorrowed, dniClient);
}

class Revista extends Tipo{
  late int num;
  late String periodicity;
  Revista(int id, String title, String author, int yearPub, bool isBorrowed, String? dniClient) : super.all(id, title, author, yearPub, isBorrowed, dniClient);
}




void main(){


  List<Libro> libros = [];
  List<Revista> revistas = [];
  Libro libro1 = new Libro(1, "Quijote", "Cervantes", 1500, false, null);
  Libro libro2 = new Libro(2, "Geronimo Stilton", "Pablo picasso", 2010, false, null);
  Libro libro3 = new Libro(3, "Vuelta al mundo", "julio verne", 2001, false, null);
  Libro libro4 = new Libro(4, "One piece", "KAsitoko", 1844, false, null);
  Libro libro5 = new Libro(5, "yo-kai", "Julio perez", 1963, false, null);
  libros.add(libro1);
  libros.add(libro2);
  libros.add(libro3);
  libros.add(libro4);
  libros.add(libro5);
  Revista revista1 = new Revista(6, "National Geographic", "Varios", 1888, false, null);
  Revista revista2 = new Revista(7, "Time", "Varios", 1923, false, null);
  Revista revista3 = new Revista(8, "La Razon", "Cotilleo", 1917, false, null);
  Revista revista4 = new Revista(9, "Corazon", "Varios", 1925, false, null);
  Revista revista5 = new Revista(10, "Hola", "Varios", 1845, false, null);
  revistas.add(revista1);
  revistas.add(revista2); 
  revistas.add(revista3);
  revistas.add(revista4);
  revistas.add(revista5);


  Cliente pablo = new Cliente.dniName(123, "Pablo");
  Cliente samuel = new Cliente.all(111, "Samuel", "samuel@gmail.com", 616231233, 123141);
  
  print(pablo.toString());
  print(samuel.toString());

  print(libro1.toString());
  libro1.borrow("123");
  print(libro1.toString());

  int contador = 0;
  for (var libro in libros) {
    if(libro.isBorrowed == true){
      contador++;
    }
    
  }
  int aux = contador;
  print("Hay ${contador} libros prestados");
  contador = 0;
  for (var revista in revistas) {
    if(revista.isBorrowed == true){
      contador++;
    }
    
  }
  print("Hay ${contador} revistas prestadas");
  print("Hay ${contador+aux} prestados en total");

  
  Libro? libroMasAntiguo;
  
  libroMasAntiguo = libros.reduce((a, b) => a.yearPub < b.yearPub ? a : b);
  print("El libro mas antiguo es ${libroMasAntiguo.toString()}");
  

  Revista? revistaMasReciente;
  
  revistaMasReciente = revistas.reduce((a, b) => a.yearPub > b.yearPub ? a : b);
  print("La revista mas antiguo es ${revistaMasReciente.toString()}");
  


}