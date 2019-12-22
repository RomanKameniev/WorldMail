import 'package:flutter/material.dart';

class MainPage extends StatefulWidget {
  MainPage({Key key, this.title}) : super(key: key);
  final String title;

  //@override
  _HomePageState createState() => _HomePageState();
//  @override
/*  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Main"),
      ),
    );
  }*/
}

class _HomePageState extends State<MainPage> {
  //page_counter = 0;
  String page = "Main";
  String _scanner, value = "";

  void _changeScreen(String screen) {
    setState(() {
      page = screen;
    });
  }

  /*void _incrementCounter() {
    setState(() {
      page_counter++;
    });
  }*/

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(title: Text(page.toString())),
        body: ButtonBar(
          children: <Widget>[
            FlatButton(
                child: Text("ChangePage"),
                onPressed: () {
                  _changeScreen("New screen");
                  Navigator.pushNamed(context, '/packages');
                }),
            FlatButton(
              child: Text("Qr scanner"),
              onPressed: () {
                 Navigator.pushNamed(context, '/qrscan');
              },
            ),
            Text(value.toString())
          ],
        )
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
