import 'dart:ffi';

class Cliente {
  late int _dni;
  late String name;
  late String? email;
  late int? telf;
  late int? cardNum;

  Cliente.dniName(this._dni, this.name);
  Cliente.all(this._dni, this.name, this.email, this.telf, this.cardNum);

  int getDni(){
    return this._dni;
  }
  int getTelf(){
    return this.telf;
  }
  int getCardNum(){
    return this.cardNum;
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

void main(){

  Cliente pablo = new Cliente.dniName(123, "Pablo");
  Cliente samuel = new Cliente.all(111, "Samuel", "samuel@gmail.com", 616231233, 123141);
  
  print(pablo.toString());
  print(samuel.toString());
}