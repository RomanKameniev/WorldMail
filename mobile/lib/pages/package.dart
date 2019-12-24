import 'package:flutter/material.dart';

class Package extends StatefulWidget {
  Package({Key key, this.title, this.trackNumber}) : super(key: key);
  final String title;
  final String trackNumber;
  //@override
  _PackageState createState() => _PackageState();
//  @override
/*  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Main"),
      ),
    );
  }*/
}

class _PackageState extends State<Package> {
  //page_counter = 0;
  final String trackNumber = "SAO12311422";//Package.trackNumber;
  String page = "Main";

  /*void _changeScreen(String screen) {
    setState(() {
      page = screen;
    });
  }*/

  /*void _incrementCounter() {
    setState(() {
      page_counter++;
    });
  }*/

  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(page.toString())),
      body: Text(trackNumber),
      /* 
      FlatButton(
        child: Text("ChangePage"),
        onPressed: (){
          _changeScreen("New screen");
          Navigator.pushNamed(context, '/packages');
        },*/
    );
  }
}
