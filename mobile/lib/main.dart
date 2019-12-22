import 'package:flutter/material.dart';
import 'home.dart';
import 'qrscanner.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'WorldMail',
      theme: ThemeData(
        primarySwatch: Colors.green,
      ),
      home: MainPage(),
      initialRoute: '/',
      routes: <String, WidgetBuilder>{
        '/packages': (BuildContext context) => Packages(title: "page A"),
        '/qrscan'  : (BuildContext context) => QRScan(title: "Scanning"),
      },
    );
  }
}

class Packages extends StatefulWidget {
  Packages({Key key, this.title}) : super(key: key);
  final String title;

  //@override
  _PackagesState createState() => _PackagesState();
//  @override
/*  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Main"),
      ),
    );
  }*/

}

class _PackagesState extends State<Packages> {
  //page_counter = 0;
  String page = "Main";
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
      body: FlatButton(
        child: Text("ChildPage"),
        onPressed: () {
          _changeScreen("New screen");
          Navigator.pushNamed(context, '/');
        },
      ),
    );
  }
}
